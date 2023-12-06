import React, { useState } from 'react';

export default function TruckDriverRegistration() {

    const [TruckID, setTruckID] = useState('');
    const [pickUP1, setpickUP] = useState('');
    const [dropOff1, setdropOff] = useState('');

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const responseSource = await fetch('http://localhost:4000/api/getTruckAndContainerSource', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              trucksID: TruckID,
            }),
          });

          console.log(responseSource);
          if (!responseSource.ok) {
            throw new Error('Error getting truck info');
          }

          const data = await responseSource.json();
          const dropOff1 = data.data.locationid;


          setdropOff(dropOff1);


          const responseDestination = await fetch('http://localhost:4000/api/getTruckAndContainerDestination', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                trucksID: TruckID,
              }),
            });


        console.log(responseDestination);
        if (!responseDestination.ok) {
          throw new Error('Error getting truck info');
        }

        const data2 = await responseDestination.json();
        const pickUP1 = data2.data.locationid;


        setpickUP(pickUP1);

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
                  value={dropOff1}
                  readOnly
                />
                <br />
                <label htmlFor="pickUP">Pick Up:</label>
                <br />
                <input
                  type="text"
                  id="pickUP"
                  name="pickUP"
                  value={pickUP1}
                  readOnly
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