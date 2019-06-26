const recipes = require("../models/recipes");
const rating = require("../models/ratings");

module.exports = function(app) {
  // API CALLS TO 'Recipes' TABLE
  app.get("/api/recipes", function(req, res) {
    recipes.getRecipes(req, res, function(data) {
      res.json(data);
    });
  });

  app.post("/api/recipes", function(req, res) {
    recipes.addRecipe(req, res, function(data) {
      res.json(data);
    });
  });

  app.put("/api/recipe/:id", function(req, res) {
    recipes.updateRecipe(req, res, function(data) {
      res.json(data);
    });
  });

  app.delete("/api/recipe/:id", function(req, res) {
    recipes.deleteRecipe(req, res, function(data) {
      res.json(data);
    });
  });

  // API CALLS TO 'Rating' TABLE
  app.put("/api/recipe/:id", function(req, res) {
    rating.rateRecipe(req, res, function(data) {
      res.json(data);
    });
  });

  //TODO: Add Favorites/Saved Table...
};
