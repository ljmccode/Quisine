var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

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

<<<<<<< HEAD
<<<<<<< HEAD
    join: function (query, cb) {
=======
    selectRated: function (query, cb) {
>>>>>>> 7806b612b54545fadd430f7f6e3450601f7ccc08
=======
    join: function (query, cb) {
>>>>>>> d58387c6705b39dd5d18c7de0d3b698682fee1ae
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
            console.log(result)
        });
    },
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> d58387c6705b39dd5d18c7de0d3b698682fee1ae

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

    createAdvanced: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
          console.log(result);
        });
      }
<<<<<<< HEAD
>>>>>>> 7806b612b54545fadd430f7f6e3450601f7ccc08
=======
>>>>>>> d58387c6705b39dd5d18c7de0d3b698682fee1ae
}

// orm.selectRated("recipes", "ratings", "rating_id", function(){});
// orm.create("celz", "recipes", "Waffles", "website", "breakfast", function(){});
orm.create("celz", "recipes", "('waffles', 1, 'website', 'breakfast')", function(){});



module.exports = orm;