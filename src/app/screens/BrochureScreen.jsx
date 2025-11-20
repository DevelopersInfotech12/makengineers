import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import BrochureComp from '../Components/BrochureComp';
import Banner from '../Components/Banner';

const BrochureScreen = () => {
    return (
        <div>
            <Navbar />
            <Banner title="Our Brochure" subtitle=" Advanced metalizing systems and expert services for stronger, more efficient industries." height="550px"  backgroundImage="/images/img9.jpg" />
            <BrochureComp />
            <Footer />
        </div>
    );
};

export default BrochureScreen;