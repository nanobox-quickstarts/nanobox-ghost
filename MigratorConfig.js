var config = require('./node_modules/ghost/core/server/config'),
    ghostVersion = require('./node_modules/ghost/core/server/utils/ghost-version');

require('./node_modules/ghost/core/server/overrides');

module.exports = {
    currentVersion: ghostVersion.safe,
    database: {
            "client": "mysql",
            "connection": {
                "host": process.env.DATA_DB_HOST,
                "user": process.env.DATA_DB_USER,
                "password": process.env.DATA_DB_PASS,
                "database": "gonano",
                "charset": "utf8"
            }
        },
    migrationPath: config.get('paths:migrationPath')
};