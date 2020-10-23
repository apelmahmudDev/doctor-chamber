import React from 'react';
import './MakeAppointment.css';
import doctor from '../../../images/doctor.png';

const MakeAppointment = () => {
    return (
        <section className="make-appointment-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 doctor-image d-none d-md-block">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 py-5"> 
                        <h5 className="text-uppercase" style={{color: '#6ACECE'}}>Appointment</h5>
                        <h1 className="text-white">Make An Appointment <br/> Tody</h1>
                        <p className="text-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi voluptatum iste enim alias molestias, praesentium veniam est aliquid repellendus, autem eaque optio perspiciatis exercitationem aspernatur natus! Autem dolorum et sapiente!</p>
                        <button className="btn btn-primary">Learn more</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;