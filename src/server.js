const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());


// Set up PostgreSQL connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'PortCOP4710',
  password: 'chabs764',
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

app.post('/api/insertship', async (req, res) => {
  try {
    console.log(req.body)
    const { Shipname, ShipID} = req.body;


    const query = 'INSERT INTO Ships(Shipname, ShipID) VALUES ($1, $2)';
    const values = [Shipname, ShipID];

    const result = await pool.query(query, values);
    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/enterport', async (req, res) => {
  try {
    console.log(req.body)
    const {ShipID} = req.body;


    const query = 'UPDATE berths SET shipid = $1 WHERE (berthid, shipid) = ( SELECT berthid, shipid FROM berths WHERE shipid = 0 ORDER BY berthid LIMIT 1 )';
    const values = [ShipID];

    const result = await pool.query(query, values);
    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/getberth', async (req, res) => {
  try {
    console.log(req.body)
    const {shipID} = req.body;


    const query = 'SELECT berthID FROM berths WHERE shipID = ($1)';
    const values = [ShipID];

    const result = await pool.query(query, values);
    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
