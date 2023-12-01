export default function PortEntry() {
    return(
        <>
            <>
              <h2>Port Entry</h2>
              <form action="“PortEntryAPI.js”" method="“GET”" name="“PortEntry”">
                <label htmlFor="ShipID">Ship Entering Port:</label>
                <br />
                <input
                  type="text"
                  id="shipID"
                  name="Ship ID"
                  defaultValue="Enter Ship ID"
                />
                <br />
                <input type="submit" defaultValue="Submit" />
                <div />
                <p />
                <div />
                <label htmlFor="berthID">Berth Dock:</label>
                <br />
                <input type="text" id="berthID" name="Berth ID" defaultValue="" />
                <br />
              </form>
              <p>Entry a shipID and other information and receive a berth to dock at.</p>
            </>
        </>
    )
}

