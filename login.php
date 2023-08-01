<?php
session_start();

// Replace the following with your database connection details
$servername = "localhost";
$username = "your_database_username";
$password = "your_database_password";
$dbname = "your_database_name";

// Establish the database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get username and password from the form
if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Perform necessary validation and sanitization of user inputs
    // (Please make sure to implement proper validation and sanitization)

    // Here, you should hash the password before storing it.
    // In this example, we'll store it in plain text for simplicity.
    // NEVER store passwords in plain text in a real application.

    // Query the database to check if the provided username and hashed password match the stored values
    $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows === 1) {
        // If the login credentials are valid, start a session and redirect the user to their account page.
        $_SESSION['username'] = $username;
        header("Location: account.php");
        exit();
    } else {
        // Otherwise, show an error message and redirect them back to the login form.
        echo "Invalid username or password.";
    }
}

$conn->close();
?>