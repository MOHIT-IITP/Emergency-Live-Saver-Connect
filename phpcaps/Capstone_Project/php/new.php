<?php
include "connection.php";
if($_SERVER['REQUEST_METHOD']=="POST"){
    $user_email=$_POST['user'];
    $pass=$_POST['pass'];
    $cpass=$_POST['confirm_pass'];

    $existsql="select * from `login` where username='$user_email'";
    $result=mysqli_query($conn,$existsql);
    $numrow=mysqli_num_rows($result);
    if($numrow> 0){
        $showerror="username already in use";
    }
    else{
        if($pass==$cpass){
            //$hash = password_hash($pass, PASSWORD_DEFAULT);
            $sql="INSERT INTO `login` (`username`, `password`) VALUES ('$user_email', '$pass')";
            $result=mysqli_query($conn,$sql);

            if($result){
                $showAlert=true;
                header("Location:/phpcaps/Capstone_Project/php/index1.php?signupsuccess=true");
                exit();
            }
        }
            else{
                $showerror="Password donot match";
            }
        }
        header("Location:/phpcaps/Capstone_Project/php/new.php?signupsuccess=false");
    }





?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <link rel="stylesheet" href="../Css/newsignup.css">
</head>
<body>
    <div id="form">
        <h1>Sign Up</h1>
        <form action="new.php" method="POST">
            <input type="email" placeholder="Username" class="log" name="user" required>
            <input type="password" class="log" placeholder="Password" name="pass" required>
            <input type="password" class="log" placeholder="Confirm Password" name="confirm_pass" required>
            <input type="submit" class="btn" name="submit" value="Sign Up">
            <div class="forget">
                Have an account?
                <a href="./index1.php">LogIn</a>
            </div>
        </form>
    </div>
</body>
</html>
