<?php
    include"connection.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="form">
        <h1>Login form</h1>
        <form name="form" action="login.php" method="POST">

            <label for="">Username: </label>
            <input type="text" id="user" name="user">

            <label for="">Password</label>
            <input type="password" id="pass" name="pass">
            <input type="submit" id="btn" value="Login" name="submit"/>
        </form>
    </div>
    
</body>
</html>
