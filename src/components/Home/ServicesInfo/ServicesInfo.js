import React from 'react';

const ServicesInfo = ({ info }) => {
    return (
        <div className="col-md-4">
            <div>
                <img src={info.img} alt=""/>
            </div>
            <div className="mt-4">
                <h5 className="mb-4" style={{color: '#3A4256'}}>{info.title}</h5>
                <p className="text-secondary">{info.description}</p>
            </div>
        </div>
    );
};

export default ServicesInfo;