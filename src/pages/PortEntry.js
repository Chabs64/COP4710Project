import React, { useState } from 'react';

export default function PortEntry() {

    const [shipID, setShipID] = useState('');
    const [berthID, setBerthNumber] = useState('');

      const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const response = await fetch('http://localhost:4000/api/enterport', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ShipID: shipID
            }),
          });

          if (!response.ok) {
            throw new Error('Error getting available berth');
          }

          // Handle success if needed
        } catch (error) {
          // Handle error
          console.error('Error:', error.message);
        }

        try {
                  const response = await fetch('http://localhost:4000/api/getberth', {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      ShipID: shipID,
                      BerthID: berthID
                    }),
                  });

                  if (!response.ok) {
                    throw new Error('No Berth Available');
                  }

                  // Handle success if needed
                } catch (error) {
                  // Handle error
                  console.error('Error:', error.message);
                }
      };


    return(
        <>
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
                <input type="text" id="berthID" name="Berth ID" value={berthID}
                 onChange={(e) => setBerthNumber(e.target.value)}
                 placeholder="" />
                <br />
              </form>
              <br />
              <p>Entry a Ship ID and receive a berth to dock at.</p>
            </>
        </>
    )
}

