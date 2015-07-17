<!DOCTYPE html>
<html>
<body>
<p>test</p>
<?php echo "Hiiiii" ?>
</body>
</html>


<?php

		function connect($dbhost, $dbuser, $dbpwd, ){

			$conn = mysql_connect($dbhost,$dbuser,$dbpassword);
			
			if(!$conn){
				die('Could not connect: ' . mysql_error());
			}
			else{
				echo 'Connected';
			}

			return $conn;
		}

		function disconnect($conn){

			mysql_close($conn);

		}

		function getData($tableName, $sql, $conn){
			mysql_select_db($tableName);
			$resultSet = mysql_query($sql, $conn);
			if(!$resultSet){
				die('Could not get data ' . mysql_error());
			}
			return $resultSet;
		}

		$myConn = connect("localhost:8888", "root", "root");
		echo 'test';
		disconnect($myConn);

		// while ($row = mysql_fetch_array($resultSet)) {
		// 	echo "<h3>{$row['FIRSTNAME']}</h3>";
		// 	echo "<ul> 
		// 			<li>{$row['LASTNAME']}</li>
		// 			<li>{$row['AGE']}</li>
		// 			<li>{$row['MIDDLENAME']}</li>
		// 		</ul>";
		// }
	?>