var testRecipeArr = [
    {
        recipe_id: 1,
        name: "spaghetti",
        status: 0,
        link: 'https://www.allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/',
        type: 'dinner'
    },
    {
        recipe_id: 2,
        name: "waffles",
        status: 0,
        link: 'https://www.allrecipes.com/recipe/22180/waffles-i/',
        type: 'breakfast'
    },
    {
        recipe_id: 3,
        name: "ramen",
        status: 0,
        link: 'https://www.foxandbriar.com/easy-chicken-ramen/',
        type: 'lunch'
    },
    {
        recipe_id: 4,
        name: "Chicken noodle Soup",
        status: 0,
        link: 'https://www.tasteofhome.com/recipes/the-ultimate-chicken-noodle-soup/',
        type: 'lunch'
    },
    {
        recipe_id: 5,
        name: "brownies",
        status: 0,
        link: 'https://thestayathomechef.com/brownie-recipe/',
        type: 'dessert'
    },
    {
        recipe_id: 6,
        name: "Omelette",
        status: 0,
        link: 'https://www.incredibleegg.org/recipe/basic-french-omelet/',
        type: 'breakfast'
    },
    {
        recipe_id: 7,
        name: "chocolate cake",
        status: 0,
        link: 'https://thestayathomechef.com/the-most-amazing-chocolate-cake/',
        type: 'dessert'
    }
]

var testRatingArr = [
    {
        rating_id: 1,
        rating: 4,
        comments: "This is a comment",
        favorite: 0,
        fkrecipes: 2 //waffles
    },
    {
        rating_id: 2,
        rating: null,
        comments: "This is a comment, I wrote this because I had a specific thought about this recipe and wanted to jot it down for future reference",
        favorite: 0,
        fkrecipes: 6 //Omelette
    },
    {
        rating_id: 3,
        rating: 3,
        comments: null,
        favorite: 1,
        fkrecipes: 1 //spaghetti
    },
]
// DELETE ABOVE ON DB UPLINK

///////////////////////////////////////////////
/////   Lower case are regular comments   /////
///////////////////////////////////////////////
/////      UPPER CASE ARE TO DO ITEMS     /////
///////////////////////////////////////////////

// Populate Modal
$(document).on("click", ".card-link", populateModal);
function populateModal() {
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


    let recID = $(this).attr('recipe_id');
    // If rating attr is not defined then INSERT row in ratings table
    if ($('.bin-btn').attr('rating_id') === "undefined") {
        // DELETE FROM RATINGS TABLE USING recID
    }
    // DELETE FROM RECIPE TABLE USING recID
}