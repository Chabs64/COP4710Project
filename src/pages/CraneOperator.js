import React, { useState } from 'react';

export default function CraneOperator() {

  const [idInput, setIdInput] = useState('');
  const [containers, setContainers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

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
        throw new Error('No matching containers');
      }

      const data = await response.json();
      if (data.success) {
        setContainers(data.data);
        setErrorMessage('');
      } else {
        setContainers([]);
        setErrorMessage('No containers found for the provided ID');
      }

    } catch (error) {
      setErrorMessage('No matching containers');
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

  return (
    <>
      <h1>Crane Operator</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="idInput">Enter Ship or Truck ID:</label>
        <input
          type="text"
          id="idInput"
          name="idInput"
          value={idInput}
          onChange={(e) => setIdInput(e.target.value)}
          placeholder="Enter Ship ID or Truck ID Here"
        />
        <br />
        <input type="submit" value="Display Container Assignments" />
      </form>

      {errorMessage && <p>{errorMessage}</p>}

      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ padding: '8px' }}>Container ID</th>
            <th style={{ padding: '8px' }}>Source ID</th>
            <th style={{ padding: '8px' }}>Destination ID</th>
            <th style={{ padding: '8px' }}>Location ID</th>
            <th style={{ padding: '8px' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {containers.map((container, index) => (
            <tr key={index}>
              <td style={{ padding: '8px' }}>{container.containerid}</td>
              <td style={{ padding: '8px' }}>{container.sourceid}</td>
              <td style={{ padding: '8px' }}>{container.destinationid}</td>
              <td style={{ padding: '8px' }}>{container.locationid}</td>
              <td style={{ padding: '8px' }}>{container.stats}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <form onSubmit={handleSubmit2}>
        <input type="submit" value="Completed" />
      </form>
    </>
  );
}