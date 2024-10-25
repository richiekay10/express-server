// Import the express module
const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define a GET route
app.get('/api', (req, res) => {
  res.send('GET request received');
});

// Define a POST route
app.post('/api', (req, res) => {
  res.send('POST request received');
});

// Define a PUT route
app.put('/api', (req, res) => {
  res.send('PUT request received');
});

// Define a DELETE route
app.delete('/api', (req, res) => {
  res.send('DELETE request received');
});

// Set the port for the server to listen on
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
