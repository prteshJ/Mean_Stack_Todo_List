var users = require('../../app/controllers/users.server.controller');

module.exports = function(app) {
    app.route('/users').post(users.create).get(users.list);
    
    app.route('/users/id=:userId').get(users.read).delete(users.delete);
    app.param('userId', users.userByID);

    app.route('/users/name=:userName').get(users.read);
    app.param('userName', users.userByName);    
};