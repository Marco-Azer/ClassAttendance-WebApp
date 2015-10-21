
var app = angular.module('main', []);

// app.factory('dataFac', function($resource){
// 	var getData = $resource('http://localhost:8080/');
// 	var data = getData.get();
// 	return data;
// });

// app.factory('putStudentsFac', function($resource){

// });

// app.controller('DBCtrl', ['$scope', '$http', 'dataFac', function($scope, $http, dataFac){
// 	// $scope.getData = function(){
// 	// 	$http.get('http://localhost:8080').then(function(res){
// 	// 		console.log("Got Data")
// 	// 		console.log(res.data)
// 	// 	}, function(res){
// 	// 		console.log("Error Getting data")
// 	// 	})
// 	// }
// 	$scope.getData = function(){
// 		console.log("YOO");
// 		console.log(dataFac);
// 	}
		
// }]);


app.controller('ScreenCtrl', ['$scope', function($scope){
	var LastPage = 'Home';
	$scope.Show = {
		'Home' : true,
		'StudentNew' : false,
		'StudentSearch' : false,
		'ServantNew' : false,
		'ServantSearch' : false,
		'ClassNew' : false,
		'ClassSearch' : false
	};
	$scope.ShowPage = function(page){
		$scope.Show[LastPage] = false;
		$scope.Show[page] = true;
		LastPage = page;
	};
	
	$scope.days = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', 
	'14', '15', '16', '17', '18',	'19', '20', '21', '22', '23', '24', '25', '26', '27', '28', 
	'29', '30', '31'];

	$scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
	'August', 'September', 'October', 'Novermber', 'December'];

	$scope.years = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 
	2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
	2013, 2014, 2015];
	
}]);

app.controller('AddStudentCtrl', ['$scope', '$http', function($scope, $http){
	$scope.submit = function(){
		$http.post('http://localhost:8080/student', $scope.new).then(
				function(){
					$scope.new = {};
					console.log("Student was inserted");
				},
				function(){
					console.log("Couldn't insert student");
				}
			);
	}
}]);

app.controller('AddServantCtrl', ['$scope', '$http', function($scope, $http){
	$scope.submit = function(){
		$http.post('http://localhost:8080/servant', $scope.new).then(
				function(res){
					$scope.new = {};
					console.log("Student was inserted");
				},
				function(res){
					console.log("Couldn't insert servant");
				}
			);
	}
}]);


app.controller('SearchStudentCtrl', ['$scope', '$http', function($scope, $http){

	$scope.ShowSearch = true;
	$scope.ShowOne = false;
	$scope.ShowMany = false;

	$scope.search = function() {
		var fname = $scope.stdnt.fname || null;
		var mname = $scope.stdnt.mname || null;
		var lname = $scope.stdnt.lname || null;
		var age = $scope.stdnt.age || null;
		var gender = $scope.stdnt.gender || null;
		var myclass = $scope.stdnt.class || null;
		var grade = $scope.stdnt.grade || null;
		var yob = $scope.stdnt.yob || null;
		var mob = $scope.stdnt.mob || null;
		var dob = $scope.stdnt.dob || null;
		var searchObj = {};

		if(fname){
			searchObj.fname = fname;
		}
		if(lname){
			searchObj.lname = lname;
		}
		if(mname){
			searchObj.mname = mname;
		}
		if(age){
			searchObj.age = age;
		}
		if(gender){
			searchObj.gender = gender;
		}
		if(yob){
			searchObj.dob.year = yob;
		}
		if(mob){
			searchObj.dob.month = mob;
		}
		if(dob){
			searchObj.dob.day = dob;
		}
		if(fname){
			searchObj.fname = fname;
		}
		if(myclass){
			searchObj.class = myclass;
		}
		if(grade){
			searchObj.grade = grade;
		}

		var req = {
			method: 'GET',
			url: 'http://localhost:8080/student',
			params: searchObj
		};

		$http(req).then(
			function (res) {
				if(res.data.length == 1){
					$scope.student = res.data[0];
					$scope.ShowSearch = false;
					$scope.ShowOne = true;
					$scope.ShowMany = false;
				}
				else{
					$scope.students = res.data;
					$scope.ShowSearch = false;
					$scope.ShowMany = true;
					$scope.ShowOne = false;

				}
			},
			function (res) {
				console.log("Search is un-successful");
			});
	};
}]);

