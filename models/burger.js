// ORM
var orm=require("../config/orm.js");

var burger={
// ALL BURGERS
    menu:function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
  // NEW BURGER
    cooking:function(obj,cb){
        orm.insertOne("burgers",obj, function(res){
            cb(res);
        });
    },
  // EAT BURGER
    eating:function(obj,id,cb){
        orm.updateOne("burgers",obj,id,function(res){
            cb(res);
        })
    }
};

module.exports=burger;
