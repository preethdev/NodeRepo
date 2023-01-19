const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 8080;
const quotaconfig = require('./userconfig.json');

let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    const book = req.body;

    // Output the book to the console for debugging
    console.log(book);
    books.push(book);

    res.send('Book is added to the database');
});
app.get('/test', (req, res) => {
    res.send(quotaconfig);
});
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
