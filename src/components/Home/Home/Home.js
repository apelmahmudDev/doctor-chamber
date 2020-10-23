import React from 'react';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeatherService from '../FeatherService/FeatherService';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Services></Services>
           <FeatherService></FeatherService>
           <MakeAppointment></MakeAppointment>
           <Testimonials></Testimonials>
           <Blogs></Blogs>
           <Doctors></Doctors>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;