import React from 'react';
import { Switch, Route } from "react-router-dom";
import Appointment from '../Appointment/Appointment/Appointment';
import Dashboard from '../Dashboard/Dashboard/Dashboard';
import Home from '../Home/Home/Home';
import Login from '../Login/Login';
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
            <Route path="/dashboard/appointment">
                <Dashboard></Dashboard>
            </Route>
            <Route path="/login">
                <Login></Login>
            </Route>

            
            {/* <Route path="/dashboard">
                <DashboardRoutes></DashboardRoutes>
            </Route> */}
            <Route path="*"><h1>Not Found The Page</h1></Route>
        </Switch>
    );
};

export default Routes;