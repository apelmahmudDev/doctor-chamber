import React from 'react';
import './DashboardRoutes.css';
import { Link, Route } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Appointments from '../Appointments/Appointments';
import Patients from '../Patients/Patients';
import Prescription from '../Prescription/Prescription';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DateRangeIcon from '@material-ui/icons/DateRange';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import DescriptionIcon from '@material-ui/icons/Description';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const DashboardRoutes = () => {
    return (
        <div className="d-flex" id="wrapper">
        <div id="sidebar-wrapper">
            <div className="list-group list-group-flush">
                <Link to="/dashboard" className="list-group-item list-group-item-action"><DashboardIcon/> Dashboard</Link>
                <Link to="/dashboard/appointments" className="list-group-item list-group-item-action"><DateRangeIcon/> Appointments</Link>
                <Link to="/dashboard/patients" className="list-group-item list-group-item-action"><SupervisorAccountIcon/> Patients</Link>
                <Link to="/dashboard/prescriptions" className="list-group-item list-group-item-action"><DescriptionIcon/> Prescriptions</Link>
                <Link to="/" className="list-group-item list-group-item-action"><ArrowBackIosIcon/> Back</Link>
            </div>
        </div>
        
        <div id="page-content-wrapper">
            <Route exact path="/">
                <Dashboard></Dashboard>
            </Route>
            <Route exact path="/dashboard">
                <Dashboard></Dashboard>
            </Route>
            <Route path="/dashboard/appointments">
                <Appointments></Appointments>
            </Route>
            <Route path="/dashboard/patients">
                <Patients></Patients>
            </Route>
            <Route path="/dashboard/prescriptions">
                <Prescription></Prescription>
            </Route>
        </div>
    </div>

    );
};

export default DashboardRoutes;