const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve the static HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint to add numbers
app.get('/add', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send('Both inputs must be valid numbers.');
  }
  const sum = num1 + num2;
  res.send({ sum: sum }); // Send the sum as a JSON response
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
