const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
// Set up PostgreSQL connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ports',
  password: 'testing',
  port: 5432, // Change if your PostgreSQL server runs on a different port
});
console.log("CONNECTED PG");

// API endpoint to perform the insert operation
app.get('/api/seetable', async (req, res) => {
  try {
    const query = 'SELECT * FROM port';
    const result = await pool.query(query);
    res.json({ success: true, data: result.rows });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/example', (req, res) => {
  res.send('This is an example string from the API!');
});

app.post('/api/insertuser', async (req, res) => {
  try {
    console.log(req.body)
    const { username, email } = req.body;

    // Ensure both username and email are provided in the request
    if (!username || !email) {
      return res.status(400).json({ success: false, message: 'Username and email are required.' });
    }

    const query = 'INSERT INTO  (username, email) VALUES ($1, $2)';
    const values = [username, email];

    const result = await pool.query(query, values);
    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});