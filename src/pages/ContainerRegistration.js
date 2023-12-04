export default function ContainerRegistration() {
  const [shipID, setShipID] = useState('');
  const [shipName, setShipName] = useState('');
  const [shipName, setShipName] = useState('');
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


    return(
        <>
          <h1>Container Registration</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="containerID">Container ID:</label>
            <input type="text" id="containerID" name="containerID" value={containerID}
                                                                             onChange={(e) => setShipName(e.target.value)}
                                                                             placeholder="Enter Ship Name Here"/>
            <br />
            <br />
            <label htmlFor="sourceID">Source (Ship/Truck ID):</label>
            <input type="text" id="sourceID" name="sourceID" value={sourceID}
                                                                       onChange={(e) => setShipName(e.target.value)}
                                                                       placeholder="Enter Ship Name Here"/>
            <br />
            <br />
            <label htmlFor="destinationID">Destination (Ship/Truck ID):</label>
            <input type="text" id="destinationID" name="destinationID" value={shipName}
                                                                                 onChange={(e) => setShipName(e.target.value)}
                                                                                 placeholder="Enter Ship Name Here"/>
            <br />
            <br />
            <label htmlFor="storageArea">Storage Area:</label>
            <input type="text" id="storageArea" name="storageArea" value={shipName}
                                                                             onChange={(e) => setShipName(e.target.value)}
                                                                             placeholder="Enter Ship Name Here"/>
            <br />
            <br />
            <input type="submit" defaultValue="Submit" value={shipName}
                                                                 onChange={(e) => setShipName(e.target.value)}
                                                                 placeholder="Enter Ship Name Here"/>
          </form>
        </>
    )
}