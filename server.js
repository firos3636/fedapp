const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js running on AWS EKS!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
