app.controller('ViewProfilesCtrl', ['$scope', '$location','Profile', function($scope, $location, Profile){
	$scope.people = Profile.data;
	$scope.viewOne = function(id){
		Profile.getStudentProfileById({"_id":id}, function(err, data){
			if(err){
				console.log(err);
			}
			else{
				$location.path('/ViewProfile');
			}
		})
	};
}]);