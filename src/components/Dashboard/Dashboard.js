import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="contianer">
            <h2 className="mt-3 ml-3">Dashboard</h2>
            <div className="row dashboard mt-4">
                <div className="bg-danger dashboard-cart">
                    <div className="col-md-4 dashboard-cart-item">
                        <h1 className="mr-3">09</h1>
                        <p>Pending Appointments</p>
                    </div>
                </div>
                <div className="bg-primary dashboard-cart">
                    <div className="col-md-4 dashboard-cart-item">
                        <h1 className="mr-3">19</h1>
                        <p>Today's Appointments</p>
                    </div>
                </div>
                <div className="bg-success dashboard-cart">
                    <div className="col-md-4 dashboard-cart-item">
                        <h1 className="mr-3">34</h1>
                        <p>Total Appointments</p>
                    </div>
                </div>
                <div className="bg-warning dashboard-cart">
                    <div className="col-md-4 dashboard-cart-item">
                        <h1 className="mr-3">78</h1>
                        <p>Total Patients</p>
                    </div>
                </div>
            </div>

            <div className="dashboard-table mt-5">
                <div className="dashboard-table-top">
                    <h5>Dashboard</h5>
                    <p><strong>date</strong></p>
                </div>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Sr.No</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Name</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Prescription</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>27-02-2020</td>
                            <td>7:00 PM</td>
                            <td>Apel Mahmud</td>
                            <td>+0173980888</td>
                            <td><button className="btn btn-danger">View</button></td>
                            <td>
                                <button className="btn btn-danger">Pending</button>
                                <button className="btn btn-success">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>27-02-2020</td>
                            <td>7:00 PM</td>
                            <td>Apel Mahmud</td>
                            <td>+0173980888</td>
                            <td><button className="btn btn-danger">View</button></td>
                            <td>
                                <button className="btn btn-danger">Pending</button>
                                <button className="btn btn-success">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>27-02-2020</td>
                            <td>7:00 PM</td>
                            <td>Apel Mahmud</td>
                            <td>+0173980888</td>
                            <td><button className="btn btn-danger">View</button></td>
                            <td>
                                <button className="btn btn-danger">Pending</button>
                                <button className="btn btn-success">Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;