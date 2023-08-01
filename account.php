<?php
session_start();

// Check if the user is logged in. If not, redirect to the login page.
if (!isset($_SESSION['username'])) {
    header("Location: index.html");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Account Page</title>
</head>
<body>
  <h1>Welcome to your account, <?php echo $_SESSION['username']; ?>!</h1>
</body>
</html>
