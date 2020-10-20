import React, { useContext, useEffect, useState } from 'react';
import './BookAppointments.css';
import Calendar from 'react-calendar';  
import 'react-calendar/dist/Calendar.css';
import AppointmentCategory from '../AppointmentCategory/AppointmentCategory';
import { UserContext } from '../UserProvider/UserProvider';

const BookAppointments = () => {
    //DATE PICKER
    const [value, onChange] = useContext(UserContext);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/loadAppointments')
        .then(res => res.json())
        .then(data => {
            setAppointments(data);
        })
    },[])
    
    return (
        <div className="bookAppointment-container">
            <div className="container">
                <div className="row d-flex align-items-center" style={{height:'100vh'}}>
                    <div className="col-md-6">
                        <h1 className="mb-5">Appointment</h1>
                        <Calendar onChange={onChange}/>
                    </div>
                </div>
            </div>
            <div className="container">
            <h2 className="text-center">Available Applications on {value.toDateString()}</h2>
            <div className="card-deck">
                {
                    appointments.map(app => <AppointmentCategory
                    appointment={app}
                    key={app.key}
                    ></AppointmentCategory>)
                }
            </div>
            </div>
        </div>
    );
};

export default BookAppointments;