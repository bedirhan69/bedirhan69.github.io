<?php
	
	$host 		= "localhost";
	$dbname 	= "ukas";
	$charset 	= "utf8";
	$root 		= "root";
	$password 	= "";

	try{
		$db = new PDO("mysql:host=$host;dbname=$dbname;charset=$charset;", $root, $password);
	}catch(PDOException $error){
		echo $error->getMessage();
	}
?>