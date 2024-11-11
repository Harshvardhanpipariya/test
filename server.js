// Import the Express module
const express = require("express");
const app = express();

// Get the port from the environment variable or use 3000 as a fallback
const port = process.env.PORT || 3000;

// Define routes
app.get("/", (req, res) => {
  res.send("Hello, welcome to the simple Express.js server!");
});

app.get("/about", (req, res) => {
  res.send("This is a simple Express.js backend example.");
});

// Handle undefined routes (404)
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
