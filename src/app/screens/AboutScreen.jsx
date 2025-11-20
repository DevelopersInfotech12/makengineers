import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import AboutSectionOne from '../Components/AboutSectionOne';
import AboutSectionTwo from '../Components/AboutSectionTwo';
import AboutSectionThree from '../Components/AboutSectionThree';
import Footer from '../Components/Footer';

const AboutScreen = () => {
    return (
        <div>
            <Navbar />
            <Banner title="About Us" subtitle=" Advanced metalizing systems and expert services for stronger, more efficient industries." height="550px"  backgroundImage="/images/img9.jpg" />
            <AboutSectionTwo />
            <AboutSectionOne />
            <AboutSectionThree/>
            <Footer/>
        </div>
    );
};

export default AboutScreen;