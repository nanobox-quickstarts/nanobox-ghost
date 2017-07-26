var config = require('./node_modules/ghost/core/server/config'),
    ghostVersion = require('./node_modules/ghost/core/server/utils/ghost-version');

require('./node_modules/ghost/core/server/overrides');

config.set('database:connection:host', process.env.DATA_DB_HOST);
config.set('database:connection:user', process.env.DATA_DB_USER);
config.set('database:connection:password', process.env.DATA_DB_PASS);

var ghost = require('ghost');
var path = require('path');

ghost().then(function (ghostServer) {
    ghostServer.start();
});