<?php
    include "connection.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="../Css/index1.css">
</head>
<body>
    <div id="mainform">
        <h1>Login</h1>
        <form id="main" name="form" action="/phpcaps/Capstone_Project/php/login.php" method="POST">
            <input type="email" class="log" placeholder="Username" name="user">
            <input type="password" class="log" placeholder="Password" name="pass">
            <div class="checkbox">
                <div class="checkbox_right">
                    <input type="checkbox" >
                    Remember Me
                </div>
                <div class="checkbox_left">
                    <input type="checkbox" >
                    I agree to the term & condition
                </div>
            </div>
            <input type="submit" id="btn" value="Login"  name="submit">
            <button id="btn"><a href="../Html/front.html">SignUp as Guest</a></button>
            <div class="forget">
                Don't have an account?
                <a href="./new.php">Register</a>
            </div>
        </form>
    </div>
    
</body>
</html>
