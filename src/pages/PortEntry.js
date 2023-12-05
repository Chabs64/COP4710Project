import React, { useState } from 'react';

export default function PortEntry() {
  const [shipID, setShipID] = useState('');
  const [receivedBerth, setReceivedBerth] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/enterport', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ShipID: shipID,
        }),
      });

      if (!response.ok) {
        throw new Error('Error registering ship');
      }

      // If ship registration is successful, proceed to get berth
        const berthResponse = await fetch('http://localhost:4000/api/getberth', {
          method: 'POST', // Change method to GET
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ShipID: shipID,
          }),
        });
        console.log(berthResponse);
        if (!berthResponse.ok) {
          throw new Error('No Berth Available');
        }

        const data = await berthResponse.json();
        const receivedBerth = data.data;

        // Update the state with the received berth
        setReceivedBerth(receivedBerth);
    } catch (error) {
      console.error('Error:', error.message);
      console.log("WHYYYYY");
    }
  };

  return (
    <>
      <h2>Port Entry</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ShipID">Ship Entering Port:</label>
        <br />
        <input
          type="text"
          id="shipID"
          name="Ship ID"
          value={shipID}
          onChange={(e) => setShipID(e.target.value)}
          placeholder="Enter Ship ID Here"
        />
        <br />
        <br />
        <input type="submit" defaultValue="Submit" />
        <div />
        <p />
        <div />
        <label htmlFor="BerthID">Berth Dock:</label>
        <br />
        <input
          type="text"
          id="berthID"
          name="Berth ID"
          value={receivedBerth}
          readOnly
        />
        <br />
      </form>
      <br />
      <p>Enter a Ship ID and receive a berth to dock at.</p>
    </>
  );
}

