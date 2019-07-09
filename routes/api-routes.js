const recipes = require("../models/recipes");
const rating = require("../models/ratings");

var path = require("path");

const sstk = require("shutterstock-api");

const applicationClientId = process.env.shutterStockKEY;
const applicationClientSecret = process.env.shutterStockSECRET;
sstk.setBasicAuth(applicationClientId, applicationClientSecret);

const imagesApi = new sstk.ImagesApi();

module.exports = function (app) {


  // API CALLS TO 'Recipes' TABLE
  app.get("/api/recipes", function (req, res) {
    recipes.getRecipes(req, res, function (data) {
      res.json(data);
    });
  });

  app.get("/api/recipe/:id", function (req, res) {
    recipes.getOneRecipe(req, res, function (data) {
      res.json(data);
    });
  });

  app.get("/api/search/recipe/:column&:value", function (req, res) {
    recipes.findRecipes(req, res, function (data) {
      res.json(data);
    });
  });
  app.get("/api/searchAll/recipe/:column&:value", function (req, res) {
    recipes.findAll(req, res, function (data) {
      res.json(data);
    });
  });

  app.get("/api/join/recipe/:tableOne/:tableTwo/:columnOne/:columnTwo/", function (req, res) {
    recipes.join(req, res, function (data) {
      res.json(data);
    });
  });
  
  app.post("/api/recipes", function (req, res) {
    recipes.addRecipe(req, res, function (data) {
      res.json(data);
    });
  });

  app.put("/api/recipe/:id", function (req, res) {
    recipes.updateRecipe(req, res, function (data) {
      res.json(data);
    });
  });

  app.delete("/api/recipe/:id", function (req, res) {
    recipes.deleteRecipe(req, res, function (data) {
      res.json(data);
    });
  });

  // API CALLS TO 'Rating' TABLE
  app.post("/api/recipe/:id", function (req, res) {
    rating.rateRecipe(req, res, function (data) {
      res.json(data);
    });
  });
  app.post("/api/rating/:id", function (req, res) {
    rating.rateRecipe(req, res, function (data) {
      res.json(data);
    });
  });

  app.put("/api/recipe/:id", function (req, res) {
    rating.joinRecipe(req, res, function (data) {
      res.json(data);
    });
  });

  app.get("/api/rating/:id", function (req, res) {
    rating.getOneRating(req, res, function (data) {
      res.json(data);
    });
  });
  app.patch("/api/rating/:id", function (req, res) {
    //console.log(req);
    rating.updateRating(req, res, function (data) {
      res.json(data);
    });
  });
  app.delete("/api/rating/:id", function (req, res) {
    rating.deleteRating(req, res, function (data) {
      res.json(data);
    });
  });


  app.get("/api/images/:q", function (req, res) {
    console.log(req.params.q)
    let queryParams = {
      "query": req.params.q,
      "image_type": "photo",
      "orientation": "horizontal",
      "safe": true,
      "per_page": 1
    };

    imagesApi.searchImages(queryParams)
      .then(({ data }) => {
        //console.log(data[0].assets.large_thumb);
        res.json(data)
      })
      .catch((error) => {
        console.error(error);
      });
  });
};
