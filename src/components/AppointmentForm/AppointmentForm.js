import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import './AppointmentForm.css';
import groupImage from '../../images/group.png';
import { UserContext } from '../../App';

const AppointmentForm = () => {

    const [selectedTime, setSelectedTime, selectedDate, setSelectedDate] = useContext(UserContext);

    const { register, handleSubmit, errors  } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="container">
          <div className="row d-flex align-items-center" style={{height:'100vh'}}>
            <div className="col-md-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="time" defaultValue={selectedTime} ref={register} className="form-control" readOnly="readonly" placeholder="Available Time"/>

                    <input name="name" ref={register({ required: true })} placeholder="Your Name" className="form-control"/>
                    {errors.name && <span>Name is required</span>}

                    <input name="number" ref={register({ required: true })} placeholder="Your Number" className="form-control"/>
                    {errors.number && <span>Number is required</span>}

                    <input name="email" ref={register({ required: true })} placeholder="Your Email" className="form-control"/>
                    {errors.email && <span>Email is required</span>}

                    <input name="date" defaultValue={selectedDate?.toDateString()} ref={register({ required: true })} className="form-control" readOnly="readonly" placeholder="Selected Date"/>
                    {errors.date && <span>Date is required</span>}

                    <div className="d-flex">
                        <div className="mr-3">
                            <label htmlFor="gender">Gender</label>
                            <select name="gender" id="gender" ref={register} className="form-control">
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select>
                        </div>
                        <div className="mr-3">
                            <label htmlFor="age">Age</label>
                            <input name="age" id="age" type="number" ref={register}  className="form-control"/>
                        </div>
                        <div>
                            <label htmlFor="weight">Weight</label>
                            <input name="weight" id="weight" type="number" ref={register}  className="form-control"/>
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

export default AppointmentForm;