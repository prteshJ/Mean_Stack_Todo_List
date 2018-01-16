var message = "Howdy";

exports.sayHello = function(req, res) {
    res.send(message+'...Hello called');
};

exports.sayBye = function(req, res) {
    res.send(message+'...Bye called');
};

exports.home = function(req, res) {
    res.render('index', {
        title: 'Home',
        body: 'This is my Home Page'
    });
};