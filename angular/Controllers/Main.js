app.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
	$scope.session = {
		"user": "Marco",
		"church": "yourchurch",
		"classes": []
	}

	var setClasses = function(){
		var req = {
			method: 'GET',
			url: 'http://localhost:8080/class',
			params: {'church':$scope.session.church}
		};
		$http(req).then(function(res){
			$scope.session['classes'] = res.data;
			console.log($scope.session['classes'])
		}, function(res){
			console.log("Error: couldn't get classes of church");
		});
	};

	setClasses($scope['classes']);
	
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