app.controller('SearchClassCtrl', ['$scope', '$http', '$location' ,'ClassService', function($scope, $http, $location, ClassService){
	$scope.searchClass = function(){

		var name = $scope.sclass.cname || null;
		var grade = $scope.sclass.grade || null;
		var church = $scope.sclass.church || null;
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

		ClassService.getClass(searchObj, function(err, data){
			if(err){
				console.log(err);
			}
			else{
				if(data.length == 1){
					$location.path('/ViewClass');
				}
				else if(data.length > 1){
					$location.path('/ViewClasses');
				}
			}
		});
	}
}]);