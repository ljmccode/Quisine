
///////////////////////////////////////////////
/////   Lower case are regular comments   /////
///////////////////////////////////////////////
/////      UPPER CASE ARE TO DO ITEMS     /////
///////////////////////////////////////////////

// Populate Modal
$(document).on("click", ".card-link", populateModal);
function populateModal() {
    
    let url = $( this ).attr('url_link');
    console.log(url);
    // $('.modal-image-tag').attr('src', url);
    // <img class="materialboxed center modal-image-tag" width="auto" src="images/sample-1.jpg"></img>
    $('.img-container').empty();
    $('<img>', {class: 'materialboxed center', width: '100%', src: url}).appendTo('.img-container');
    $('.materialboxed').materialbox();

    let recipeID = $(this).attr("id");
    let recObj = {};
    $.ajax("/api/recipe/" + recipeID, {
        type: "GET"
    }).then(function (data1) {
        recObj = data1[0];

        //RATING TABLE CALL
        $.ajax("/api/rating/" + recipeID, {
            type: "GET"
        }).then(function (data2) {
            console.log(recObj)

            let ratObj = data2[0];
            console.log(ratObj);

            // Set recipe name
            $(".modal-header").text(recObj.name);
            // Set recipe link
            $(".recipe-modal-link").attr("href", recObj.link);
            // Add recipe id to fav button
            $('.fav-btn').attr('recipe_id', recObj.recipe_id);
            // Add recID To trash button
            $('.bin-btn').attr('recipe_id', recObj.recipe_id);
            // Add recID to all stars
            $('.modal-rating').attr('recipe_id', recObj.recipe_id);
            // Add recID to comment submit
            $('.edit-comment').attr('recipe_id', recObj.recipe_id);

            // Set fav icon to outline as default
            $('.fav-icon').text('favorite_border');
            // Set comment to "No Comments" as default;
            $('#textarea1').val("No comments");
            M.textareaAutoResize($('#textarea1'));

            // Build rating stars (default is unselected)
            buildRatingSelector();

            if (ratObj) {
                // Add rating id to fav btn
                $('.fav-btn').attr('rating_id', ratObj.rating_id);

                // Add rating id to bin btn
                $('.bin-btn').attr('rating_id', ratObj.rating_id);

                // Add rating id to bin btn
                $('.edit-comment').attr('rating_id', ratObj.rating_id);

                // Add rating id to all stars
                $('.modal-rating').attr('rating_id', ratObj.rating_id);

                //if the rating row has a rating, fill them appropriately
                if (ratObj.rating) {
                    fillRatingStars(ratObj.rating)
                }

                //if the rating row has a comment, fill it appropriately
                if (ratObj.comments) {
                    $('#textarea1').val(ratObj.comments);
                    M.textareaAutoResize($('#textarea1'));
                }

                //if the rating row is a fav, fill it appropriately
                if (ratObj.favorite == 1) {
                    $('.fav-icon').text('favorite');
                }

                //add rating id to each star selector
                $('.modal-rating').attr('rating_id', ratObj.rating_id);
            }

            //add recipe id to each star selector
            $('.modal-rating').attr('recipe_id', recObj.recipe_id);

        });
    });

}





function fillRatingStars(rating) {
    buildRatingSelector();
    // Change value of rating selector
    // jQuery v1.6 and above
    $(".modal-rating[value=" + rating + "]").prop("checked", true);
    // jQuery v1.9 and below
    // $(".modal-rating[value=" + rating + "]").attr('checked', 'checked');
}
function buildRatingSelector() {
    $('.recipe-modal-header').empty();
    let labelArr = ["Blegh", "Bad", "Okay", "Great", "Awesome"];
    let fieldset = $('<fieldset>', { class: 'rating' });
    for (let i = 5; i > 0; i--) {
        let inp = $('<input />', {
            type: 'radio',
            id: ('Mstar' + i),
            name: 'rating',
            class: 'star_rating modal-rating',
            value: i
        }).appendTo(fieldset);
        $('<label>', {
            class: 'full',
            for: ('Mstar' + i),
            title: labelArr[i - 1]
        }).appendTo(fieldset)
    }
    $(fieldset).appendTo('.recipe-modal-header');
}



// Modal star rating value changer
var modalRating = 0;

