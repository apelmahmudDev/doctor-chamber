import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Spinner from '../../Shared/Spinner/Spinner';

const Prescriptions = () => {
	const [appointments, setAppointments] = useState([]);
	useEffect(() => {
		fetch('http://localhost:8080/allPatients')
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
					<div className="row mt-5 ml-5">
						<h5 className="text-brand ml-2">All Prescriptions</h5>
						{appointments.length ? <div className="table-responsive">
							<table className="table table-borderless">
								<thead>
									<tr className="text-brand">
										<th scope="col">Sr. No</th>
										<th scope="col">Name</th>
										<th scope="col">Date</th>
										<th scope="col">Contact</th>
										<th scope="col">Prescription</th>
									</tr>
								</thead>
								{appointments.map((patient, index) => (
									<tbody key={index}>
										<tr>
											<th scope="row">{index + 1}</th>
											<td>{patient.name}</td>
											<td>{patient.date}</td>
											<td>{patient.number}</td>
											<td>
												<span className="brand-bg rounded py-2 px-4 text-light">
													View
												</span>
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
	);
};

export default Prescriptions;
