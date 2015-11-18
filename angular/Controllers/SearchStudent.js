app.controller('SearchStudentCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){

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
					console.log($scope.student);
					$location.path('/ViewProfile').search($scope.student);
					// $scope.ShowSearch = false;
					// $scope.ShowOne = true;
					// $scope.ShowMany = false;
				}
				else{
					$scope.students = res.data;
					// $scope.ShowSearch = false;
					// $scope.ShowMany = true;
					// $scope.ShowOne = false;

				}
			},
			function (res) {
				console.log("Search is un-successful");
			}
		);
	};
}]);