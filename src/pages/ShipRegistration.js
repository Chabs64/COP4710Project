import React, { useState } from 'react';

export default function ShipRegistration() {
  const [shipID, setShipID] = useState('');
  const [shipName, setShipName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/insertship', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ShipName: shipName,
          ShipID: shipID,
        }),
      });

      if (!response.ok) {
        const errorText = await response.json();
        if (errorText.error && errorText.error.includes('duplicate key value violates unique constraint')) {
          setErrorMessage('Ship ID is already taken.');
        } else {
          throw new Error(errorText.error || 'Error registering ship');
        }
      } else {
        // Reset error message if the registration succeeds
        setErrorMessage('');
        
        // Reset shipID and shipName if needed
        setShipID('');
        setShipName('');

        // Show success message
        setSuccessMessage('Registered!');
        
        // Hide success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      }
    } catch (error) {
      // Handle other errors and set error message
      setErrorMessage(error.message);
      console.error('Error:', error.message);
    }
  };

  return (
    <>
      <h2>Ship Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="shipID">Ship ID:</label>
        <br />
        <input
          type="text"
          id="shipID"
          name="shipID"
          value={shipID}
          onChange={(e) => setShipID(e.target.value)}
          placeholder="Enter Ship ID Here"
        />
        <br />
        <br />
        <label htmlFor="shipName">Ship Name:</label>
        <br />
        <input
          type="text"
          id="shipName"
          name="shipName"
          value={shipName}
          onChange={(e) => setShipName(e.target.value)}
          placeholder="Enter Ship Name Here"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      {/* Error message display */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {/* Success message display */}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {/* Additional content */}
    </>
  );
}
