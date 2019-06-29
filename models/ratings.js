var orm = require("../config/orm");

var ratings = {
  joinRated: function(req, res) {
    orm.join(
      {
        tableOne: "recipes",
        tableTwo: "ratings",
        on: [
          {
            "ratings.ratings_id": req.body.recipes.recipe_id
          }
        ]
      },
      function(result) {
        res.json(result);
      }
    );
  },
  rateRecipe: function(req, res) {
    orm.create(
      {
        table: "ratings",
        values: {
          "rating_id": req.params.id,
          "rating": req.body.rating,
          "comments": req.body.comments,
          "favorite": req.body.favorite
        }
      },
      function(data) {
        res.json(data);
      }
    );
  }
};

module.exports = ratings;
