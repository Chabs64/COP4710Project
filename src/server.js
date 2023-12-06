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

// API endpoint to perform theIdInput insert operation
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
    const { ShipName, ShipID} = req.body;


    const query = 'INSERT INTO Ships(ShipName, ShipID) VALUES ($1, $2)';
    const values = [ShipName, ShipID];

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
  } 
  catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/getberth', async (req, res) => {
  try {
    const {ShipID} = req.body;


    const query = 'SELECT berthID FROM berths WHERE shipID = ($1)';
    const values = [ShipID];

    const result = await pool.query(query, values);


    console.log(result.rows[0]);
    if (typeof result.rows[0] == 'undefined'){
      console.log('here');
      res.status(201).json({ success: true, data: "berths full"});
    }
    else{
      res.status(201).json({ success: true, data: result.rows[0].berthid});
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});



app.post('/api/removeship', async (req, res) => {
  try {
    console.log("calledportexit");
    const {ShipID} = req.body;


    const query = 'UPDATE Berths set ShipID = 0 where ShipID = $1';
    const values = [ShipID];

    const result = await pool.query(query, values);
    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/addcontainer', async (req, res) => {
  try {
    console.log(req.body)
    const {ContainerID, SourceID, DestinationID, StorageArea, Stats} = req.body;

    const query = 'INSERT INTO Container (ContainerID, SourceID, DestinationID, LocationID ,Stats) VALUES ($1, $2, $3, $4, $5)';
    const values = [ContainerID, SourceID, DestinationID, StorageArea, Stats];

    const result = await pool.query(query, values);
    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/addtruck', async (req, res) => {
  try {
    console.log(req.body)
    const {trucksID} = req.body;


    const query = 'INSERT INTO trucks(trucksid) VALUES ($1)';
    const values = [trucksID];

    const result = await pool.query(query, values);
    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

//show the first container storage area id that is ready for pick up base on the truck id, and show the first container storage area id that is ready to drop off
app.post('/api/getTruckAndContainerSource', async (req, res) => {
  try {
  console.log(req.body)
      const {trucksID} = req.body;


      const query = 'SELECT LocationID FROM container WHERE sourceid = $1 and stats != \'at destination\' ORDER BY sourceid LIMIT 1';
      const values = [trucksID];
      const result = await pool.query(query, values);
      res.status(201).json({ success: true, data: result.rows[0] });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/getTruckAndContainerDestination', async (req, res) => {
  try {
  console.log(req.body)
      const {trucksID} = req.body;

      const query = 'SELECT LocationID FROM container WHERE destinationid = $1 and stats != \'at destination\' ORDER BY sourceid LIMIT 1';
      const values = [trucksID]
      const result = await pool.query(query, values);

      res.status(201).json({ success: true, data: result.rows[0]});

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

//show a list of containers matching the ID then display it, exclude all containers with status (column stats0 "at destination"
app.post('/api/getContainersForID', async (req, res) => {
  try {
    const {IdInput} = req.body;


    const query = "SELECT * FROM container WHERE ((sourceid = ($1) and stats = 'at source') or (destinationid = ($1) and stats = 'at storage'))"
    const values = [IdInput];

    const result = await pool.query(query, values);


    //console.log(result.rows);
    if (result.rows.length == 0){
      res.status(201).json({ success: true, data: "ship or truck has no containers"});
    }
    else{
      res.status(201).json({ success: true, data: result.rows});
    }
    
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

//update the list of containers you got to the next step respectfully, "at source" to "at storage", and "at storage" to "at destination"
app.post('/api/updateContainers', async (req, res) => {
  try {
    const {IdInput} = req.body;
    console.log("hit");


    const query = "UPDATE container SET stats = 'at destination'  WHERE (stats) IN (SELECT stats FROM container WHERE destinationid = $1 and stats = 'at storage')"

    const values = [IdInput];
    const result = await pool.query(query, values);


    const query2 = "UPDATE container SET stats = 'at storage'  WHERE (stats) IN (SELECT stats FROM container WHERE sourceid = $1 and stats = 'at source')"

    const values2 = [IdInput];
    const result2 = await pool.query(query2, values2);
    res.status(201).json({ success: true, data: result.rows});

    //console.log(result.rows);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});


//port admin is still unfinished



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
