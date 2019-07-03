// On load
$(function () {
    // new recipe added on submit btn
    $(".add_recipe").on("submit", function (event) {
        event.preventDefault();

        var newRecipe = {
            name: $("#recipe_name").val().trim(),
            status: 1,
            link: $("#recipe_link").val().trim(),
            type: $("#types").find(":selected").text()
        };

        // posts recipe to database with new recipe status true
        $.ajax("/api/recipes", {
            type: "POST",
            data: newRecipe
        }).then(function() {
            console.log("Recipe added");
            // Reloads page with updates
            location.reload();
        });
    });

    $(".rate_recipe").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        var newRecipe = {
            status: 0
        };

        // updates recipe in database to status not new once rating button is clicked
        $.ajax("/api/recipe/" + id, {
            type: "PUT",
            data: newRecipe
        }).then(function () {
            console.log("You have rated this recipe");
            location.reload();
        });
    });

    
    $(".trash_recipe").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
    
        // deletes recipe from database upon clicking trash button
        $.ajax({
          type: "DELETE",
          url: "/api/recipe/" + id
        }).then(function() {
            console.log("trashed recipe", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
});