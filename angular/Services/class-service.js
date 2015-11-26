app.factory('ClassService', ['$http', function($http){
	var retObj = {
		getClass : function(search, callback){
			var req = {
				method : 'GET',
				url : 'http://localhost:8080/class',
				params : search 
			};
			$http(req).then(
				function(res){
					if(res.data.length == 1){
						retObj.data = res.data[0];
					}
					else if(res.data.length > 1){
						retObj.data = res.data;
					}
					if(callback){
						callback(null, res.data);
					}
				},
				function(){
					if(callback){
						callback("Error: Can't get class");
					}
				}
			);
		},

		getClassById : function(search, callback){
			var req = {
				method : 'GET',
				url : 'http://localhost:8080/class/id/' + seach._id
			};
			$http(req).then(
				function(res){
					retObj.data = res.data[0];
					callback ? callback(null, res.data) : null;
				},
				function(res){
					callback ? callback("Error") : null;
				}
			);
		}
	};
	return retObj;
}]);