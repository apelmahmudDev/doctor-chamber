import React from 'react';

const AppointmentByDate = ({ appointments }) => {
	return (
		<>
			<table className="table table-borderless">
				<thead>
					<tr className="text-brand">
						<th scope="col">Name</th>
						<th scope="col">Shedule</th>
						<th scope="col">Actions</th>
					</tr>
				</thead>
				{appointments.map((appointment) => (
					<tbody key={appointment._id}>
						<tr>
							<td>{appointment.name}</td>
							<td>{appointment.time}</td>
							<td>
								<select className="form-control brand-bg text-light">
									<option className="text-dark">Not Visited</option>
									<option className="text-dark">Visited</option>
								</select>
							</td>
						</tr>
					</tbody>
				))}
			</table>
		</>
	);
};

export default AppointmentByDate;
