
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

// Student PUT Request Handlers
app.put('/student', function(req,res){
	stdnt.InsertStudent(DB, req.body);
	res.send();
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
app.post('/student', function(req, res){
	var id = req.body._id;
	stdnt.UpdateStudent(DB, id, req.body);
	res.send();
});

app.post('/studen/fname', function(req, res){
	stdnt.SetFname(DB, req.body._id, res.body);
	res.send();
});

app.post('/studen/lname', function(req, res){
	stdnt.SetLname(DB, req.body._id, res.body);
	res.send();
});

app.post('/studen/mname', function(req, res){
	stdnt.SetMname(DB, req.body._id, res.body);
	res.send();
});

app.post('/studen/gender', function(req, res){
	stdnt.SetGender(DB, req.body._id, res.body);
	res.send();
});

app.post('/studen/age', function(req, res){
	stdnt.SetAge(DB, req.body._id, res.body);
	res.send();
});

app.post('/studen/grade', function(req, res){
	stdnt.SetGrade(DB, req.body._id, res.body);
	res.send();
});

app.post('/studen/dob', function(req, res){
	stdnt.SetDob(DB, req.body._id, res.body);
	res.send();
});

app.post('/studen/addr', function(req, res){
	stdnt.SetAddr(DB, req.body._id, res.body);
	res.send();
});

app.post('/studen/class', function(req, res){
	stdnt.SetClass(DB, req.body._id, res.body);
	res.send();
});


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

app.post('/servant/fname', function(req, res){
	srvnt.SetFname(DB, req.body._id, res.body);
	res.send();
});

app.post('/servant/lname', function(req, res){
	srvnt.SetLname(DB, req.body._id, res.body);
	res.send();
});

app.post('/servant/mname', function(req, res){
	srvnt.SetMname(DB, req.body._id, res.body);
	res.send();
});

app.post('/servant/age', function(req, res){
	srvnt.SetAge(DB, req.body._id, res.body);
	res.send();
});


app.post('/servant/phone', function(req, res){
	srvnt.SetPhone(DB, req.body._id, res.body);
	res.send();
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
