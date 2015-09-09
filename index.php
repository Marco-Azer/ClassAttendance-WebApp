 <html>
 <head>
 	<title>Index</title>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
	<script src="db.js"></script>
 </head>
 <body ng-app="db">
	<div ng-controller="DatabaseController as dbc">
		<p>{{dbc.status}}</p>
	</div>
	
 </body>
 </html>
