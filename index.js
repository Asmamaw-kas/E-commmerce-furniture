const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const pool = require('./database');

const app = express();
const port = 3000;

app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
// Route to handle POST requests from the client
app.post('/add-to-cart', async (req, res) => {
    const { product_id, quantity, price } = req.body;

    console.log('Received data:', { product_id, quantity, price }); // Log incoming data

    try {
        const result = await pool.query(
            'INSERT INTO cart (product_id, quantity, price) VALUES ($1, $2, $3) RETURNING *',
            [product_id, quantity, price]
        );

        console.log('Inserted data:', result.rows[0]); // Log inserted data
        res.status(201).json({ success: true, data: result.rows[0] });
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ success: false, error: 'Database error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});