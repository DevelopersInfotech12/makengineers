import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HomeSectionOne from '../Components/HomeSectionOne';
import HomeSectionTwo from '../Components/HomeSectionTwo';
import HomeSectionThree from '../Components/HomeSectionThree';
import HomeSectionFour from '../Components/HomeSectionFour';
import HomeSectionFive from '../Components/HomeSectionFive';
import HomeSectionSix from '../Components/HomeSectionSix';
import Banner from '../Components/Banner';

const HomeScreen = () => {
    return (
        <div>
            <Navbar />
            <div className="mt-16">
                <Banner
                    title="METALIZING EQUIPMENT & SOLUTIONS"
                    subtitle="Advanced metalizing systems and expert services for stronger, more efficient industries."
                    height="520px"
                     backgroundImage="/images/img14.jpg" 
                />
            </div>


            <HomeSectionOne />
            <HomeSectionTwo />
            <HomeSectionThree />
            <HomeSectionFour />
            <HomeSectionFive />
            <HomeSectionSix />
            <Footer />
        </div>
    );
};

export default HomeScreen;