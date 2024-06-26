<?php
session_start();
echo "logging out please wait";
session_destroy();
header("Location:/phpcaps/Capstone_Project/Html/front.php")
?>