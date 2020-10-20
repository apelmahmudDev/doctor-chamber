import React from 'react';
import { Link } from 'react-router-dom';

const AppointmentCategory = (props) => {
    const { name, space, time, key } = props.appointment;

    return (
        <div className="card">
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6>{time}</h6>
            <p>{space}</p>
            <Link to={`/patient-form/patient/${key}`}>
                <button className="btn btn-primary text-uppercase">Book Appointment</button>
            </Link>
            </div>
        </div>
    );
};

export default AppointmentCategory;