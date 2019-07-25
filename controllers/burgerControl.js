var express = require("express");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burgersModel.js");

  //===============================================================
  // Root get route
  router.get("/", function(req, res) {
      burgers.all(function(data) {
        res.render("index", { all: data });
      });    
  });
    
    // Post route -> back to home
    router.post("/api/order", function(req, res) {
        burgers.create(["name"], [req.body.burger], function(result){
            // res.json({ id: result.insertId });
            res.redirect("/");
        })
    });
  
  
  // Devour : Update, change devoured to 1
  router.put("/api/devour/:id", function(req, res) {
      burgers.update({"devoured": 1}, `id = ${req.params.id}`, function (result){
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
      })
  });

  // Export routes for server.js to use.
module.exports = router;