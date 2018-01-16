var todos = require('../../app/controllers/todos.server.controller');

module.exports = function(app) {
    app.route('/todos').post(todos.create).get(todos.list);
    app.route('/todos/:todoId').delete(todos.delete);
    app.param('todoId', todos.listByID);
};