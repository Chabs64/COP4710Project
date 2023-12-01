export default function TruckDriverRegistration() {
    return(
        <>
            <>
              <h2>Truck Driver Registration</h2>
              <form action="RegisterDriverAPI.js" method="GET" name="TruckDriverRegistration">
                <label htmlFor="DriverID">Driver ID:</label>
                <br />
                <input
                  type="text"
                  id="DriverID"
                  name="DriverID"
                  defaultValue="Enter Driver ID"
                />
                <br />
                <label htmlFor="DriverName">Driver Name:</label>
                <br />
                <input
                  type="text"
                  id="DriverName"
                  name="DriverName"
                  defaultValue="Enter Driver Name"
                />
                <br />
                <label htmlFor="TruckID">Truck ID:</label>
                <br />
                <input
                  type="text"
                  id="TruckID"
                  name="TruckID"
                  defaultValue="Enter Truck ID"
                />
                <br />
                <input type="submit" defaultValue="Submit" />
              </form>
              <p>
                Enter the driver's ID, name, and the associated truck ID for registration.
              </p>
            </>
        </>
    )
}