import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main>
            <div className="row d-flex align-items-center" style={{height:'600px'}}>
                <div className="col-md-4 offset-1">
                    <h2 style={{color:'#3A4256'}}>Your New Smile <br/> Start Here</h2>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur blanditiis rem quasi incidunt ullam debitis temporibus, cupiditate laudantium exercitationem quaerat magnam ex possimus officiis voluptatem rerum architecto expedita? Consequatur, laborum.</p>
                    <button className="btn btn-primary text-uppercase">Get Appointment</button>
                </div>
                <div className="col-md-6">
                    <img src={chair} alt="" className="img-fluid"/>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;