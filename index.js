// npm i express to install express
// Want to use express's features
const express = require('express');
const app = express();

// please give me a file for '/', '/' SETS FIRST HOMEPAGE
// get grab information
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
})

// listen to localhost:3000 - nothing else uses this port
// runs all code above this
app.listen(3000, () => {
    console.log('Server is running on port 3000.')
})