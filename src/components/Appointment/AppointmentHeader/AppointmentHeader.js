import React from 'react';
import './AppointmentHeader.css';
import chair from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
    return (
        <main className="appointment-header">
            <div className="row d-flex align-items-center" style={{height:'600px'}}>
                <div className="col-md-4 offset-1 mb-5">
                    <h2 className="mb-4" style={{color:'#3A4256'}}>Appointment</h2>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-6">
                    <img src={chair} alt="" className="img-fluid"/>
                </div>
            </div>
        </main>
    );
};

export default AppointmentHeader;