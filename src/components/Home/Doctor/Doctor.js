import React from 'react';
import doctor from '../../../images/doctor-sm.png';
import CallIcon from '@material-ui/icons/Call';

const Doctor = () => {

    const callIcons = {
        color: 'gray',
        fontSize: '15px',
        transform: 'translateY(-6px)',
        marginRight: '5px'
    }

	return (
		<div className="col-md-4">
			<img src={doctor} alt="" className="img-fluid"/>
			<div className="mt-3">
				<h5 style={{ color: '#3A4256' }}>Dr. Caudi</h5>
				<div className="d-flex align-items-center justify-content-center">
					<CallIcon style={callIcons} />
					<p className="text-secondary">+88087534</p>
				</div>
			</div>
		</div>				
	);
};

export default Doctor;
