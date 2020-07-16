const express = require('express');
const path = require('path');
const questions = require('./Questions');
const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/questions', (req, res) => {
    res.json(questions);
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Quiz app listening on ${port}`);