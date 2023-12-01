export default function CraneOperator() {
    return(
        <>
            <>
              <h1>Crane Operator</h1>
              <form id="inputForm" method="GET" name="CraneOperator">
                <label htmlFor="idInput">Enter Ship or Truck ID:</label>
                <input type="text" id="idInput" name="idInput" />
                <input type="submit" defaultValue="Submit" />
              </form>
              <div id="containerDetails" style={{ display: "none" }}>
                {/* Container details will be displayed here */}
              </div>
            </>
        </>
    )
}