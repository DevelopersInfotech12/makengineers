import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ProductComp from '../Components/ProductComp';
import Banner from '../Components/Banner';

const ProductScreen = () => {
    return (
        <div>
            <Navbar />
            <Banner
                title="Our Product"
                subtitle="Advanced metalizing systems and expert services for stronger, more efficient industries."
                height="550px"
                backgroundImage="/images/img9.jpg"   // <-- Add this
            />

            <ProductComp />
            <Footer />
        </div>
    );
};

export default ProductScreen;
