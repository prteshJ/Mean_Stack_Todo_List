var Todo = require('mongoose').model('Todo');

exports.create = function(req, res, next) {
    var todo = new Todo(req.body);
    todo.save(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(todo);
        }
    });
};

exports.list = function(req, res, next) {
    Todo.find({}, function(err, todos) {
        if (err) {
            return next(err);
        }
        else {
            res.json(todos);
        }
    });
};

exports.delete = function(req, res, next) {
    req.todo.remove(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(req.todo);
        }
    })
};

exports.listByID = function(req, res, next, id) {
    Todo.findOne({
            _id: id
        },
        function(err, todo) {
            if (err) {
                return next(err);
            }
            else {
                req.todo = todo;
                next();
            }
        }
    );
};