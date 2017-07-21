var bodyParser = require('body-parser');
var morgan = require('morgan');

var init = function (app) {
    app.use(morgan('dev'));
    app.use(bodyParser.json());
}

module.exports = init;
