var orm = require('../config/orm');

var ratings = {
    joinRated: function(req, res){
        orm.selectRated({
            tableOne: "recipes",
            tableTwo: "ratings",
            on: ["ratings.ratings_id = recipes.recipe_id"]
        }, function(result){
            res.json(result);
        })
    }
}

module.exports = ratings;