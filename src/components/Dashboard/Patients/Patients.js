import React from 'react';
import './Patients.css';

const Patients = () => {
    return (
        <div className="container">
            <h3>Patients</h3>
            <div className="patient-table mt-5">
                <div className="patient-table-top">
                    <h5>All Patients</h5>
                    <p><strong>Weak</strong></p>
                </div>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Sr.No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Age</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>Labiba Rohoman</td>
                            <td>Male</td>
                            <td>21</td>
                            <td>50Kg</td>
                            <td>+988665678</td>
                            <td>Gobindagonj, Gaibandah</td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>Labiba Rohoman</td>
                            <td>Male</td>
                            <td>21</td>
                            <td>50Kg</td>
                            <td>+988665678</td>
                            <td>Gobindagonj, Gaibandah</td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>Labiba Rohoman</td>
                            <td>Male</td>
                            <td>21</td>
                            <td>50Kg</td>
                            <td>+988665678</td>
                            <td>Gobindagonj, Gaibandah</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Patients;