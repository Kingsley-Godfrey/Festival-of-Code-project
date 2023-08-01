// script.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get username and password from the form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Here, you should hash the password before sending it to the server.
    // In this example, we'll send it in plain text for simplicity.
    // NEVER send passwords in plain text in a real application.
  
    // Send the login data to the server
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Login successful! Redirecting to the account page.");
        window.location.href = "/account";
      } else {
        alert("Invalid username or password. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  });
  