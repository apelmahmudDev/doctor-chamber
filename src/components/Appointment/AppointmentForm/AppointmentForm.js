import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};
Modal.setAppElement('#root');

const AppointmentForm = ({ modalIsOpen, closeModal, appointment, date }) => {
	
	const { register, handleSubmit, errors  } = useForm();
    const onSubmit = data => {
		const newPatient = {
			appointmentName: appointment.name,
			name: data.name,
			gender: data.gender,
			age: data.age,
			weight: data.weight,
			number: data.number,
			time: data.time,
			date: date
		};
		//INSERT PATIENT INFORMAITON AT THE DATABASE
        fetch('http://localhost:8080/patient',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newPatient)
        })
        .then(res => res.json())
        .then(patient => {
            if(patient){
				console.log('Appointment information has been successfully created');
				closeModal();
            }
        })
    };

	return <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 className="text-brand text-center">{appointment.name}</h2>
		  <p className="text-center text-brand">ON {date.toDateString()}</p>

			<form className="p-5" onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group">
					<input name="time" defaultValue={appointment.time} ref={register} className="form-control" readOnly="readonly"/>
				</div>

				<div className="form-group">
					<input name="name" ref={register({ required: true })} placeholder="Your Name" className="form-control"/>
					{errors.name && <span>Name is required</span>}
				</div>

				<div className="form-group">
					<input name="number" ref={register({ required: true })} placeholder="Your Number" className="form-control"/>
					{errors.number && <span>Number is required</span>}
				</div>

				<div className="form-group row">
					<div className="col-4">
						<label htmlFor="gender">Gender</label>
						<select name="gender" id="gender" ref={register({ required: true })} className="form-control">
							<option value="female">female</option>
							<option value="male">male</option>
							<option value="other">other</option>
						</select>
					</div>
					<div className="col-4">
						<label htmlFor="age">Age</label>
						<input name="age" id="age" type="number" ref={register({ required: true })} placeholder="age" className="form-control"/>
						{errors.age && <span>Age is required</span>}
					</div>
					<div className="col-4">
						<label htmlFor="weight">Weight</label>
						<input name="weight" id="weight" type="number" ref={register({ required: true })} placeholder="weight" className="form-control"/>
						{errors.weight && <span>Weight is required</span>}
					</div>
				</div>

				<div className="form-group text-right">
					<input className="btn btn-brand" type="submit" value="Send"/>
				</div>
			</form>
        </Modal>
    </div>;
};

export default AppointmentForm;
