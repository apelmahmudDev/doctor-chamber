import React, { useEffect, useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import BookingCard from '../BookingCard/BookingCard';
import './BookAppointments.css';

const BookAppointments = ({date}) => {
    
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-wave-68888.herokuapp.com/loadAppointments')
        .then(res => res.json())
        .then(data => {
            setAppointments(data);
        })
    },[])
    
    return (
        <section>
            <div className="container">
                <h2 className="text-center text-brand mb-5 available-text">Available Applications on {date.toDateString()}</h2>
                {appointments.length ? <div className="row">
                    {
                        appointments.map(app => <BookingCard
                        appointment={app}
                        key={app.key}
                        date={date}
                        ></BookingCard>)
                    }
                </div> : <Spinner></Spinner>}
            </div>
        </section>
    );
};

export default BookAppointments;