import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Appointment from '../Appointment/Appointment/Appointment';
import Appointments from '../Dashboard/Appointments/Appointments';
import Patients from '../Dashboard/Patients/Patients';
import Prescriptions from '../Dashboard/Prescriptions/Prescriptions';
import Dashboard from '../Dashboard/Dashboard/Dashboard';
import Home from '../Home/Home/Home';
import Login from '../Login/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import NotFound from '../NotFound/NotFound';

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
            <PrivateRoute path="/dashboard/dashboard">
                <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/appointments">
                <Appointments></Appointments>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/patients">
                <Patients></Patients>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/prescriptions">
                <Prescriptions></Prescriptions>
            </PrivateRoute>
			<Route path="*">
				<NotFound></NotFound>
			</Route>
		</Switch>
	);
};

export default Routes;
