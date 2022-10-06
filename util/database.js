const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'dawrobotico',
    password: '',
});

module.exports = pool.promise();