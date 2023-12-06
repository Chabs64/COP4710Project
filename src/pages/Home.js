import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <>
            <h2> Home Page </h2>
            <h3> Directory </h3>
            <p> For: PortEntry use <Link to="/PortEntry">PortEntry</Link> </p>
            <p> For: PortExit use <Link to="/PortExit">PortExit</Link> </p>
            <p> For: ShipRegistration use <Link to="/ShipRegistration">ShipRegistration</Link> </p>
            <p> For: TruckRegistration use <Link to="/TruckRegistration">TruckRegistration</Link> </p>
            <p> For: ContainerRegistration use <Link to="/ContainerRegistration">ContainerRegistration</Link> </p>
            <p> For: TruckDriverRegistration use <Link to="/TruckDriverRegistration">TruckDriverRegistration</Link> </p>
            <p> For: CraneOperator use <Link to="/CraneOperator">CraneOperator</Link> </p>
            <p> For: PortAdmin use <Link to="/PortAdmin">PortAdmin</Link> </p>
        </>
    )
}
