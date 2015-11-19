app.controller('SearchClassCtrl', ['$scope', '$http', function($scope, $http){
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
				}
				else{
					$scope.classes = res.data;
				}
			},
			function(res){
				console.log('Search was un-successful');
			});
	}
}]);