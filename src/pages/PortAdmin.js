 export default function PortAdmin() {
     return(
         <>
             <>
               <h1>Port Admin Management</h1>
               <h2>Ship Details</h2>
               <form id="shipDetailsForm">
                 <label htmlFor="shipID">Enter Ship ID:</label>
                 <input type="text" id="shipID" name="shipID" placeholder="Enter Ship ID" />
                 <button type="button" onclick="viewShipDetails()">
                   View Ship Details
                 </button>
               </form>
               <h2>Berth Overview</h2>
               <div id="berthOverview">{/* Berth overview will be displayed here */}</div>
               <h2>Container Insights</h2>
               <form id="containerInsightsForm">
                 <label htmlFor="containerID">Enter Container ID:</label>
                 <input
                   type="text"
                   id="containerID"
                   name="containerID"
                   placeholder="Enter Container ID"
                 />
                 <button type="button" onclick="viewContainerDetails()">
                   View Container Insights
                 </button>
               </form>
               <h2>Truck Information</h2>
               <form id="truckInformationForm">
                 <label htmlFor="truckID">Enter Truck ID:</label>
                 <input
                   type="text"
                   id="truckID"
                   name="truckID"
                   placeholder="Enter Truck ID"
                 />
                 <button type="button" onclick="viewTruckDetails()">
                   View Truck Information
                 </button>
               </form>
             </>
         </>
     )
 }