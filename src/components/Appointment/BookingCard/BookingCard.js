import React, { useState } from 'react';
import './BookingCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({ appointment, date }) => {

    const [modalIsOpen, setIsOpen] = useState(false);
	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
    }
    
    return (
        <div className="col-md-4 mb-4">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{appointment.name}</h5>
                    <h6>{appointment.time}</h6>
                    <p>{appointment.space}</p>
                    <button onClick={openModal} className="btn btn-brand">Book Appointment</button>
                    <AppointmentForm 
                        modalIsOpen={modalIsOpen} 
                        closeModal={closeModal}
                        appointment={appointment}
                        date={date}
                    ></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;