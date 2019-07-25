var express = require("express");
var mysql = require("mysql");

var router = express.Router();




var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "burgers_db"
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });
  
  // Root get route
  router.get("/", function(req, res) {
      connection.query("SELECT * FROM burgers;", function(err, data) {
        if (err) throw err;
    
        // Test it
        // console.log('The solution is: ', data);
    
        // Test it
        // return res.send(data);
    
        res.render("index", { all: data });
      });
    });
    
    // Post route -> back to home
    router.post("/api/order", function(req, res) {
      
      connection.query("INSERT INTO burgers (name) VALUES (?)", [req.body.burger], function(err, result) {
        if (err) throw err;
    
        res.redirect("/");
      });
    });
  
  
  // Devour : Update, change devoured to 1
  router.put("/api/devour/:id", function(req, res) {
    connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [req.params.id], function(err, result) {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      }
      else if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    });
  });

  // Export routes for server.js to use.
module.exports = router;