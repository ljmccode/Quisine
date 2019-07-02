var connection = require("../config/connection.js");

var orm = {
    selectAll: function (query, cb) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [query.table], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    join: function (query, cb) {
        //SELECT * FROM recipes INNER JOIN ratings ON ratings.rating_id = recipes.recipe_id;
        var queryString = "SELECT * FROM ?? INNER JOIN ?? ON ??";
        connection.query(
            queryString,
            [query.tableOne, query.tableTwo, query.on[0]],
             function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
            console.log(result.sql)
        });
    },

    create: function (db, table, values, cb){
        //INSERT INTO `celz`.`recipes` (`name`, `status`, `link`, `type`) VALUES ('Pizza', '1', 'www.dominos.com', 'dinner');
        var queryString = "INSERT INTO ??.?? (name, status, link, type) VALUES ?";
        connection.query(
            queryString,
            [db, table, values],
            function (err, result) {
                if (err) {
                    throw err;
                }
                cb(result);
                console.log(result);
            });
    },
}

// orm.selectRated("recipes", "ratings", "rating_id", function(){});
// orm.create("celz", "recipes", "Waffles", "website", "breakfast", function(){});
// orm.create("celz", "recipes", "('waffles', 1, 'website', 'breakfast')", function(){});



module.exports = orm;