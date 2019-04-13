// CONTROLLER
var express=require("express");
var router = express.Router();
var burger=require("../models/burger.js");

 // GET
router.get("/",function(req,res){
    burger.menu(function(data){
        res.render("index",{burgers:data});
    });
});

 // POST
router.post("/api/burgers", function(req, res) {
    burger.cooking({burger_name:req.body.burger_name, devoured:false}, function(data){
        res.json({ id: data.insertId });
    });
});

// PUT
router.put("/api/burgers/:id", function(req, res) {
    burger.eating({devoured:true}, {id:req.params.id}, function(data){
        if (data.changedRows === 0) {
            return res.status(404).end();
        }
      res.status(200).end();
    });
});

module.exports=router;
