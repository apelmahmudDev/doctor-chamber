import React, { useEffect, useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Appointments = () => {
	const [appointments, setAppointments] = useState([]);
	const [selectedDate, setSelectedDate] = useState(new Date());

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};
	useEffect(() => {
		fetch('http://localhost:8080/appointmentByDate', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ date: selectedDate }),
		})
			.then((res) => res.json())
			.then((data) => setAppointments(data));
	}, [selectedDate]);

	return (
		<section>
			<div className="container-fluid row">
				<div className="col-md-2 brand-bg">
					<Sidebar></Sidebar>
				</div>
				<div className="col-md-5">
					<h3>Appointments</h3>
					<Calendar onChange={handleDateChange} value={new Date()} />
				</div>
				<div className="col-md-5 bg-white">
					<div className="d-flex align-items-center justify-content-between">
						<h5 className="text-brand">Appointment {appointments.length}</h5>
						<p className="text-brand">{selectedDate.toLocaleDateString()}</p>
					</div>
					{appointments.length > 0 ? (
						<AppointmentByDate appointments={appointments}></AppointmentByDate>
					) : (
						<h4 className="mt-5 text-center text-brand">No appointments</h4>
					)}
				</div>
			</div>
		</section>
	);
};

export default Appointments;
