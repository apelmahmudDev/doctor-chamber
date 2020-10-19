import React, { useState } from 'react';
import './Appointment.css';
import Calendar from 'react-calendar';

const Appointments = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className="container">
            <h3 className="mb-5 mt-3">Appointments</h3>
			<div className="row">
				<div className="col-md-6">
					<div className="appointment-calender">
                    <Calendar onChange={onChange} value={value} />
                    </div>
				</div>
				<div className="col-md-6">
					<div className="appointment-table">
                        <div className="appointment-table-top">
                            <h5>Appointments</h5>
                            <p><strong>{value.toDateString()}</strong></p>
                        </div>
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Shedule</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Labiba Rohoman</td>
                                    <td>7:00 PM</td>
                                    <td><button className="btn btn-danger">Not visited</button></td>
                                </tr>
                                <tr>
                                    <td>Labiba Rohoman</td>
                                    <td>7:00 PM</td>
                                    <td><button className="btn btn-danger">Not visited</button></td>
                                </tr>
                                <tr>
                                    <td>Labiba Rohoman</td>
                                    <td>7:00 PM</td>
                                    <td><button className="btn btn-danger">Not visited</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
				</div>
			</div>
		</div>
    );
};

export default Appointments;