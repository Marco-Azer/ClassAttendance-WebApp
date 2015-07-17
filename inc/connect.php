<?php 
	require_once __DIR__ . '/configure.php';

	try{
		$con = new PDO('mysql:host='.$config['db']['host'].';dbname='.$config['db']['name'], 
					$config['db']['user'], 
					$config['db']['password']);
		$con -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	}
	catch(PDOException $e){
		echo "Couldn't connect to databas. $e->getMessage()";
	}
 ?>