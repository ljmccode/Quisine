// rating variable, changes on click with function
var rating = 0;


//star rating value changer
$(document).on("click", ".star_rating", getRatingValue);
function getRatingValue() {
    rating = $(this).attr("value");
    console.log(rating);
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


//MATERIALISE FUNTIONS
$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('select').formSelect();
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

