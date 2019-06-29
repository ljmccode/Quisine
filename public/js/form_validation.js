$(document).ready(function () {
    $(".name-not-valid").hide();
    console.log("hit");

    $(document).on("click", ".search_name", isValidName);
    function isValidName(name) {
        event.preventDefault();
        var name = $('.search_by_name').val();
        if (name == "" || name == null) {
            $(".name-not-valid").show();
            return false;
        } else {
            $(".name-not-valid").hide();
            return true
        }

    }

    $(document).on("click", ".search_other", isFieldEntered);
    function isFieldEntered(name) {
        event.preventDefault();
        var radios = document.getElementsByName("rating");
        var ratingSelected = false;
    
        var i = 0;
        while (!ratingSelected && i < radios.length) {
            if (radios[i].checked) {
                ratingSelected = true;
                i++;    
            }    
        }
    
        if (!ratingSelected) {

        }
        return formValid;

    }

    // add this to html
    // <div class="name-not-valid">Please enter valid recipe name</div>

})