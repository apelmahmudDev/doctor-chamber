import React, { useEffect, useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import Sidebar from '../Sidebar/Sidebar';

const Patients = () => {
	const [appointments, setAppointments] = useState([]);
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
				<div className="col-md-10">
					<div className="container">
						<div className="row mt-5 ml-5">
							<h5 className="text-brand ml-2">All Patients</h5>
							{appointments.length ? <div className="table-responsive">
								<table className="table table-borderless">
									<thead>
										<tr className="text-brand">
											<th scope="col">Sr. No</th>
											<th scope="col">Name</th>
											<th scope="col">Gender</th>
											<th scope="col">Age</th>
											<th scope="col">Weight</th>
											<th scope="col">Contact</th>
											<th scope="col">Address</th>
										</tr>
									</thead>
									{appointments.map((patient, index) => (
										<tbody key={index}>
											<tr>
												<th scope="row">{index + 1}</th>
												<td>{patient.name}</td>
												<td>{patient.gender}</td>
												<td>{patient.age}</td>
												<td>{patient.weight}</td>
												<td>{patient.number}</td>
												<td>Gobindagonj, Gaibandha</td>
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

export default Patients;
