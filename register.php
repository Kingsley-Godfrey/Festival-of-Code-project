<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["kingsleyjameshaighgodfrey@gmail.com"];
    $password = $_POST["password"];

    // Store the data in a text file (username_passwords.txt)
    $data = $username . "," . password_hash($password, PASSWORD_BCRYPT) . PHP_EOL;
    file_put_contents("username_passwords.txt", $data, FILE_APPEND);

    echo "Account created successfully!";
}
?>
