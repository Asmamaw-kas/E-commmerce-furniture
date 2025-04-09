const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres', // Your PostgreSQL username
    host: 'localhost', // Your PostgreSQL host
    database: 'postgres', // Your database name
    password: '2133', // Your PostgreSQL password
    port: 5432, // Default PostgreSQL port
});

module.exports = pool;