

///////////////////////////////////////////////
/////   Lower case are regular comments   /////
///////////////////////////////////////////////
/////      UPPER CASE ARE TO DO ITEMS     /////
///////////////////////////////////////////////
// searching recipe in database
$(".search_name").on("click", findRecipe);
function findRecipe() {
    console.log("clicked search")
    event.preventDefault();
    var recipeName = {
        name: $(".search_by_name").val().trim(),
    };
    // para1=" + data + "&para2=" + data2
    $.get("/api/search/recipe/name&" + recipeName.name, function (data) {
        console.log(recipeName);
        console.log(data);
        console.log("Searching for recipe");
        searchResults(data);
    });
}
function searchResults(data) {
    $('#results').removeClass("hide");
    $('#results-cards').empty();
    for (var i in data) {
        $(makeCard(data[i])).appendTo("#results-cards")
    }
    //scroll to results
    var position = $('#results').offset().top;
    $("body, html").animate({
        scrollTop: position
    } /* speed */);
}
//Show results container
$(document).on("click", ".all_recipes", showResults);
function showResults() {
    $('#results').removeClass("hide");

    // build results
    allResults();

    //scroll to results
    var position = $('#results').offset().top;
    $("body, html").animate({
        scrollTop: position
    } /* speed */);
}
// Builds Results container and gets DB info
function allResults() {
    $('#results-cards').empty();
    $.ajax("/api/recipes", {
        type: "GET"
    }).then(function (data) {
        console.log(data)
        console.log("All recipes grabbed");
        for (var i in data) {
            $(makeCard(data[i])).appendTo("#results-cards")
        }
    });
}


// Makes a single card with the given object
function makeCard(obj) {
    $.ajax("/api/images/" + obj.name, {
        type: "GET"
    }).then(function (data) {
        console.log(data)
        let url = 'images/sample-2.jpg';
        if (data[0]) url = data[0].assets.preview_1500.url;

        var a = $('<a>', { class: 'modal-trigger card-link', href: "#modal1", id: obj.recipe_id, url_link: url });
        var card = $('<div>', { class: 'card small left' }).appendTo(a);
        var cardIMG = $('<div>', { class: 'card-image' }).appendTo(card);

        if (data[0]) {
            $('<img>', { src: url }).appendTo(cardIMG);
        } else {
            $('<img>', { src: 'images/sample-2.jpg' }).appendTo(cardIMG);
        }

        var content = $('<div>', { class: 'card-content' }).appendTo(card);
        $('<span>', { class: 'card-title' }).text(obj.name).appendTo(content);
        a.attr('card_recipe_id', obj.recipe_id)
        a.appendTo("#results-cards")
    });


}