$(document).on("click", ".modal-rating", updateRatingValue);
function updateRatingValue() {
    let rateID = $(this).attr('rating_id');
    let recID = $(this).attr('recipe_id');
    console.log("RatingID: " + rateID);
    modalRating = $(this).attr("value");

    console.log(modalRating);
    // If rating attr is not defined then make row in ratings table
    if (rateID == null) {

        // Insert rating and rec ID into ratings table
        let post = { rating: modalRating }
        $.ajax("/api/rating/" + recID, {
            type: "POST",
            data: JSON.stringify(post),
            dataType: "json",
            contentType: 'application/json; charset=utf-8'
        }).then(function (data) {
            // populateModal();
            // console.log(data)
        });
    } else {

        // Update rating column in ratings table
        let patch = { rating: modalRating }
        $.ajax("/api/rating/" + rateID, {
            type: "PATCH",
            data: JSON.stringify(patch),
            dataType: "json",
            contentType: 'application/json; charset=utf-8'
        }).then(function (data) {
            // populateModal();
            // console.log(data)
        });
    }
}


// Update fav icon on click
$(document).on("click", ".fav-btn", updateFav);
function updateFav() {
    let rateID = $(this).attr('rating_id');
    let recID = $(this).attr('recipe_id');
    // If rating attr is not defined then INSERT row in ratings table
    if (rateID == null) {
        // Must be unfaved so change icon to fav
        $('.fav-icon').text('favorite');
        // Insert favorite and rec ID into ratings table
        let post = { favorite: 1 }
        $.ajax("/api/rating/" + recID, {
            type: "POST",
            data: JSON.stringify(post),
            dataType: "json",
            contentType: 'application/json; charset=utf-8'
        }).then(function (data) {
            // populateModal();
            // console.log(data)
        });
    } else {
        let rateID = $(this).attr('rating_id')
        let favVal = 0;
        // Determine if 0 or 1 and change accordingly
        if ($('.fav-icon').text() === 'favorite') {
            $('.fav-icon').text('favorite_border');
        } else {
            $('.fav-icon').text('favorite');
            favVal = 1;
        }

        // Updates favorite column in ratings table
        let patch = { favorite: favVal }
        $.ajax("/api/rating/" + rateID, {
            type: "PATCH",
            data: JSON.stringify(patch),
            dataType: "json",
            contentType: 'application/json; charset=utf-8'
        }).then(function (data) {
            // populateModal();
            console.log(data)
        });
    }
}


// Shows the edit button when comment text area is clicked
$(document).on("click", "#textarea1", showEditButton);
function showEditButton() {
    $('.edit-comment').removeClass("hide");
}
// Update comment on submit click IF NOT DONE THROUGH HTML LINK
$(document).on("click", ".edit-comment", updateComment);
function updateComment() {
    event.preventDefault();
    let rateID = $(this).attr('rating_id');
    let recID = $(this).attr('recipe_id');
    let comment = $('#textarea1').val();
    console.log(comment)
    // If rating attr is not defined then INSERT row in ratings table
    if (rateID == null) {
        // Insert comment and rec ID into ratings table
        let post = { comments: comment }
        $.ajax("/api/rating/" + recID, {
            type: "POST",
            data: JSON.stringify(post),
            dataType: "json",
            contentType: 'application/json; charset=utf-8'
        }).then(function (data) {
            // populateModal();
            // console.log(data)
        });
    } else {
        let rateID = $(this).attr('rating_id');
        // Updates favorite column in ratings table
        let patch = { comments: comment }
        $.ajax("/api/rating/" + rateID, {
            type: "PATCH",
            data: JSON.stringify(patch),
            dataType: "json",
            contentType: 'application/json; charset=utf-8'
        }).then(function (data) {
            // populateModal();
            console.log(data)
        });
    }
}

// Delete icon on click
$(document).on("click", ".bin-btn", deleteRecipe);
function deleteRecipe() {
    // NEED TO ADD CONFIRMATION!!


    let rateID = $(this).attr('rating_id');
    let recID = $(this).attr('recipe_id');

    // If rating attr is not defined then INSERT row in ratings table
    if (rateID != null) {
        // Delete from ratings table using recID
        $.ajax("/api/rating/" + rateID, {
            type: "DELETE"
        }).then(function (data) {
            // populateModal();
            // console.log(data)
        });
    }
    // Delete from recipe table using recID 
    $.ajax("/api/recipe/" + recID, {
        type: "DELETE"
    }).then(function (data) {
        // populateModal();
        // console.log(data)

        $('#modal1').modal('close')
        // Removes card from card list
        var elem = document.querySelector('a[card_recipe_id="' + recID + '"]');
        elem.parentNode.removeChild(elem);
    });

}