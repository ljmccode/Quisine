const recipes = require("../models/recipes");
const rating = require("../models/ratings");

var path = require("path");

module.exports = function(app) {


  // API CALLS TO 'Recipes' TABLE
  app.get("/api/recipes", function(req, res) {
    recipes.getRecipes(req, res, function(data) {
      res.json(data);
    });
  });

  app.get("/api/recipe/:id", function(req, res) {
    recipes.getOneRecipe(req, res, function(data) {
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
  app.post("/api/recipe/:id", function(req, res) {
    rating.rateRecipe(req, res, function(data) {
      res.json(data);
    });
  });

  app.put("/api/recipe/:id", function(req, res) {
    rating.joinRecipe(req, res, function(data) {
      res.json(data);
    });
  });

  app.get("/api/rating/:id", function(req, res) {
    rating.getOneRating(req, res, function(data) {
      res.json(data);
    });
  });
};
