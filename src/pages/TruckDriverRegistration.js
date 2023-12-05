import React, { useState } from 'react';

export default function TruckDriverRegistration() {

    const [TruckID, setTruckID] = useState('');
    const [pickUP, setpickUP] = useState('');
    const [dropOff, setdropOff] = useState('');

      const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const response = await fetch('http://localhost:4000/api/getTruckAndContanier', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              truckID: TruckID,
            }),
          });

          if (!response.ok) {
            throw new Error('Error getting truck info');
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
              <h2>Truck Driver Registration</h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="TruckID">Truck ID:</label>
                <br />
                <input
                  type="text"
                  id="TruckID"
                  name="TruckID"
                  value={TruckID}
                            onChange={(e) => setTruckID(e.target.value)}
                            placeholder="Enter Truck ID Here"
                />
                <br />
                <label htmlFor="dropOff">Drop Off:</label>
                <br />
                <input
                  type="text"
                  id="dropOff"
                  name="dropOff"
                  value={dropOff}
                            onChange={(e) => setdropOff(e.target.value)}
                            placeholder=""
                />
                <br />
                <label htmlFor="pickUP">Pick Up:</label>
                <br />
                <input
                  type="text"
                  id="pickUP"
                  name="pickUP"
                  value={pickUP}
                            onChange={(e) => setpickUP(e.target.value)}
                            placeholder=""
                />
                <br />
                <input type="submit" defaultValue="Submit" />
              </form>
              <p>
                Enter the Truck ID, and receive the location to pick up and drop off containers.
              </p>
            </>
        </>
    )
}