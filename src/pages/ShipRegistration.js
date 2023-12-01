export default function ShipRegistration() {
    return(
        <>
            <>
              <h2>Ship Registration</h2>
              <form action="“RegisterShip.jsp”" method="“GET”" name="“ShipRegistration”">
                <label htmlFor="ShipID">Ship Registration:</label>
                <br />
                <input
                  type="text"
                  id="shipID"
                  name="Ship ID"
                  defaultValue="Enter Ship ID"
                />
                <br />
                <label htmlFor="ShipName">Berth Dock:</label>
                <br />
                <input
                  type="text"
                  id="ShipName"
                  name="Ship Name"
                  defaultValue="Enter Ship Name"
                />
                <br />
                <input type="submit" defaultValue="Submit" />
              </form>
              <p>
                Enter the ship id and name of the ship, if it already exists it will display
                an error
              </p>
            </>
        </>
    )
}