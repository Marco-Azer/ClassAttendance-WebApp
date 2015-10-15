
var express = require('express');
var assert = require('assert');
var bodyParser = require('body-parser');
var stdnt = require('./Database/student.js');
var srvnt = require('./Database/servant.js');

var app = express();
var http = require('http').Server(app);
http.listen(8080, function(){
	console.log('Server is running');
});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

var MongoClient = require('mongodb').MongoClient;

var DB;
var url = 'mongodb://localhost:27017/SundaySchool';

MongoClient.connect(url, function(err, database){
	assert.equal(null, err); // Check for errors
	console.log('Database connected properly');
	DB = database;
});

app.get('/', function(req,res){
	var obj = {"fanme":"marco", "lname":"azer"};
	res.send(obj);
});

// Students
/*****************Students PUT**************/
app.post('/student', function(req,res){
	stdnt.InsertStudent(DB, req.body);
	res.send();
});

app.put('/student/attendance', function(req, res){
	stdnt.InsertAttendance(DB, req.body);
	res.send();
});

app.put('/student/outreach', function(req, res){
	stdnt.InsertOutreach(DB, req.body);
	res.send();
});
/*****************End Students PUT**************/

/*****************Students GET**************/
app.get('/student/:fname/:lname/:mname', function(req, res){
	var cursor = stdnt.GetStudent(DB, req);
	cursor.toArray(function(err, data){
		res.json(data);
	});
});

app.get('/student/class/:cid', function(req, res){
	var cursor = stdnt.GetStudentByClass(DB, req);
	cursor.toArray(function(err, data){
		res.json(data);
	});
});

app.get('/student/age/:age', function(req, res){
	var cursor = stdnt.GetStudentByAge(DB, req);
	cursor.toArray(function(err, data){
		res.json(data);
	});
});

app.get('/student/grade/:grade', function(req, res){
	var cursor = stdnt.GetStudentByGrade(DB, req);
	cursor.toArray(function(err, data){
		res.json(data);
	});
});

app.get('/student/attendance', function(req, res){
	var cursor = stdnt.GetStudentByAttendance(DB, req);
	cursor.toArray(function(err, data){
		res.json(data);
	});
});

app.get('/student/outreach', function(req, res){
	var cursor = stdnt.GetStudentByoutreach(DB, req);
	cursor.toArray(function(err, data){
		res.json(data);
	});
});
/*****************End Students GET**************/

/*****************Students POST**************/
app.put('/student/fname', function(req, res){
	console.log(req.body._id);
	stdnt.SetFname(DB, req.body);
	res.send();
});

app.put('/student/lname', function(req, res){
	stdnt.SetLname(DB, req.body);
	res.send();
});

app.put('/student/mname', function(req, res){
	stdnt.SetMname(DB, req.body);
	res.send();
});

app.put('/student/gender', function(req, res){
	stdnt.SetGender(DB, req.body);
	res.send();
});

app.put('/student/age', function(req, res){
	stdnt.SetAge(DB, req.body);
	res.send();
});

app.put('/student/grade', function(req, res){
	stdnt.SetGrade(DB, req.body);
	res.send();
});

app.put('/student/dob', function(req, res){
	stdnt.SetDob(DB, req.body);
	res.send();
});

app.put('/student/phone', function(req, res){
	stdnt.SetPhone(DB, req.body);
	res.send();
});

app.put('/student/emergNum', function(req, res){
	stdnt.SetEmergNum(DB, req.body);
	res.send();
});

app.put('/student/emergName', function(req, res){
	stdnt.SetEmergName(DB, req.body);
	res.send();
});

app.put('/student/addr', function(req, res){
	stdnt.SetAddr(DB, req.body);
	res.send();
});

app.put('/student/curClassId', function(req, res){
	stdnt.SetClass(DB, req.body);
	res.send();
});
/*****************End Students POST**************/

/*****************Start Students DELETE**************/
app.delete('/student', function(req, res){
	stdnt.RemoveStudent(DB, req.body);
	res.send();
});
/*****************End Students DELETE**************/
// End Students



// Servants
//*****************Servants PUT**************/
app.post('/servant', function(req, res){
	srvnt.InsertServant(DB, req.body);
	res.send();
});

app.put('/servant/attendance', function(req, res){
	srvnt.InsertAttendance(DB, req.body);
	res.send();
});
/*****************End Students PUT**************/

/*****************Servants GET**************/
app.get('/servant', function(req, res){
	var cursor = srvnt.GetServant(DB, req);
	cursor.toArray(function(err, data){
		res.json(data);
	});
});

app.get('/servant/grade/:grade', function(req, res){
	var cursor = srvnt.GetServantByGrade(DB, req);
	cursor.toArray(function(err, data){
		res.json(data);
	});
});

app.get('/servant/gender/:gender', function(req, res){
	var cursor = srvnt.GetServantByGender(DB, req);
	cursor.toArray(function(err, data){
		res.json(data);
	});
});

app.get('/servant/age/:age', function(req, res){
	var cursor = srvnt.GetServantByAge(DB, req);
	cursor.toArray(function(err, data){
		res.json(data);
	});
});

app.get('/servant/attendance', function(req, res){
	var cursor = srvnt.GetServantByAttendance(DB, req);
	cursor.toArray(function(err, data){
		res.json(data);
	});
});

/*****************Servants POST**************/
app.put('/servant/fname', function(req, res){
	srvnt.SetFname(DB, req.body);
	res.send();
});

app.put('/servant/lname', function(req, res){
	srvnt.SetLname(DB, req.body);
	res.send();
});

app.put('/servant/mname', function(req, res){
	srvnt.SetMname(DB, req.body);
	res.send();
});

app.put('/servant/gender', function(req, res){
	srvnt.SetGender(DB, req.body);
	res.send();
});

app.put('/servant/age', function(req, res){
	srvnt.SetAge(DB, req.body);
	res.send();
});

app.put('/servant/dob', function(req, res){
	srvnt.SetDob(DB, req.body);
	res.send();
});

app.put('/servant/phone', function(req, res){
	srvnt.SetPhone(DB, req.body);
	res.send();
});

app.put('/servant/curClassId', function(req, res){
	srvnt.SetClass(DB, req.body);
	res.send();
});

app.put('/servant/grade', function(req, res){
	srvnt.SetGrade(DB, req.body);
	res.send();
});
/*****************End Servants POST**************/

/*****************Start Students DELETE**************/
app.delete('/servant', function(req, res){
	srvnt.RemoveServant(DB, req.body);
	res.send();
});
/*****************End Students DELETE**************/

//var port = process.env.PORT || 8080;
//
//var router = express.Router();
//
//router.get('/', function(req, res){
//	res.json({message: 'Hooray first API'});
//});
//
//app.use('/api', router);
//app.listen(port);
//console.log('Magic Happens on port ' + port);
