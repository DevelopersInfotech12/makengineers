import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import ContactComp from '../Components/ContactComp';

const ContactScreen = () => {
    return (
        <div>
      <Navbar/>
       <Banner title="Contact Us" subtitle=" Advanced metalizing systems and expert services for stronger, more efficient industries." height="550px"  backgroundImage="/images/img9.jpg" />
      <ContactComp/>
      <Footer/>
        </div>
    );
};

export default ContactScreen;