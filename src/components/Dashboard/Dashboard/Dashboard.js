import React, { useEffect, useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import Sidebar from '../Sidebar/Sidebar';
import './Dashobard.css';

const Dashboard = () => {
	const [appointments, setAppointments] = useState([]);
	const dashboardInfo = [
		{ id: 1, status: 'Pending Appointments', number: '10', bg: 'primary' },
		{ id: 2, status: "Today's Appointments", number: '19', bg: 'success' },
		{ id: 3, status: 'Total Appointments', number: '34', bg: 'danger' },
		{ id: 4, status: 'Total  Patients', number: '76', bg: 'warning' },
	];
	useEffect(() => {
		fetch('https://peaceful-wave-68888.herokuapp.com/allPatients')
			.then((res) => res.json())
			.then((data) => setAppointments(data));
	}, []);

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-2 brand-bg">
					<Sidebar></Sidebar>
				</div>
				<div className="col-md-10 mb-5">
					<div className="container mt-4">
						<h3>Dashboard</h3>
						<div className="row mt-5">
							{dashboardInfo.map((info) => (
								<div className="col-md-3 info-wrapper" key={info.id}>
									<div
										className={`d-flex align-items-center text-light p-3 rounded  bg-${info.bg}`}
									>
										<h2 className="mr-3">{info.number}</h2>
										<p>{info.status}</p>
									</div>
								</div>
							))}
						</div>
						<div className="row mt-5">
							<h5 className="text-brand ml-2">Recent Appointments</h5>
							{appointments.length ? <div className="table-responsive">
								<table className="table table-borderless">
									<thead>
										<tr className="text-brand">
											<th scope="col">Sr. No</th>
											<th scope="col">Date</th>
											<th scope="col">Time</th>
											<th scope="col">Name</th>
											<th scope="col">Contact</th>
											<th scope="col">Prescription</th>
											<th scope="col">Action</th>
										</tr>
									</thead>
									{appointments.map((patient, index) => (
										<tbody key={index}>
											<tr>
												<th scope="row">{index + 1}</th>
												<td>{patient.date}</td>
												<td>{patient.time}</td>
												<td>{patient.name}</td>
												<td>{patient.number}</td>
												<td>
													<span className="brand-bg p-2 rounded text-light">
														View
													</span>
												</td>
												<td>
													<select className="form-control bg-primary text-light">
														<option>Pending</option>
														<option>Approved</option>
													</select>
												</td>
											</tr>
										</tbody>
									))}
								</table>
							</div> : <Spinner></Spinner>}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
