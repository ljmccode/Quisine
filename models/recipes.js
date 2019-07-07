const orm = require("../config/orm");

let recipes = {
  getRecipes: function (req, res) {
    orm.selectAll(
      {
        table: "recipes"
      },
      function (data) {
        res.json(data);
      }
    );
  },
  getOneRecipe: function (req, res) {
    orm.selectOne(
      {
        table: "recipes",
        label: "recipe_id",
        value: req.params.id,
      },
      function (data) {
        res.json(data);
      }
    );
  },
  findRecipes: function (req, res) {
    orm.findLike(
      {
        table: "recipes",
        label: req.params.column,
        value: '%' + req.params.value + '%',
      },
      function (data) {
        res.json(data);
      }
    );
  },
  findAll: function (req, res) {
    orm.findLike(
      {
        table: "recipes",
        label: req.params.column,
        value: req.params.value,
      },
      function (data) {
        res.json(data);
      }
    );
  },
  addRecipe: function (req, res) {
    orm.create(
      {
        table: "recipes",
        values: {
          "name": req.body.name,
          "status": 1,
          "link": req.body.link,
          "type": req.body.type
        }
      },
      function (data) {
        res.json(data);
      }
    );
  },
  updateRecipe: function (req, res) {
    orm.update(
      {
        table: "recipes",
        set: [
          {
            "name": req.body.name,
            "status": req.body.status,
            "link": req.body.link,
            "type": req.body.type
          }
        ],
        where: [
          {
            "recipe_id": req.params.id
          }
        ]
      },
      function (data) {
        res.json(data);
      }
    );
  },
  // /api/join/recipe/recipes&ratings&rating_id&recipe_id
  // var insertQuery = {
  //   tableOne: 'recipes',
  //   tableTwo: 'ratings',
  //   on: ['ratings.rating_id = recipes.recipe_id'],
  // }
  ///api/join/recipe/:tableOne:tableTwo:columnOne:columnTwo
  join: function (req, res) {
    let ormObj = {
      select: ['recipes.recipe_id', 'name', 'type'],
      tableOne: req.params.tableOne,
      tableTwo: req.params.tableTwo,
      onOne: [req.params.tableOne + '.' + req.params.columnOne],
      onTwo: [req.params.tableTwo + '.' + req.params.columnTwo]
    }
    let whereArr = [];
    let valueArr = [];
    if (req.query.value) {
      whereArr = [req.query.table + '.' + req.query.column];
      valueArr = [req.query.value]
    }
    if (req.query.valueTwo) {
      whereArr.push(req.query.tableTwo + '.' + req.query.columnTwo)
      valueArr.push(req.query.valueTwo)
    }

    if (whereArr) {
      ormObj.where = whereArr;
      ormObj.value = valueArr;
    }
    orm.join(

      ormObj,
      function (data) {
        res.json(data);
      }
    );
  },
  deleteRecipe: function (req, res) {
    orm.delete(
      {
        table: "recipes",
        where: [
          {
            "recipe_id": req.params.id
          }
        ]
      },
      function (data) {
        res.json(data);
      }
    );
  }
};
module.exports = recipes;
