import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import Home from '../Home/Home';
import PatientForm from '../PatientForm/PatientForm';
import BookAppointments from '../BookAppointments/BookAppointments';

const Routes = () => {
    return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/booking" component={BookAppointments} />
                <Route path="/patient-form/patient/:patientKey" component={PatientForm} />
            </Switch>
    );
};

export default Routes;