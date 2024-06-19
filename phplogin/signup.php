<?php
    include "connection.php";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = $_POST["user"];
        $password = $_POST["pass"]; 
        

        $sql = "INSERT INTO login (username, password) VALUES ('$username', '$password')";
        if (mysqli_query($conn, $sql)) {
            header("Location:welcome.php");

        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup</title>
</head>
<body>
    <div id="form">
        <h1>Signup form</h1>
        <form name="signupForm" action="signup.php" method="POST">
            <label for="user">Username: </label>
            <input type="text" id="user" name="user" required>
            <br><br>
            <label for="pass">Password: </label>
            <input type="password" id="pass" name="pass" required>
            <br><br>
            <input type="submit" id="btn" value="Signup" name="submit"/>
        </form>
    </div>
</body>
</html>
