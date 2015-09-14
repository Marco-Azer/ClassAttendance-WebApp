/**
 * Created by marcoazer on 15-09-10.
 */

/**
    Class Struct:
    {
        _id        : ID                 (INT Generated by MongoDB)
        name       : Class Name         (String)*
        stdtNum    : Number of Students (INT)
        srvntNum   : Number of Servants (INT)
        grade      : Class Grade        (Char(2))*
        church	   : Church name 		(String)*
    }
*/

var collec = "class";

// Inserts

var InsertClass = function(db, cls, callback){
	db.collection(collec).insertOne(cls, function(err, data){
		assert.equal(null, err);
		console.log("Class was inserted properly");
		callback(data);
	});
}

var InsertClasses = function(db, clses, callback){
	db.collection(collec).insert(clses, function(err, data){
		assert.equal(null, err);
		console.log("Classes were inserted properly");
		callback(data);
	})
}

var InsertChurch = function(db, id, chrchname, callback){
	db.collection(collec).updateOne(
		{"_id", id},
		{"church", chrchname},
		function(err, data){
			assert.equal(null, err);
			console.log("Church name was added properly");
			callback(data);
		});
}

var SetStdntNum = function(db, id, stdtnum, callback){
	db.collection(collec).updateOne(
		{"_id": id},
		{"stdtNum": stdtnum},
		function(err, data){
			assert.equal(null, err);
			console.log("Student number was set properly");
			callback(data);
		});
}

var SetSrvntNum = function(db, id, srvntnum, callback){
	db.collection(collec).updateOne(
		{"_id": id},
		{"srvntNum": srvntnum},
		function(err, data){
			assert.equal(null, err);
			console.log("Servant number was set properly");
			callback(data);
		});
}