import React from 'react';

const Testimonial = ({ testimonial }) => {
    return (
        <div className="card">
            <div className="card-body">
                <p className="card-text text-secondary">{testimonial.content}</p>
            </div>
            <div className="card-footer d-flex align-items-center">
                <img className="mx-3" src={testimonial.img} alt="" width="60"/>
                <div>
                    <h6>{testimonial.name}</h6>
                    <p>{testimonial.from}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;