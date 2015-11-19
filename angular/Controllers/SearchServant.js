app.controller('SearchServantCtrl', ['$scope', '$location','Profile', function($scope, $location, Profile){

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

		Profile.getServantProfile(searchObj, function(err, data){
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