app.controller('SearchServantCtrl', ['$scope', '$http', function($scope, $http){

	$scope.ShowSearch = true;
	$scope.ShowOne = false;
	$scope.ShowMany = false;

	$scope.search = function() {
		var fname = $scope.srvnt.fname || null;
		var mname = $scope.srvnt.mname || null;
		var lname = $scope.srvnt.lname || null;
		var age = $scope.srvnt.age || null;
		var gender = $scope.srvnt.gender || null;
		var myclass = $scope.srvnt.class || null;
		var grade = $scope.srvnt.grade || null;
		var yob = $scope.srvnt.yob || null;
		var mob = $scope.srvnt.mob || null;
		var dob = $scope.srvnt.dob || null;
		var searchObj = {};

		if(fname){
			searchObj.fname = fname;
		}
		if(lname){
			searchObj.lname = lname;
		}
		if(mname){
			searchObj.mname = mname;
		}
		if(age){
			searchObj.age = age;
		}
		if(gender){
			searchObj.gender = gender;
		}
		if(yob){
			searchObj.dob.year = yob;
		}
		if(mob){
			searchObj.dob.month = mob;
		}
		if(dob){
			searchObj.dob.day = dob;
		}
		if(fname){
			searchObj.fname = fname;
		}
		if(myclass){
			searchObj.class = myclass;
		}
		if(grade){
			searchObj.grade = grade;
		}

		var req = {
			method: 'GET',
			url: 'http://localhost:8080/servant',
			params: searchObj
		};

		$http(req).then(
			function (res) {
				if(res.data.length == 1){
					$scope.servant = res.data[0];
					$scope.ShowSearch = false;
					$scope.ShowOne = true;
					$scope.ShowMany = false;
				}
				else{
					$scope.servant = res.data;
					$scope.ShowSearch = false;
					$scope.ShowMany = true;
					$scope.ShowOne = false;

				}
			},
			function (res) {
				console.log("Search is un-successful");
			});
	};
}]);


app.controller('AddClassCtrl', ['$scope', '$http', function($scope, $http){
	$scope.addClass = function(){
		$http.post('http://localhost:8080/class', $scope.new).then(
			function(res){
				$scope.new = {};
			},
			function(res){
				console.log("Error, Couldnt add class");
			}
		);
	}
}]);



app.controller('SearchClassCtrl', ['$scope', '$http', function($scope, $http){
	$scope.ShowNewClass = true;
	$scope.ShowClass = false;
	$scope.ShowClasses = false;

	$scope.searchClass = function(){

		var name = $scope.sclass.name || null;
		var church = $scope.sclass.church || null;
		var grade = $scope.sclass.grade || null;
		var searchObj = {};

		if(name){
			searchObj.name = name;
		}
		if(church){
			searchObj.church = church;
		}
		if(grade){
			searchObj.grade = grade;
		}

		var req = {
			method: 'GET',
			url: 'http://localhost:8080/class',
			params: searchObj
		}
		
		$http(req).then(
			function(res){
				if(res.data.length == 1){
					$scope.class = res.data[0];
					$scope.ShowNewClass = false;
					$scope.ShowClass = true;
					$scope.ShowClasses = false;
				}
				else{
					$scope.classes = res.data;
					$scope.ShowNewClass = false;
					$scope.ShowClasses = true;
					$scope.ShowClass = false;
				}
			},
			function(res){
				console.log('Search was un-successful');
			});
	}

}]);