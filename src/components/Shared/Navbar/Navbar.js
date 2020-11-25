import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({isAppointment}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-default">
            <NavLink className="navbar-brand" to="/"><strong>Doctor <span className="text-secondary">Chamber</span></strong></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                <NavLink className="nav-item nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                <NavLink className="nav-item nav-link" to="/about">About</NavLink>
                <NavLink className="nav-item nav-link" to="/services">Dental Services</NavLink>
                <NavLink className={`nav-item nav-link text-${isAppointment?'secondary':'light'}`} to="/dashboard">Reviews</NavLink>
                <NavLink className={`nav-item nav-link text-${isAppointment?'secondary':'light'}`} to="/blog">Blog</NavLink>
                <NavLink className={`nav-item nav-link text-${isAppointment?'secondary':'light'}`} to="/contact">Contact Us</NavLink>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;