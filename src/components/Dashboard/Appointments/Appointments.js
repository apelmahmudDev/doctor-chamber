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
		fetch('https://peaceful-wave-68888.herokuapp.com/appointmentByDate', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ date: selectedDate }),
		})
			.then((res) => res.json())
			.then((data) => setAppointments(data));
	}, [selectedDate]);

	return (
		<section>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-2 brand-bg">
						<Sidebar></Sidebar>
					</div>
					<div className="col-md-10">
						<div className="container">
							<div className="row">
								<div className="col-md-6">
									<h3 className="my-5">Appointments</h3>
									<Calendar onChange={handleDateChange} value={new Date()} />
								</div>
								<div className="col-md-6 bg-white my-5">
									<div className="mb-5 d-flex align-items-center justify-content-between">
										<h5 className="text-brand">Appointment {appointments.length}</h5>
										<p className="text-brand">{selectedDate.toLocaleDateString()}</p>
									</div>
									{appointments.length > 0 ? (
										<AppointmentByDate
											appointments={appointments}
										></AppointmentByDate>
									) : (
										<h4 className="my-5 text-center text-brand">No appointments</h4>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Appointments;
