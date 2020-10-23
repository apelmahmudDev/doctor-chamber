import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-container">
            <div className="container">
                <div className="text-center py-5 contact-header">
                    <h5 className="text-uppercase" style={{color: '#5FC7C7'}}>Contact Us</h5>
                    <h1 className="text-white">Always Connect With Use</h1>
                </div>
                <div className="row d-flex justify-content-center align-items-center" style={{height:'350px'}}>
                    <div className="col-md-10">
                        <form className="text-center">
                            <input type="emial" name="email" placeholder="Email Address*" required className="form-control"/>
                            <input type="text" name="subject" placeholder="Subject*" required className="form-control"/>
                            <textarea rows="5" name="text" placeholder="Your Message*" required className="form-control"/>
                            <input className="btn text-uppercase" type="submit"/>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;