
//MATERIALISE LISTENERS
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    //var instances = M.Sidenav.init(elems, options);
});
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    //var instances = M.Modal.init(elems, options);
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    //var instances = M.FormSelect.init(elems, options);
  });


//MATERIALISE FUNTIONS
$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('select').formSelect();
});

//STAR RATING VALUE
$(document).on("click", ".star-rating", getRatingValue);
    function getRatingValue() {
        clickedValue = $(this).attr("value");
        console.log(clickedValue);
    }
