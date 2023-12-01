export default function ContainerRegistration() {
    return(
        <>
          <h1>Container Registration</h1>
          <form id="containerRegistrationForm">
            <label htmlFor="containerID">Container ID:</label>
            <input type="text" id="containerID" name="containerID" />
            <br />
            <br />
            <label htmlFor="sourceID">Source (Ship/Truck ID):</label>
            <input type="text" id="sourceID" name="sourceID" />
            <br />
            <br />
            <label htmlFor="destinationID">Destination (Ship/Truck ID):</label>
            <input type="text" id="destinationID" name="destinationID" />
            <br />
            <br />
            <label htmlFor="storageArea">Storage Area:</label>
            <input type="text" id="storageArea" name="storageArea" />
            <br />
            <br />
            <button type="button" onclick="registerContainer()">
              Register Container
            </button>
          </form>
        </>
    )
}