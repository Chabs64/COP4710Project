import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <>
            <h2> Home Page Directory</h2>
            <p> For: Port Entry use <Link to="/PortEntry">PortEntry</Link> </p>
            <p> For: Port Exit use <Link to="/PortExit">PortExit</Link> </p>
            <p> For: Ship Registration use <Link to="/ShipRegistration">ShipRegistration</Link> </p>
            <p> For: Truck Registration use <Link to="/TruckRegistration">TruckRegistration</Link> </p>
            <p> For: Container Registration use <Link to="/ContainerRegistration">ContainerRegistration</Link> </p>
            <p> For: Truck Driver Registration use <Link to="/TruckDriverRegistration">TruckDriverRegistration</Link> </p>
            <p> For: Crane Operator use <Link to="/CraneOperator">CraneOperator</Link> </p>
            <p> For: Port Admin use <Link to="/PortAdmin">PortAdmin</Link> </p>
        </>
    )
}
