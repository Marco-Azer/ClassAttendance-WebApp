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