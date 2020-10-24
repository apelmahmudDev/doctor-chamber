import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import Appointment from '../Appointment/Appointment/Appointment';
import Home from '../Home/Home/Home';
import Login from '../Login/Login';
// import PatientForm from '../PatientForm/PatientForm';
// import BookAppointments from '../BookAppointments/BookAppointments';
// import Navbar from '../Home/Navbar/Navbar';
// import DashboardRoutes from '../Dashboard/DashboardRoutes/DashboardRoutes';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route path="/appointment">
                <Appointment></Appointment>
            </Route>
            <Route path="/login">
                <Login></Login>
            </Route>

            {/* <Route path="/booking">
                <Navbar></Navbar>
                <BookAppointments></BookAppointments>
            </Route>
            <Route path="/patient-form/patient/:patientKey">
                <Navbar></Navbar>
                <PatientForm></PatientForm>
            </Route>
            <Route path="/dashboard">
                <DashboardRoutes></DashboardRoutes>
            </Route> */}
            <Route path="*"><h1>Not Found The Page</h1></Route>
        </Switch>
    );
};

export default Routes;