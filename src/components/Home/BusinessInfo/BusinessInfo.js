import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';

const BusinessInfo = () => {
    const businessInfo = [
        {
            title: 'Opening Hours',
            description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
            icon: AccessTimeIcon,
            background: 'secondary'
        },
        {
            title: 'Visit our location',
            description: 'Brookly, NY 10036, United States',
            icon: LocationOnIcon,
            background: 'dark'
        },
        {
            title: 'Contact us now',
            description: '+00012345 99',
            icon: CallIcon,
            background: 'secondary'
        }
    ];
    return (
        <section className="d-flex justify-content-center">
           <div className="row">
                {
                    businessInfo.map(info => <InfoCard info={info}></InfoCard>)
                }
           </div>
        </section>
    );
};

export default BusinessInfo;