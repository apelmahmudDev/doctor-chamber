import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <div className="row d-flex align-items-center" style={{height:'100vh'}}>
                    <div className="col-md-6">
                        <h1>Your New Smile Here</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda unde repellat, modi in id suscipit corporis fugiat excepturi vero tempora incidunt amet odio eius, ipsam ea veritatis quos ab.</p>
                        
                        <Link to="/bookAppointment">
                            <button className="btn btn-primary text-uppercase">Get appointment</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;