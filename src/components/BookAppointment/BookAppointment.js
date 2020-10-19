import React, { useContext, useState } from 'react';
import Calendar from 'react-calendar';  
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const BookAppointment = () => {

    const [selectedTime, setSelectedTime, selectedDate, setSelectedDate] = useContext(UserContext);
    
    const [value, onChange] = useState(new Date());
    setSelectedDate(value);

    const handleTime = (date) => {
        setSelectedTime(date)
    }
   
    return (
        <div>
            <div className="home">
                <div className="container">
                    <div className="row d-flex align-items-center" style={{height:'100vh'}}>
                    <div className="col-md-6">
                        <h1 className="mb-5">Appointment</h1>
                        <Calendar
                            onChange={onChange}
                            value={value}
                        />
                    </div>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <h1>Available Applications on {value.toDateString()}</h1>
            </div>   

            <div className="container">
                <div className="card-deck">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Teeth Cleaning</h5>
                        <p>10:30am to 10:30pm</p>
                        <Link to="/appointment-from">
                            <button onClick={() => handleTime('10:30am to 10:30pm')} className="btn btn-primary text-uppercase">Book Appointment</button>
                        </Link>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Teeth Cleaning</h5>
                        <p>10:30am to 10:30pm</p>
                        <button className="btn btn-primary text-uppercase">Book Appointment</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Teeth Cleaning</h5>
                        <p>10:30am to 10:30pm</p>
                        <button className="btn btn-primary text-uppercase">Book Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookAppointment;