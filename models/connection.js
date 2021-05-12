import mysql from 'mysql';

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'admin',
    database: 'nodejs'
});

export default connection;