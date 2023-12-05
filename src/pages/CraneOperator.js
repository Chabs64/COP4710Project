import React, { useState } from 'react';

export default function CraneOperator() {

    const [idInput, setidInput] = useState('');

      const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const response = await fetch('http://localhost:4000/api/getContainersForID', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              IdInput: idInput
            }),
          });

          if (!response.ok) {
            throw new Error('Error containers not found');
          }

          // Handle success if needed
        } catch (error) {
          // Handle error
          console.error('Error:', error.message);
        }
      };

      const handleSubmit2 = async (e) => {
              e.preventDefault();

              try {
                const response = await fetch('http://localhost:4000/api/updateContainers', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    IdInput: idInput
                  }),
                });

                if (!response.ok) {
                  throw new Error('Error containers not found');
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
              <h1>Crane Operator</h1>
              <form onSubmit={handleSubmit}>
                <label htmlFor="idInput">Enter Ship or Truck ID:</label>
                <input type="text" id="idInput" name="idInput" value={idInput}
                                                                         onChange={(e) => setidInput(e.target.value)}
                                                                         placeholder="Enter Ship ID or Truck ID Here"/>
                <br />
                <input type="submit" defaultValue="Submit" />
              </form>
              <br />
              <br />
              <form onSubmit={handleSubmit2}>
              <div id="containerDetails" style={{ display: "none" }}>
                {/* Container details will be displayed here */}
              </div>
              <br />
              <br />
                <input type="submit" defaultValue="Completed" />
              </form>
            </>
        </>
    )
}