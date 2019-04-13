var connection=require("./connection.js");

function objToSql(obj) {
    var arr = [];
    for (var key in obj) {
        var value = obj[key];
        if (Object.hasOwnProperty.call(obj, key)) {
        if (typeof value === "string") {
            value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

// ORM
var orm={
// ALL TABLE DATA
    selectAll:function(tableName, cb){
        connection.query("SELECT * from ??",[tableName],function(err,data){
            if(err) throw err;
            cb(data);
        })
    },
// INSERT ROW
    insertOne:function(tableName, obj, cb){
        var query="INSERT INTO "+tableName+" SET "+objToSql(obj);
        connection.query(query,function(err,data){
            if(err) throw err;
            cb(data);
        })
    },
// MOD ROW
    updateOne:function(tableName, obj, id, cb){
        var query="UPDATE "+tableName+" SET "+objToSql(obj)+" WHERE "+objToSql(id);
        connection.query(query,function(err,data){
            if(err) throw err;
            cb(data);
        })
    }
}

module.exports=orm;
