// This is for Table Name Burgers
// The actural implementation of SQL is in "orm.js"  
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var tableName = "burgers";

var objModel = {
  all: function(cb) {
    orm.all(tableName, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create(tableName, cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update(tableName, objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = objModel;