(function(){
	var app = angular.module('main', 
		['ngRoute',
		'AddStudent',
		'AddServant',
		'SearchStudent',
		'SearchServant',
		'AddClass',
		'SearchClass']);

	app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		$locationProvider.html5Mode(true);
		$routeProvider
		.when('/', {
			templateUrl: '../pages/home.html'
		})
		.when('/NewStudent', {
			templateUrl: '../pages/NewStudent.html',
			controller: 'AddStudentCtrl'
		})
		.when('/SearchStudent',{
			templateUrl: '../pages/SearchStudent.html',
			controller: 'SearchStudentCtrl'
		})
		.when('/NewServant', {
			templateUrl: '../pages/NewServant.html',
			controller: 'SearchServantCtrl'
		})
		.when('/SearchServant', {
			templateUrl: '../pages/SearchServant.html',
			controller: 'SearchServantCtrl'
		})
		.when('/NewClass', {
			templateUrl: '../pages/NewClass.html',
			controller: 'AddClassCtrl'
		})
		.when('/SearchClass', {
			templateUrl: '../pages/SearchClass.html',
			controller: 'SearchClassCtrl'
		})
	}]);

	app.controller('MainCtrl', ['$scope', function($scope){
	
		var thirtyone = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', 
		'14', '15', '16', '17', '18',	'19', '20', '21', '22', '23', '24', '25', '26', '27', '28', 
		'29', '30', '31'];

		var thirty = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', 
		'14', '15', '16', '17', '18',	'19', '20', '21', '22', '23', '24', '25', '26', '27', '28', 
		'29', '30'];

		var twentyeight = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', 
		'14', '15', '16', '17', '18',	'19', '20', '21', '22', '23', '24', '25', '26', '27', '28'];

		$scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
		'August', 'September', 'October', 'Novermber', 'December'];

		$scope.years = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 
		2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
		2013, 2014, 2015];

		$scope.pickMonth = function(month){
			if(month == ""){
				$scope.days = [];
			}
			else if(month === "January" || month == "March" || month == "May" || month == "July" || month == "August" ||
				month == "October" || month == "December"){
				$scope.days = thirtyone;
			}
			else if(month == "February"){
				$scope.days = twentyeight;
			}
			else{
				$scope.days = thirty;
			}
		}
	
	}]);

})();