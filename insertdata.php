<!DOCTYPE html>
<html>
<head>
	<title>Insert Data</title>
</head>
<body>
	<?php
		try{
			$fname = $_POST['fname'];
			$lname = $_POST['lname'];
			$mname = $_POST['mname'];
			$age = $_POST['age'];
			$year = $_POST['year'];
			$month = $_POST['month'];
			$day = $_POST['day'];
			$gender = $_POST['gender'];

			$host = "localhost";
			$dbname = "students_db";
			$usr = "root";
			$pwd = "root";	

			$DB = new PDO("mysql:host=$host;dbname=$dbname", $usr, $pwd);
			$DB->setAttribute(PDO::ATTR_ERRMODE, PDO_EXCEPTION);
			$SQL = "INSERT INTO PERSONAL_INFO(FIRSTNAME, LASTNAME, MIDDLENAME, AGE, YEAROFBIRTH, MONTHOFBIRTH, DAYOFBIRTH, GENDER, TITLE, MARITALSTATUS) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
			$QR = $DB->prepare($SQL);
			$array = array($fname, $lname, $mname, $age, $year, $month, $day, $gender, "Mr", "Single");
			$QR->execute($array);
			//print_r($array);
			echo "<p>Student data has been inserted</p>";
			$DB = null;
		}
		catch(Exception $e){
			echo $e->getMessage();
		}
	?>
</body>
</html>