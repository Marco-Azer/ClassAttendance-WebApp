app.directive("maPersonProfile",function(){
	return {
		restrict: 'E',
		scope: {
			person:'=sid'
		},
		templateUrl: 'angular/Directives/person-profile.html'
	}
});