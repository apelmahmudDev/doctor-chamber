import React, { useEffect, useState } from 'react';
import BookingCard from '../BookingCard/BookingCard';
import './BookAppointments.css';

const BookAppointments = ({date}) => {
    
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/loadAppointments')
        .then(res => res.json())
        .then(data => {
            setAppointments(data);
        })
    },[])
    
    return (
        <section>
            <div className="container">
                <h2 className="text-center text-brand mb-5 available-text">Available Applications on {date.toDateString()}</h2>
                <div className="row">
                    {
                        appointments.map(app => <BookingCard
                        appointment={app}
                        key={app.key}
                        date={date}
                        ></BookingCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BookAppointments;