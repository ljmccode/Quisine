var Recipes = require("../models/recipes");
var Rating = require("../models/rating");

module.exports = function(app) {
  // API CALLS TO 'Recipes' TABLE
  app.get("/api/recipes", function(req, res) {
    Recipes.getRecipes(req, res, function(data) {
      res.json(data);
    });
  });

  app.post("/api/todos", function(req, res) {
    Recipes.createRecipe(req, res, function(data) {
      res.json(data);
    });
  });

  app.put("/api/recipes/:id", function(req, res) {
    Recipes.updateRecipe(req, res, function(data) {
      res.json(data);
    });
  });

  app.delete("/api/Recipes/:id", function(req, res) {
    Recipes.deleteRecipe(req, res, function(data) {
      res.json(data);
    });
  });

  // API CALLS TO 'Rating' TABLE
  app.put("/api/recipes/:id", function(req, res) {
    Rating.rateRecipe(req, res, function(data) {
      res.json(data);
    });
  });

  //TODO: Add Favorites/Saved Table...
};
