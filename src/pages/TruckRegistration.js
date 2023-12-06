import React, { useState } from 'react';

export default function TruckRegistration() {
  const [truckID, setTruckID] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/addtruck', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          trucksID: truckID,
        }),
      });

      if (!response.ok) {
        throw new Error('Error registering truck');
      }

      // Reset error message on success
      setErrorMessage('');

      // Show success message
      setSuccessMessage('Truck Registered!');

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);

      // Reset truckID after successful registration (optional)
      setTruckID('');
    } catch (error) {
      // Handle error
      console.error('Error:', error.message);
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <h2>Truck Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="truckID">Truck Registration:</label>
        <br />
        <input
          type="text"
          id="truckID"
          name="truckID"
          value={truckID}
          onChange={(e) => setTruckID(e.target.value)}
          placeholder="Enter Truck ID Here"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p>
        Enter the truck ID of the truck. It will display an error if it already exists.
      </p>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </>
  );
}
