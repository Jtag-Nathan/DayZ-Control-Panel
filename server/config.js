const mysql = require('mysql');

//Set database connection credentials
const config = {
    host: 'localhost',
    user: 'dayz',
    password: 'dayz',
    database: 'angular_users',
};

//Create a MySQL pool
const pool = mysql.createPool(config);

//Export the pool for usage in our app/api
module.exports = pool;