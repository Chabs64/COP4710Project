export default function PortExit() {
    return(
        <>
          <h2>Port Exit</h2>
          <form action="“PortExitDO.jsp”" method="“GET”" name="“PortExit”">
            <label htmlFor="ShipID">Ship Leaving Port:</label>
            <br />
            <input
              type="text"
              id="shipID"
              name="Ship ID"
              defaultValue="Enter Ship ID"
            />
            <br />
            <input type="submit" defaultValue="Submit" />
          </form>
          <p>
            If the ship corresponding to the Ship ID provided is in a berth it will be
            ejected.
          </p>
        </>
    )
}