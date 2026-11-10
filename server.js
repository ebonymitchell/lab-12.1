import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Create the Express application.
const app = express();

// Define the server port.
const port = 3000;

// Get the directory containing this server file.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the homepage.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve the contact page.
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Start the server.
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
