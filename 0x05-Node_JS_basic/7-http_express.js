const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databaseName = 'your_database_name'; // Replace with your actual database name

  // Read the file asynchronously
  fs.readFile('3-read_file_async.js', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      res.type('text/plain');
      res.send(`This is the list of our students\n\n${data}\nDatabase: ${databaseName}`);
    }
  });
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
