export default function TruckRegistration() {
    return(
        <>
            <>
              <h2>Truck Registration</h2>
              <form action="RegisterTruckAPI.js" method="GET" name="TruckRegistration">
                <label htmlFor="TruckID">Truck Registration:</label>
                <br />
                <input
                  type="text"
                  id="TruckID"
                  name="TruckID"
                  defaultValue="Enter Truck ID"
                />
                <br />
                <label htmlFor="TruckName">Truck Name:</label>
                <br />
                <input
                  type="text"
                  id="TruckName"
                  name="TruckName"
                  defaultValue="Enter Truck Name"
                />
                <br />
                <input type="submit" defaultValue="Submit" />
              </form>
              <p>
                Enter the truck ID and name of the truck. It will display an error if it
                already exists.
              </p>
            </>
        </>
    )
}