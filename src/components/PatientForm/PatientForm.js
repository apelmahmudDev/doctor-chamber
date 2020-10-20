import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import './PatientForm.css';
import groupImage from '../../images/group.png';
import { useParams } from 'react-router-dom';
import { UserContext } from '../UserProvider/UserProvider';

const PatientForm = () => {
    const [value, onChange] = useContext(UserContext);
    const [selectedAppointment, SetSelectedAppointment] = useState({});
    const [succes, setSucces] = useState(false);

    let { patientKey } = useParams();

    // READ APPOINTMENT BY DAYNAMIC KEY
    useEffect(() => {
        fetch(`http://localhost:8080/appointment/${patientKey}`)
        .then(res => res.json())
        .then(data => {
            SetSelectedAppointment(data)
        })
    },[patientKey])

    const { register, handleSubmit, errors  } = useForm();
    const onSubmit = data => {
        //INSERT PATIENT INFORMAITON AT THE DATABASE
        fetch('http://localhost:8080/patient',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(patient => {
            if(patient){
                setSucces(true);
            }
        })
    };

    return (
        <div className="container">
          <div className="row d-flex align-items-center" style={{height:'100vh'}}>
            <div className="col-md-6">
                <form onSubmit={handleSubmit(onSubmit)} className="patient-form">
                <input name="time" defaultValue={selectedAppointment.time} ref={register} className="form-control" readOnly="readonly" placeholder="Available Time"/>

                <input name="appName" defaultValue={selectedAppointment.name} ref={register} className="form-control" readOnly="readonly" placeholder="Available Time" style={{display:'none'}}/>

                <input name="name" ref={register({ required: true })} placeholder="Your Name" className="form-control"/>
                {errors.name && <span>Name is required</span>}

                <input name="number" ref={register({ required: true })} placeholder="Your Number" className="form-control"/>
                {errors.number && <span>Number is required</span>}

                <input name="date" defaultValue={value && value.toDateString()} ref={register({ required: true })} className="form-control" readOnly="readonly" placeholder="Selected Date"/>
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
                {succes && <p className="text-right text-success">Your information has been submitted!</p>}
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