import React from 'react';
import './Doctor.css';
import CallIcon from '@material-ui/icons/Call';

const Doctor = ({doctor}) => {

    const callIcons = {
        color: 'gray',
        fontSize: '15px',
        transform: 'translateY(-6px)',
        marginRight: '5px'
    }

	return (
		<div className="col-md-4 doctor-column">
			<img src={doctor.img} alt="" className="w-75"/>
			<div className="mt-3">
				<h5 style={{ color: '#3A4256' }}>{doctor.name}</h5>
				<p>{doctor.about}</p>
				<div className="d-flex align-items-center justify-content-center">
					<CallIcon style={callIcons} />
					<p className="text-secondary">{doctor.phone}</p>
				</div>
			</div>
		</div>				
	);
};

export default Doctor;
