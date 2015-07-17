<?php 
	error_reporting(E_ALL);  
	ini_set('display_errors', 1);
	require_once __DIR__ . '/connect.php';

	$fname = $_POST['fname'];
	$mname = $_POST['mname'];
	$lname = $_POST['lname'];
	$age = $_POST['age'];
	$gender = $_POST['gender'];

	try{
		$sql = "INSERT INTO users_info (fname, mname, lname, age, gender) VALUES (:fname, :mname, :lname, :age, :gender);";
		$query = $con->prepare($sql);
		$query->bindParam(':fname', $fname);
		$query->bindParam(':mname', $mname);
		$query->bindParam(':lname', $lname);
		$query->bindParam(':age', $age);
		$query->bindParam(':gender', $gender);
		$query->execute();
	}
	catch(PDOException $e){
		echo "Couldn't insert into data base. " . $e->getMessage();
	}
 ?>