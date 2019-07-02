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


//Show results container
$(document).on("click", ".activate-results", showResults);
function showResults() {
    $('#results').removeClass("hide");

    // build results
    buildResults();

    //scroll to results
    var position = $('#results').offset().top;
    $("body, html").animate({
        scrollTop: position
    } /* speed */);
}
function buildResults() {
    //AJAX CALL

    for (var i in testRecipeArr) {
        $(makeCard(testRecipeArr[i])).appendTo('#results-cards');
    }
}
function makeCard(obj) {

    var a = $('<a>', { class: 'modal-trigger card-link', href: "#modal1", id: obj.recipe_id });
    var card = $('<div>', { class: 'card small left' }).appendTo(a);
    var cardIMG = $('<div>', { class: 'card-image' }).appendTo(card);
    $('<img>', { src: 'images/sample-1.jpg' }).appendTo(cardIMG);
    var content = $('<div>', { class: 'card-content' }).appendTo(card);
    $('<span>', { class: 'card-title' }).text(obj.name).appendTo(content);


    return a;

    // $('<div>', {
    //     class: 'row',
    //     id: arr[i],
    //     value: i
    //   }).text(arr[i]).appendTo('#buttons');

}


