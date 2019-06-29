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
    // var testArr = [
    //     {
    //         recipe_id: 1,
    //         name: "spaghetti",
    //         status: 0,
    //         link: 'https://www.allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/',
    //         type: 'dinner',
    //         rating: 4,
    //         comments: "This is a comment",
    //         favorite: 0
    //     },
    //     {
    //         recipe_id: 2,
    //         name: "waffles",
    //         status: 0,
    //         link: 'https://www.allrecipes.com/recipe/22180/waffles-i/',
    //         type: 'breakfast',
    //         rating: 3,
    //         comments: "This is a comment",
    //         favorite: 0
    //     },
    //     {
    //         recipe_id: 3,
    //         name: "",
    //         status: 0,
    //         link: '',
    //         type: '',
    //         rating: 2,
    //         comments: "This is a comment",
    //         favorite: 0
    //     },
    //     {
    //         recipe_id: 4,
    //         name: "",
    //         status: 0,
    //         link: '',
    //         type: '',
    //         rating: ,
    //         comments: "This is a comment",
    //         favorite: 0
    //     },
    //     {
    //         recipe_id: 5,
    //         name: "",
    //         status: 0,
    //         link: '',
    //         type: '',
    //         rating: ,
    //         comments: "This is a comment",
    //         favorite: 0
    //     },
    //     {
    //         recipe_id: 6,
    //         name: "",
    //         status: 0,
    //         link: '',
    //         type: '',
    //         rating: ,
    //         comments: "This is a comment",
    //         favorite: 0
    //     },
    //     {
    //         recipe_id: 7,
    //         name: "",
    //         status: 0,
    //         link: '',
    //         type: '',
    //         rating: ,
    //         comments: "This is a comment",
    //         favorite: 0
    //     },

    // ]
}
function makeCard(obj){

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

