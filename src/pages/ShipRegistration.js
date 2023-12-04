import React, { useState } from 'react';

export default function ShipRegistration() {
  const [shipID, setShipID] = useState('');
  const [shipName, setShipName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/insertship', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Shipname: shipName,
          ShipID: shipID,
        }),
      });

      if (!response.ok) {
        throw new Error('Error registering ship');
      }

      // Handle success if needed
    } catch (error) {
      // Handle error
      console.error('Error:', error.message);
    }
  };

  return (
    <>
      <h2>Ship Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="shipID">Ship ID:</label>
        <br />
        <input
          type="text"
          id="shipID"
          name="shipID"
          value={shipID}
          onChange={(e) => setShipID(e.target.value)}
          placeholder="Enter Ship ID Here"
        />
        <br />
        <br />
        <label htmlFor="shipName">Ship Name:</label>
        <br />
        <input
          type="text"
          id="shipName"
          name="shipName"
          value={shipName}
          onChange={(e) => setShipName(e.target.value)}
          placeholder="Enter Ship Name Here"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <p>
        Enter the Ship ID and the Ship Name of the ship. If it already exists, an error will be displayed.
      </p>
    </>
  );
}

