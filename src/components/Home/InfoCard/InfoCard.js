import React from 'react';
import './InfoCard.css';

const InfoCard = ({ info }) => {
    return (
        <div className="col-md-4 text-white">
            <div className={`d-flex info-container info-${info.background}`}>
                <div>
                    {<info.icon style={{fontSize:'40px', marginRight:'10px'}}/>}
                </div>
                <div>
                    <h5>{info.title}</h5>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;