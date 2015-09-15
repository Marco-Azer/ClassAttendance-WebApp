
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

var MongoClient = require('mongodb').MongoClient;

var DB;
var url = 'mongodb://localhost:27017/SundaySchool';

MongoClient.connect(url, function(err, database){
	assert.equal(null, err); // Check for errors
	console.log('Database connected properly');
	DB = database;
});

app.get('/test/:fname', function(req, res){
	var data = {"TEST":"YOO"};
	console.log(req.param('fname'));
	res.json(data);
});

// Student put Request Handlers
app.put('/student', function(req,res){
	stdnt.InsertStudent(DB, req.body);
});

// Student Get Request Handlers
app.get('/student', function(req, res){
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

// Student POST Request Handlers


// Servant PUT Request Handlers
app.put('/servant', function(req, res){
	srvnt.InsertServant(DB, req.body);
	res.close();
});

// Servant Get Request Handlers
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
