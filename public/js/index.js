var recipes = [];
var testRecipeArr = [
  {
    recipe_id: 1,
    name: "spaghetti",
    status: 0,
    link:
      "https://www.allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/",
    type: "dinner"
  },
  {
    recipe_id: 2,
    name: "waffles",
    status: 0,
    link: "https://www.allrecipes.com/recipe/22180/waffles-i/",
    type: "breakfast"
  },
  {
    recipe_id: 3,
    name: "ramen",
    status: 0,
    link: "https://www.foxandbriar.com/easy-chicken-ramen/",
    type: "lunch"
  },
  {
    recipe_id: 4,
    name: "Chicken noodle Soup",
    status: 0,
    link:
      "https://www.tasteofhome.com/recipes/the-ultimate-chicken-noodle-soup/",
    type: "lunch"
  },
  {
    recipe_id: 5,
    name: "brownies",
    status: 0,
    link: "https://thestayathomechef.com/brownie-recipe/",
    type: "dessert"
  },
  {
    recipe_id: 6,
    name: "Omelette",
    status: 0,
    link: "https://www.incredibleegg.org/recipe/basic-french-omelet/",
    type: "breakfast"
  },
  {
    recipe_id: 7,
    name: "chocolate cake",
    status: 0,
    link: "https://thestayathomechef.com/the-most-amazing-chocolate-cake/",
    type: "dessert"
  }
];

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
    comments:
      "This is a comment, I wrote this because I had a specific thought about this recipe and wanted to jot it down for future reference",
    favorite: 0,
    fkrecipes: 6 //Omelette
  },
  {
    rating_id: 3,
    rating: 3,
    comments: null,
    favorite: 1,
    fkrecipes: 1 //spaghetti
  }
];
// DELETE ABOVE ON DB UPLINK

///////////////////////////////////////////////
/////   Lower case are regular comments   /////
///////////////////////////////////////////////
/////      UPPER CASE ARE TO DO ITEMS     /////
///////////////////////////////////////////////

// NOT WORKING (FIRING ON MODAL STAR CLICK)
// rating variable, changes on click with function
var searchRating = 0;
//search star rating value changer
$(document).on("click", ".search-rating", getSearchRatingValue);
function getSearchRatingValue() {
  searchRating = $(this).attr("value");
  console.log(searchRating);
}

//Materialise Functions
$(document).ready(function() {
  // Closes comment box at event
  var closeComment = function() {
    var elem = document.querySelector(".collapsible");
    var instance = M.Collapsible.getInstance(elem);
    instance.close(0);
  };

  $(".sidenav").sidenav();
  $(".modal").modal({
    onCloseEnd: closeComment,
    opacity: 0.5
  });
  $("select").formSelect();
  $(".parallax").parallax();
  $(".scrollspy").scrollSpy({
    throttle: 50
  });
  $(".materialboxed").materialbox();
  $(".collapsible").collapsible();
});

$(".name-not-valid").hide();
$(".form-not-filled").hide();

// // rating variable, changes on click with function
// var rating = 0;

// //star rating value changer
// $(document).on("click", ".search-rating", getRatingValue);
// function getRatingValue() {
//     rating = $(this).attr("value");
//     console.log(rating);
// }

//Show results container
$(document).on("click", ".search_name", isValidName);
// check if user recipe name is valid
function isValidName(name) {
  event.preventDefault();
  var name = $(".search_by_name").val();
  if (name == "" || name == null) {
    $(".name-not-valid").show();
    return false;
  } else {
    $(".name-not-valid").hide();
    showResults();
  }
}

$(document).on("click", ".search_other", isRatingSelected);
// checks if rating is selected
function isRatingSelected() {
  event.preventDefault();
  console.log("hit");
  var radios = document.getElementsByName("rating");
  var ratingSelected = false;

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      ratingSelected = true;
      return showResults();
    } else {
      isTypeSelected();
    }
    // if no rating, checks if type is selected
    function isTypeSelected() {
      console.log("hit2");
      var select = document.getElementById("select");
      console.log(select.value);
      if (!select.value == "") {
        console.log("yup");
        return showResults();
      } else {
        // if neither rating or type is selected, error shows
        $(".form-not-filled").show();
        console.log("nope");
      }
    }
    function showResults() {
      $("#results").removeClass("hide");
      // build results
      buildResults();
      //scroll to results
      var position = $("#results").offset().top;
      $("body, html").animate(
        {
          scrollTop: position
        } /* speed */
      );
    }

    // //MATERIALISE LISTENERS
    // document.addEventListener('DOMContentLoaded', function () {
    //     var elems = document.querySelectorAll('.sidenav');
    //     //var instances = M.Sidenav.init(elems, options);
    // });
    // document.addEventListener('DOMContentLoaded', function () {
    //     var elems = document.querySelectorAll('.modal');
    //     //var instances = M.Modal.init(elems, options);
    // });
    // document.addEventListener('DOMContentLoaded', function () {
    //     var elems = document.querySelectorAll('select');
    //     //var instances = M.FormSelect.init(elems, options);
    // });
    // document.addEventListener('DOMContentLoaded', function () {
    //     var elems = document.querySelectorAll('.parallax');
    //     //var instances = M.Parallax.init(elems, options);
    // });
    // document.addEventListener('DOMContentLoaded', function () {
    //     var elems = document.querySelectorAll('.scrollspy');
    //     //var instances = M.ScrollSpy.init(elems, options);
    // });

    //TESTING FUNCTIONS [[[[[[[[DELETE LATER]]]]]]]]

    //adding recipe
    $(document).on("click", ".add_recipe", getValues);
    function getValues() {
      event.preventDefault();
      var name = $(".recipe_name").val();
      console.log(name);

      var type = $(".type").val();
      console.log(type);

      var link = $(".recipe_link").val();
      console.log(link);
    }

    //search recipe name
    $(document).on("click", ".search_name", getNameValues);
    function getNameValues() {
      event.preventDefault();
      var name = $(".search_by_name").val();
      console.log(name);
    }

    //search recipe by other
    $(document).on("click", ".search_other", getOtherValues);
    function getOtherValues() {
      event.preventDefault();

      var type = $(".search_by_type").val();
      console.log(type);

      console.log("Rating Func: " + rating);
    }
  }
}
