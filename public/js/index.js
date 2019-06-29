// rating variable, changes on click with function
var rating = 0;


//star rating value changer
$(document).on("click", ".star_rating", getRatingValue);
function getRatingValue() {
    rating = $(this).attr("value");
    console.log(rating);
}



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

    // `name`, `status`, `link`, `type`
    // {
    //     recipe_id: 7,
    //     name: "",
    //     status: 0,
    //     link: '',
    //     type: '',
    //     rating: ,
    //     comments: "This is a comment",
    //     favorite: 0
    // }

    var testArr = [
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

    for(var i in testArr){
        $(makeCard(testArr[i])).appendTo('#results-cards');
    }

}
function makeCard(obj) {

    var a = $('<a>', { class: 'modal-trigger card-link', href:"#modal1", id: obj.recipe_id });
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




//MATERIALISE LISTENERS
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    //var instances = M.Sidenav.init(elems, options);
});
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    //var instances = M.Modal.init(elems, options);
});
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    //var instances = M.FormSelect.init(elems, options);
});
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.parallax');
    //var instances = M.Parallax.init(elems, options);
});
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.scrollspy');
    //var instances = M.ScrollSpy.init(elems, options);
});


//MATERIALISE FUNTIONS
$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('select').formSelect();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
});



//TESTING FUNCTIONS [[[[[[[[DELETE LATER]]]]]]]]

//adding recipe
$(document).on("click", ".add_recipe", getValues);
function getValues() {
    event.preventDefault();
    var name = $('.recipe_name').val();
    console.log(name);

    var type = $('.type').val();
    console.log(type);

    var link = $('.recipe_link').val();
    console.log(link);
}

//search recipe name
$(document).on("click", ".search_name", getNameValues);
function getNameValues() {
    event.preventDefault();
    var name = $('.search_by_name').val();
    console.log(name);
}

//search recipe by other
$(document).on("click", ".search_other", getOtherValues);
function getOtherValues() {
    event.preventDefault();

    var type = $('.search_by_type').val();
    console.log(type);

    console.log('Rating Func: ' + rating)
}

