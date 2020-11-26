import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Appointment from '../Appointment/Appointment/Appointment';
import Appointments from '../Dashboard/Appointments/Appointments';
import Patients from '../Dashboard/Patients/Patients';
import Prescriptions from '../Dashboard/Prescriptions/Prescriptions';
import Dashboard from '../Dashboard/Dashboard/Dashboard';
import Home from '../Home/Home/Home';
import Login from '../Login/Login';

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
            <Route path="/dashboard/dashboard">
                <Dashboard></Dashboard>
            </Route>
            <Route path="/dashboard/appointments">
                <Appointments></Appointments>
            </Route>
            <Route path="/dashboard/patients">
                <Patients></Patients>
            </Route>
            <Route path="/dashboard/prescriptions">
                <Prescriptions></Prescriptions>
            </Route>
			<Route path="*">
				<h1>Not Found The Page</h1>
			</Route>
		</Switch>
	);
};

export default Routes;
