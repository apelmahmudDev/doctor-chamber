import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import './PatientForm.css';
import groupImage from '../../images/group.png';
import { useParams } from 'react-router-dom';
import { UserContext } from '../UserProvider/UserProvider';

const PatientForm = () => {
    const [date, setDate] = useContext(UserContext);
    const [selectedAppointment, SetSelectedAppointment] = useState({});

    let { patientKey } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/appointment/${patientKey}`)
        .then(res => res.json())
        .then(data => {
            SetSelectedAppointment(data)
        })
    },[])

    const { register, handleSubmit, errors  } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="container">
          <div className="row d-flex align-items-center" style={{height:'100vh'}}>
            <div className="col-md-6">
                <form onSubmit={handleSubmit(onSubmit)} className="patient-form">
                    <input name="time" defaultValue={selectedAppointment.time} ref={register} className="form-control" readOnly="readonly" placeholder="Available Time"/>

                    <input name="name" ref={register({ required: true })} placeholder="Your Name" className="form-control"/>
                    {errors.name && <span>Name is required</span>}

                    <input name="number" ref={register({ required: true })} placeholder="Your Number" className="form-control"/>
                    {errors.number && <span>Number is required</span>}

                    <input name="date" defaultValue={date && date.toDateString()} ref={register({ required: true })} className="form-control" readOnly="readonly" placeholder="Selected Date"/>
                    {errors.date && <span>Date is required</span>}

                    <div className="d-flex">
                        <div className="mr-3">
                            <label htmlFor="gender">Gender</label>
                            <select name="gender" id="gender" ref={register({ required: true })} className="form-control">
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select>
                        </div>
                        <div className="mr-3">
                            <label htmlFor="age">Age</label>
                            <input name="age" id="age" type="number" ref={register({ required: true })}  className="form-control"/>
                            {errors.age && <span>Age is required</span>}
                            
                        </div>
                        <div>
                            <label htmlFor="weight">Weight</label>
                            <input name="weight" id="weight" type="number" ref={register({ required: true })}  className="form-control"/>
                            {errors.weight && <span>Weight is required</span>}
                        </div>
                    </div>
                    <br/>
                    <input className="btn btn-primary" type="submit" />
                </form>
            </div>
            <div className="col-md-6">
                <img src={groupImage} alt="" className="img-fluid"/>
            </div>
        </div>
        </div>
    );
};

export default PatientForm;