module.exports = function(app) {
    var index = require('../controllers/index.server.controller');
    app.get('/hello', index.sayHello);    
    app.get('/bye', index.sayBye);
    app.get('/home', index.home);
};