import React, { useEffect, useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {

    const containerStyle = {
        backgroundColor: '#F4FDFB',
        height: '100%'
    }
    const [appointments, setAppointments] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date)  
    }
    useEffect(() => {
        fetch('http://localhost:8080/appointmentByDate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({date: selectedDate})
        })
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, [selectedDate])

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5">
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
                </div>
                <div className="col-md-5">
                    <h1>Appointment {appointments.length}</h1>
                    <AppointmentByDate appointments={appointments}></AppointmentByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;