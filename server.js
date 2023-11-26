import express from 'express';
import colors from 'colors';

const app = express();
const port = 8000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`.red);
});