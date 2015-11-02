angular.module('SearchServant', [])

	.controller('SearchServantCtrl', ['$scope', '$http', function($scope, $http){

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
				}
			);
		};
	}]);