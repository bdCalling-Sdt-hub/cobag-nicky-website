import React from 'react';
import Hero from '../components/Home/Hero';
import AboutUs from '../components/Home/AboutUs';
import DoseItWork from '../components/Home/DoseItWork';
import Examples from '../components/Home/Examples';
import DetailsInfo from '../components/Home/DetailsInfo';
import SiteDetails from '../components/Home/SiteDetails';

const Page = () => {
    return (
        <div className=''>
            <Hero />
            <SiteDetails />
            <AboutUs />
            <DoseItWork />
            <Examples />
            <DetailsInfo />

        </div>
    );
} 

export default Page;
