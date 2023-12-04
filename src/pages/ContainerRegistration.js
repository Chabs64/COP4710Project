import React, { useState } from 'react';

export default function ContainerRegistration() {
  const [containerID, setcontainerID] = useState('');
  const [sourceID, setsourceID] = useState('');
  const [destinationID, setdestinationID] = useState('');
  const [storageArea, setstorageArea] = useState('');
  const [stats, setstats] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/addcontainer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ContainerID: containerID,
          SourceID: sourceID,
          DestinationID: destinationID,
          StorageArea: storageArea,
          Stats: stats
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


    return(
        <>
          <h1>Container Registration</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="containerID">Container ID:</label>
            <input type="text" id="containerID" name="containerID" value={containerID}
                                                                             onChange={(e) => setcontainerID(e.target.value)}
                                                                             placeholder="Enter Container ID Here"/>
            <br />
            <br />
            <label htmlFor="sourceID">Source (Ship/Truck ID):</label>
            <input type="text" id="sourceID" name="sourceID" value={sourceID}
                                                                       onChange={(e) => setsourceID(e.target.value)}
                                                                       placeholder="Enter Source ID Here"/>
            <br />
            <br />
            <label htmlFor="destinationID">Destination (Ship/Truck ID):</label>
            <input type="text" id="destinationID" name="destinationID" value={destinationID}
                                                                                 onChange={(e) => setdestinationID(e.target.value)}
                                                                                 placeholder="Enter Destination ID Here"/>
            <br />
            <br />
            <label htmlFor="storageArea">Storage Area:</label>
            <input type="text" id="storageArea" name="storageArea" value={storageArea}
                                                                             onChange={(e) => setstorageArea(e.target.value)}
                                                                             placeholder="Enter Storage Location Here"/>
            <br />
            <br />
                        <label htmlFor="stats">Stats:</label>
                        <input type="text" id="stats" name="stats" value={stats}
                                                                                         onChange={(e) => setstats(e.target.value)}
                                                                                         placeholder="Enter Stats Here"/>
            <br />
            <br />
            <input type="submit" defaultValue="Submit" />

          </form>
        </>
    )
}