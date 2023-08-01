const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);

  if (pathname === "/") {
    // Serve the index.html page
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end("Error loading the page");
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (pathname === "/login" && req.method === "POST") {
    // Handle the login request
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const { username, password } = JSON.parse(body);

      // Here, you should hash the password and compare it with the stored hashed password.
      // In this example, we'll just check if the username is "user" and password is "password".

      if (username === "user" && password === "password") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: true }));
      } else {
        res.writeHead(401, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: false }));
      }
    });
  } else if (pathname === "/account") {
    // Serve the account.html page
    fs.readFile("account.html", (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end("Error loading the page");
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
const express = require('express');
const app = express();
const port = 3000;

// Define a route for the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Define routes for additional files
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

// Define a route to serve static files from the "public" directory
app.use(express.static(__dirname + '/public'));

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});