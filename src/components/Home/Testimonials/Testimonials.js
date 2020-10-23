import React from 'react';
import './Testimonials.css';
import person1 from '../../../images/person1.png';
import person2 from '../../../images/person2.png';
import person3 from '../../../images/person3.png';
import Testimonial from '../Testimonial/Testimonial';


const Testimonials = () => {
    const testimonials = [
        {   key: 1,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, adipisci error? Placeat harum facilis dolorem veniam. Veritatis quos exercitationem commodi architecto? Vel, quibusdam laboriosam totam, nisi eum rem dolor iste.!',
            name: 'Winson',
            from: 'California',
            img: person1,
        },
        {
            key: 2,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, adipisci error? Placeat harum facilis dolorem veniam. Veritatis quos exercitationem commodi architecto? Vel, quibusdam laboriosam totam, nisi eum rem dolor iste.!',
            name: 'Winson',
            from: 'California',
            img: person2,
        },
        {
            key: 3,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, adipisci error? Placeat harum facilis dolorem veniam. Veritatis quos exercitationem commodi architecto? Vel, quibusdam laboriosam totam, nisi eum rem dolor iste.!',
            name: 'Winson',
            from: 'California',
            img: person3,
        }
        
    ]
    return (
        <section className="testimonials-container my-5 py-5">
            <div className="container testimonials">
                <h5 className="text-uppercase" style={{color:'#6ACECE'}}>Testimonial</h5>
                <h1 style={{color:'#3A4256'}}>What's Our Patients <br/> Says</h1>
                <div className="d-flex justify-content-center mt-5">
                    <div className="card-deck">
                        {
                            testimonials.map(testimonial => <Testimonial 
                                testimonial={testimonial} 
                                key={testimonial.key}
                                ></Testimonial>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;