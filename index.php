<?php 
// 	error_reporting(E_ALL);  
// 	ini_set('display_errors', 1);
// 	require __DIR__ .'/inc/connect.php';	

// try{
// 	$sql = "INSERT INTO users_info(fname,mname,lname,age,gender) VALUES(:fname, :mname, :lname, :age, :gender)";
// 	$query = $con->prepare($sql);
// 	$id = 2;
// 	$fname = 'Mary';
// 	$mname = 'Soliman';
// 	$lname = 'Soliman';
// 	$age = 49;
// 	$gender = 'F';
// 	//$query->bindParam(':id', $id);
// 	$query->bindParam(':fname', $fname);
// 	$query->bindParam(':mname', $mname);
// 	$query->bindParam(':lname', $lname);
// 	$query->bindParam(':age', $age);
// 	$query->bindParam(':gender', $gender);
// 	$query->execute();
// }
// catch(PDOException $e){
// 	echo "Couldn't Insert data. " . $e->getMessage();
// }
 ?>
 <html>
 <head>
 	<title>Index</title>
 </head>
 <body>
 	<a href="insert_user.php">Insert Users</a>
 </body>
 </html>
