import React from 'react';
import Doctor from '../Doctor/Doctor';
import caudi from '../../../images/caudi.png';   
import morsela from '../../../images/morsela.png';
import mahmud from '../../../images/mahmud.png';

const Doctors = () => {
    const doctors = [
        {id: 1, name: 'Dr Caudi', phone: '+88 0173980', about:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: caudi},
        {id: 2, name: 'Dr Morsela', phone: '+88 0188960', about:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: morsela},
        {id: 3, name: 'Dr Mahmud', phone: '+88 0179876', about:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: mahmud}
    ]
    return (
        <section className="my-5 py-5">
			<div className="container text-center">
				<h5 className="my-5" style={{ color: '#6ACECE' }}>Our Doctors</h5>
				<div className="row">
                    {
                        doctors.map(doctor => <Doctor doctor={doctor} key={doctor.id}></Doctor>)
                    }
				</div>
			</div>
		</section>
    );
};

export default Doctors;