// "use client";
// import { useTranslation } from "react-i18next";
//============= 4 stape need for use translation  =============




import React from 'react';
import Hero from '../components/Home/Hero';
import AboutUs from '../components/Home/AboutUs';
import DoseItWork from '../components/Home/DoseItWork';
import Examples from '../components/Home/Examples';
import DetailsInfo from '../components/Home/DetailsInfo';
import SiteDetails from '../components/Home/SiteDetails';



const Page = () => {

    // const { t } = useTranslation()


    return (
        <div className=''>
            {/* {t("hello")} */}

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
