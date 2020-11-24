import React from 'react';

const AppointmentByDate = ({appointments}) => {
    return (
        <div>
            {
                appointments.map(appointment => <li>{appointment.name}</li>)
            }
        </div>
    );
};

export default AppointmentByDate;