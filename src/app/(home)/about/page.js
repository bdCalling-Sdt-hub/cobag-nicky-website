'use client';
// import AboutHero from '@/app/components/About/AboutHero';
// import AboutStory from '@/app/components/About/AboutStory';
import React, { useEffect } from 'react';
import AOS from 'aos';
import AboutHero from '../../components/About/AboutHero';
import AboutStory from '../../components/About/AboutStory';

const Page = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Animations trigger only once
        });
    },[])
    return (
        <div>

            <AboutHero></AboutHero>
            <AboutStory></AboutStory>
            
        </div>
    );
}

export default Page;
