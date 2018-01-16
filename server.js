var config = require('./config/config'),
    mongoose = require('./config/mongoose'),
    express = require('./config/express');

var db = mongoose(),
 	app = express();

// application -------------------------------------------------------------
app.get('/', function(req, res) {
    res.sendFile(__dirname +'/app/views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});


app.listen(config.port);
//module.exports = app;
console.log(process.env.NODE_ENV  + ' server running at http://localhost:' + config.port);