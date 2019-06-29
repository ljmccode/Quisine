// // FOR POSSIBLE FUTURE USE IF WE DECIDE TO ADD THIRD PARTY API CALLS

// const displayRecipeInfo = function() {
//   //   var recipe = $(this).attr("data-name");
//   var recipe = "eggs";
//   //TODO: figure out dishType query. "&dishType=breakfast" should work but is not...
//   // var type = "dinner";
//   var queryURL =
//     "https://api.edamam.com/search?q=" +
//     recipe +
//     "&app_id=${appId}&app_key=${apiKey}&from=0&to=10";
//   var queryURL2 = "/api/recipes";
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     console.log(response.hits);
//     var recipes = response.hits;
//     for (let i = 0; i < recipes.length; i++) {
//       var listRecipeDiv = $("<div class='recipes'>");

//       var imgURL = recipes[i].recipe.image;
//       var title = recipes[i].recipe.label;
//       var ingredients = recipes[i].recipe.ingredients;

//       var pOne = $("<p>").text(title);
//       var favBtn = $("<button>")
//         .attr("class", "save-btn")
//         .text("Save Recipe");
//       var image = $("<img>").attr("src", imgURL);

//       listRecipeDiv.append(favBtn);
//       listRecipeDiv.append(image);
//       listRecipeDiv.append(pOne);
//       for (let x = 0; x < ingredients.length; x++) {
//         console.log(ingredients[x].text);
//         var pTwo = $("<p>").text(ingredients[x].text);
//         listRecipeDiv.append(pTwo);
//       }
//       $("#recipe-view").append(listRecipeDiv);
//     }
//   });
// };
// $(".save-btn").on("click", function(event) {
//   event.preventDefault();
//   //Add to favorites function here...
// });
// var savedRecipes = [];
// const saveRecipe = function() {};
// displayRecipeInfo();
// // $(".search-btn").on("click", displayRecipeInfo);
