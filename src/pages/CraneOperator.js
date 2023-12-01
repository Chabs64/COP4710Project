export default function Home() {
    return(
        <>
            <>
              <h1>Crane Operator</h1>
              <form id="inputForm">
                <label htmlFor="idInput">Enter Ship or Truck ID:</label>
                <input type="text" id="idInput" name="idInput" />
                <button type="button" onclick="viewContainerDetails()">
                  Submit
                </button>
              </form>
              <div id="containerDetails" style={{ display: "none" }}>
                {/* Container details will be displayed here */}
              </div>
            </>
        </>
    )
}