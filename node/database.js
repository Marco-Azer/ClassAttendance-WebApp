/**
 * Created by marcoazer on 15-09-10.
 */

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

var url = 'mongodb://localhost:27017/SundaySchool';

var insertStudent = function(db, std, callback){
    db.collection('student').insertOne(std, function(err, data){
        assert.equal(null, err);
        console.log('Data inserted properly');
        callback(data);
    });
        /*{
            "fname": std.fname,
            "lname": std.lname,
            "mname": std.mname,
            "gender":std.gender,
            "age"  : std.age,
            "dob"  : std.dob,
            "phone": std.phone,
            "addr" : std.addr
        }*/
};

MongoClient.connect(url, function(err, db){
    var std = {
        "fname" : "Marco",
        "lname" : "Azer",
        "age"   : 21
    };
    assert.equal(null, err);
    console.log("Connected to Database");
    insertStudent(db, std, function(){
        db.close();
    });
});