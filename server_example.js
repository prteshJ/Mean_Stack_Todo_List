var port = 1337;
var express = require('express');
var app = express();

app.use('/profile', function(req, res) {
    res.send('This is the profile of Pritesh Jakhotia. He is originally from Pune, currently working in Pune.');
});

app.use('/', function(req, res) {
    res.send('Pritesh\'s Home Page');
});

app.listen(port);

console.log('Server running at http://localhost:' + port);