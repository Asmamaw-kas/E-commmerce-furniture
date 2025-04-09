const pool = require('./database');

async function queryCart() {
    try {
        const result = await pool.query('SELECT * FROM cart');
        console.log('Cart Table Data:', result.rows);
    } catch (err) {
        console.error('Error querying cart table:', err);
    } finally {
        pool.end(); // Close the connection pool
    }
}

queryCart();