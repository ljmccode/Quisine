const orm = require("../config/orm");

let recipes = {
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
        values: {
        "name": req.body.name,
        "status": 1,
        "link": req.body.link.stringify(),
        "type": req.body.type
        }
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
          "name": req.body.name,
          "status": req.body.status,
          "link": req.body.link.stringify(),
          "type": req.body.type
        }
        ],
        where: [
          {
            "recipe_id": req.params.id
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
            "recipe_id": req.params.id
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
