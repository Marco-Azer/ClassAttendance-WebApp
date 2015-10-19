var app = angular.module('main', ['ngResource']);

app.factory('dataFac', function($resource){
	var getData = $resource('http://localhost:8080/');
	var data = getData.get();
	return data;
});

app.factory('putStudentsFac', function($resource){

});

app.controller('DBCtrl', ['$scope', '$http', 'dataFac', function($scope, $http, dataFac){
	// $scope.getData = function(){
	// 	$http.get('http://localhost:8080').then(function(res){
	// 		console.log("Got Data")
	// 		console.log(res.data)
	// 	}, function(res){
	// 		console.log("Error Getting data")
	// 	})
	// }
	$scope.getData = function(){
		console.log("YOO");
		console.log(dataFac);
	}
		
}]);

app.factory('NewStudentFact', function($resource){
	var obj = {};
	var conn = $resource('http://localhost:8080/student');
	obj.addNewStudent = function(student){
		$conn.save(student);
	};
	return obj;
});

app.controller('StudentCtrl', ['$scope', 'NewStudentFact', function($scope, NewStudentFact){
	$scope.printData = function(){
		console.log($scope.new);
	};
	$scope.putStudent = function(){
		NewStudentFact.addNewStudent($scope.new);
	};
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
	}
}]);