import React from 'react';
import './Prescription.css';

const Prescription = () => {
    return (
        <div className="container">
            <h3>Prescription</h3>
            <div className="prescription-table mt-5">
                <div className="prescription-table-top">
                    <h5>prescription</h5>
                    <p><strong>date</strong></p>
                </div>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Sr.No</th>
                            <th scope="col">Date</th>
                            <th scope="col">Name</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Prescription</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>27-02-2020</td>
                            <td>Labiba Rohoman</td>
                            <td>+0173980888</td>
                            <td><button className="btn btn-danger">View</button></td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>27-02-2020</td>
                            <td>Labiba Rohoman</td>
                            <td>+0173980888</td>
                            <td><button className="btn btn-danger">View</button></td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>27-02-2020</td>
                            <td>Labiba Rohoman</td>
                            <td>+0173980888</td>
                            <td><button className="btn btn-danger">View</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Prescription;