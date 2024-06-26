<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    session_start();
echo '
    <button>
    <a href="./logout.php">LogOut</a>
    </button>
    <h1>login successfull</h1>
    <h2 id="title"></h2>
';
    if(isset($_SESSION['loggedin']) && ($_SESSION['username']==true)){
        echo ' <h2 id="title">welcome'.$_SESSION['username'].'</h2> ';
    }
    else{
        echo ' <h1 id="title">Not loggedin</h1> ';
    } 

    
?>
</body>
</html>
