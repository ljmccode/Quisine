var orm = require("../config/orm");

var ratings = {
  joinRated: function(req, res) {
    orm.join(
      {
        tableOne: "recipes",
        tableTwo: "ratings",
        on: [{ "ratings.rating_id": req.body.recipe_id }]
      },
      function(result) {
        res.json(result);
        console.log(result);
      }
    );
  },
  rateRecipe: function(req, res) {
    orm.create(
      {
        table: "ratings",
        values: {
          rating_id: req.params.id,
          rating: req.body.rating,
          comments: req.body.comments,
          favorite: req.body.favorite
        }
      },
      function(data) {
        res.json(data);
      }
    );
  }
};

module.exports = ratings;
