import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PortEntry from './pages/PortEntry';
import PortExit from './pages/PortExit';
import PortAdmin from './pages/PortAdmin';
import ShipRegistration from './pages/ShipRegistration';
import TruckDriverRegistration from './pages/TruckDriverRegistration';
import TruckRegistration from './pages/TruckRegistration';
import CraneOperator from './pages/CraneOperator';
import ContainerRegistration from './pages/ContainerRegistration';


export default function App() {
  return (
    <div className = "App">
        <header className = "App-header">
        <BrowserRouter>
            <Routes>
                <Route index element = {<Home / >} />
                <Route path = '/PortEntry' element = {<PortEntry / >} />
                <Route path = '/PortExit' element = {<PortExit / >} />
                <Route path = '/PortAdmin' element = {<PortAdmin / >} />
                <Route path = '/ShipRegistration' element = {<ShipRegistration / >} />
                <Route path = '/TruckDriverRegistration' element = {<TruckDriverRegistration / >} />
                <Route path = '/TruckRegistration' element = {<TruckRegistration / >} />
                <Route path = '/CraneOperator' element = {<CraneOperator / >} />
                <Route path = '/ContainerRegistration' element = {<ContainerRegistration / >} />
            </Routes>
        </BrowserRouter>
        </header>
    </div>
  )
}
