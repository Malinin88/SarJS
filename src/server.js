/**
 * Module dependencies.
 */
var path = require('path');
var express = require('express');
var debug = require('debug')('SarJS:server');
var http = require('http');
var config = require('nconf');
var errorHandler = require('errorhandler');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var log = require('./log')(module);
var router = require('./api/content');

const appServer = express(); //const appServer = global.server = express();
const port = _normalizePort(process.env.PORT || config.get('defaultPort'));

/**
 * View engine setup
 */
appServer.set('views', path.join(__dirname, '../views'));
appServer.set('view engine', 'ejs');

/**
 * Middleware
 */
appServer.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
appServer.use(logger('dev'));
appServer.use(bodyParser.json());
appServer.use(bodyParser.urlencoded({extended: false}));
appServer.use(cookieParser());

/**
 * Register Node.js middleware
 */
appServer.use(express.static(path.join(__dirname, '../build/public')));

/**
 * Register API middleware
 */
appServer.use('/', router);

/**
 * Catch 404 and forward to error handler
 */
appServer.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/**
 * Development error handler
 * will print stacktrace
 */
if (appServer.get('env') === 'development') {
    appServer.use(errorHandler());
}

/**
 * Production error handler
 * No stacktrace leaked here
 */
appServer.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

/**
 * Get port from environment and store in Express.
 */
appServer.set('port', port);

/**
 * Create HTTP server.
 */
var server = http.createServer(appServer);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', _onError);
server.on('listening', _onListening);

/**
 * Normalize a port into a number, string, or false.
 */
function _normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function _onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function _onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    log.info('Listening on ' + bind);
}