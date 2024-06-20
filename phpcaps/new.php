<?php
include 'connection.php';
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
            // $hash = password_hash($pass, PASSWORD_DEFAULT);
            $sql="INSERT INTO `login` (`username`, `password`) VALUES ('$user_email', '$pass')";
            $result=mysqli_query($conn,$sql);

            if($result){
                $showAlert=true;
                header("Location:/phpcaps/welcome.php?signupsuccess=true");
                exit();
            }
        }
            else{
                $showerror="Password donot match";
            }
        }
        header("Location:/phpcaps/new.php?signupsuccess=false");
    }





?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
</head>
<body>
    <h2>Sign Up</h2>
    <form action="new.php" method="POST">
        <label for="user">Username:</label><br>
        <input type="email" id="user" name="user" required><br><br>
        
        <label for="pass">Password:</label><br>
        <input type="password" id="pass" name="pass" required><br><br>
        
        <label for="confirm_pass">Confirm Password:</label><br>
        <input type="password" id="confirm_pass" name="confirm_pass" required><br><br>
        
        <input type="submit" name="submit" value="Sign Up">
    </form>
</body>
</html>
