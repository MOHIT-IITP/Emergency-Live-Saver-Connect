<?php
    include "connection.php";
    if(isset($_POST['submit'])){
        $username = $_POST['user'];
        $password = $_POST['pass'];

        $sql ="select * from login where username = '$username' and password = '$password'";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
        $count = mysqli_num_rows($result);
        if($count==1){
            session_start();
            $_SESSION['loggedin'] = true;
            $_SESSION['username'] = $username;
            header("Location:/phpcaps/Capstone_Project/Html/front.php");
        } 
        else{
            echo '<script>
            window.location.href = "/phpcaps/Capstone_Project/php/index1.php";
            alert("Login failed. Invalid username or password")
            </script>';
        }


    }

?>
/// this repo is owned by MOHIT-IITP
