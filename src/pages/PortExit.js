import React, { useState } from 'react';

export default function PortExit() {
  const [shipID, setShipID] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/removeship', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ShipID: shipID,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to remove ship');
      }

      // Handle success if needed
    } catch (error) {
      // Handle error
      console.error('Error:', error.message);
    }
  };

  return (
    <>
      <h2>Port Exit</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="shipID">Ship Leaving Port:</label>
        <br />
        <input
          type="text"
          id="shipID"
          name="shipID"
          value={shipID}
          onChange={(e) => setShipID(e.target.value)}
          placeholder="Enter Ship ID"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <p>
        If the ship corresponding to the Ship ID provided is in a berth, it will be ejected.
      </p>
    </>
  );
}

