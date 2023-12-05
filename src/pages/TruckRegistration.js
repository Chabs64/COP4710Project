import React, { useState } from 'react';

export default function TruckRegistration() {

    const [TruckID, setTruckID] = useState('');

      const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const response = await fetch('http://localhost:4000/api/addtruck', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              trucksID: TruckID
            }),
          });

          if (!response.ok) {
            throw new Error('Error registering truck');
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
              <h2>Truck Registration</h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="TruckID">Truck Registration:</label>
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
                <input type="submit" defaultValue="Submit" />
              </form>
              <p>
                Enter the truck ID of the truck. It will display an error if it
                already exists.
              </p>
            </>
        </>
    )
}