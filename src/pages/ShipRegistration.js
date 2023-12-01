export default function ShipRegistration() {
    return(
        <>
            <>
              <h2>Ship Registration</h2>
              <form action="RegisterShipAPI.js" method="GET" name="ShipRegistration">
                <label htmlFor="ShipID">Ship ID:</label>
                <br />
                <input
                  type="text"
                  id="shipID"
                  name="Ship ID"
                  defaultValue="Enter Ship ID Here"
                />
                <br />
                <br />
                <label htmlFor="ShipName">Ship Name:</label>
                <br />
                <input
                  type="text"
                  id="shipName"
                  name="Ship Name"
                  defaultValue="Enter Ship Name Here"
                />
                <br />
                <input type="submit" defaultValue="Submit" />
              </form>
              <br />
              <p>
                Enter the Ship ID and the Ship Name of the ship, if it already exists it will display
                an error
              </p>
            </>
        </>
    )
}