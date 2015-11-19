app.controller('SearchStudentCtrl', ['$scope', '$http', '$location','Profile', 
	function($scope, $http, $location, Profile){

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

		Profile.getStudentProfile(searchObj, function(err, data){
			if(err){
				console.log(err);
			}
			else{
				if(data.length == 1){
					$location.path('/ViewProfile');
				}
				else if(data.length > 1){
					$location.path('/ViewProfiles');
				}
			}
		});
	};
}]);