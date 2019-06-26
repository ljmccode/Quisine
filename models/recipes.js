const orm = require("orm");

const recipes = {
  getRecipes: function(req, res) {
    orm.selectAll(
      {
        table: "recipes"
      },
      function(data) {
        res.json(data);
      }
    );
  },
  addRecipe: function(req, res) {
    orm.create(
      {
        table: "recipes",
        recipe_name: req.body.recipe_name,
        new: true,
        link: req.body.link,
        type: req.body.type
      },
      function(data) {
        res.json(data);
      }
    );
  },
  updateRecipe: function(req, res) {
    orm.update(
      {
        table: "recipes",
        set: [
          {
            recipe_name: req.body.recipe_name
          }
        ],
        where: [
          {
            recipe_id: req.body.recipe_id
          }
        ]
      },
      function(data) {
        res.json(data);
      }
    );
  },
  deleteRecipe: function(req, res) {
    orm.delete(
      {
        table: "recipes",
        where: [
          {
            recipe_id: req.body.recipe_id
          }
        ]
      },
      function(data) {
        res.json(data);
      }
    );
  }
};
module.exports = recipes;
