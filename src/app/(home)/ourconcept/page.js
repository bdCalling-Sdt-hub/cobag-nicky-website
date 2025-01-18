'use client';
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
import HeroConcept from '@/app/components/OurConcept/HeroConcept';
import YouraBuyer from '@/app/components/OurConcept/YouraBuyer';
import YourTravial from '@/app/components/OurConcept/YourTravial';

const Page = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Animations trigger only once
        });
    }, []);

    return (
        <div>
            <HeroConcept />
            <div>
                <YourTravial />
                <YouraBuyer />
            </div>
            {/* Uncomment the Community component if needed */}
            {/* <Community /> */}
        </div>
    );
}

export default Page;
