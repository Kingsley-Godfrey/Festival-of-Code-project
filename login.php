<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Read the data from the text file (username_passwords.txt)
    $file = file("username_passwords.txt", FILE_IGNORE_NEW_LINES);
    foreach ($file as $line) {
        list($storedUsername, $hashedPassword) = explode(",", $line);
        if ($username === $storedUsername && password_verify($password, $hashedPassword)) {
            echo "Login successful! Welcome, $username!";
            exit;
        }
    }

    echo "Invalid username or password. Please try again.";
}
?>
