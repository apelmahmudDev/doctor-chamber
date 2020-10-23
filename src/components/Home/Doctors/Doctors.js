import React from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    return (
        <section className="my-5 py-5">
			<div className="container text-center">
				<h5 className="my-5" style={{ color: '#6ACECE' }}>Our Doctors</h5>
				<div className="row">
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                    <Doctor></Doctor>
				</div>
			</div>
		</section>
    );
};

export default Doctors;