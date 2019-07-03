var orm = require("../config/orm");

var ratings = {
  getOneRating: function(req, res) {
    orm.selectOne(
      {
        table: "ratings",
        label: "recipe_id",
        value: req.params.id,
      },
      function(data) {
        res.json(data);
      }
    );
  },
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
