<?php
include "connection.php";
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $user_email = $_POST['user'];
    $pass = $_POST['pass'];
    $cpass = $_POST['confirm_pass'];

    // Check if the username already exists
    $existsql = "SELECT * FROM `login` WHERE username = ?";
    $stmt = $conn->prepare($existsql);
    $stmt->bind_param("s", $user_email);
    $stmt->execute();
    $result = $stmt->get_result();
    $numrow = $result->num_rows;

    if ($numrow > 0) {
        $showerror = "Username already in use";
    } else {
        if ($pass == $cpass) {
            // Hash the password before storing
            $hash = password_hash($pass, PASSWORD_DEFAULT);

            // Insert the new user into the database using prepared statements
            $sql = "INSERT INTO `login` (`username`, `password`) VALUES (?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("ss", $user_email, $hash);
            $result = $stmt->execute();

            if ($result) {
                $showAlert = true;
                header("Location: /phpcaps/Capstone_Project/php/index1.php?signupsuccess=true");
                exit();
            } else {
                $showerror = "Error: " . $stmt->error;
            }
        } else {
            $showerror = "Passwords do not match";
        }
    }
    header("Location: /phpcaps/Capstone_Project/php/new.php?signupsuccess=false&error=" . urlencode($showerror));
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <link rel="stylesheet" href="../Css/new.css">
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
