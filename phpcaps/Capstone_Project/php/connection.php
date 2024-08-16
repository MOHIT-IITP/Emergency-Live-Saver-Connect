<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $db_name = "database1";
    $conn =  mysqli_connect($servername, $username, $password, $db_name);
    if($conn->connect_error){
	die("connection failed" .$conn->connect_error);
    }
    echo ""
?>
/// this repo is owned by MOHIT-IITP
