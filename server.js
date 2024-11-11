// Import the http module to create an HTTP server
const http = require("http");

// Define the hostname and port
const hostname = "127.0.0.1";
const port = 3000;

// Create the HTTP server and define request handling
const server = http.createServer((req, res) => {
  // Set response headers
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  // Handle different routes
  if (req.url === "/") {
    res.end("Hello, welcome to the simple Node.js server!");
  } else if (req.url === "/about") {
    res.end("This is a simple Node.js backend example.");
  } else {
    res.statusCode = 404;
    res.end("Page not found");
  }
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
