const express = require('express');
const path = require('path');

const app = express();

// Define a route to serve static files from the 'dev' directory
app.use(express.static(path.join(__dirname, 'dev')));

// Define a route to handle 404 errors
app.use((req, res) => {
    const filePath = path.join(__dirname, 'dev', '404.html');
    console.log('File path:', filePath);
    res.status(404).sendFile(filePath);
  });

// Start the server
const PORT = process.env.PORT || 5502;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
