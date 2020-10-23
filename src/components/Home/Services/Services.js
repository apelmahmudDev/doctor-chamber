import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import teeth from '../../../images/teeth.png';
import ServicesInfo from '../ServicesInfo/ServicesInfo';

const Services = () => {
    const services = [
        {
            title: 'Fluoride Treatement',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eligendi dolor unde ea amet. Aliquam Sint, exercitationem tenetur. Qui at delectus rem adipisci .',
            img: fluoride,
        },
        {
            title: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eligendi dolor unde ea amet. Aliquam Sint, exercitationem tenetur. Qui at delectus rem adipisci .',
            img: cavity,
        },
        {
            title: 'Teath Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eligendi dolor unde ea amet. Aliquam Sint, exercitationem tenetur. Qui at delectus rem adipisci .',
            img: teeth,
        }
    ]
    return (
        <section className="text-center mt-5">
            <h5 className="text-uppercase text-secondary">Our Services</h5>
            <h2 className="mb-5 pb-5" style={{color: '#3A4256'}}>Services We Provide</h2>
            <div className="d-flex justify-content-center">
                <div className="row w-75">
                    {
                    services.map(info => <ServicesInfo info={info}></ServicesInfo>)  
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;