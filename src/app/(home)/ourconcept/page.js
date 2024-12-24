import Community from '@/app/components/OurConcept/Community';
import HeroConcept from '@/app/components/OurConcept/HeroConcept';
import YouraBuyer from '@/app/components/OurConcept/YouraBuyer';
import YourTravial from '@/app/components/OurConcept/YourTravial';
import React from 'react';

const Page = () => {
    return (
        <div>
            <HeroConcept />
            <YourTravial />
            <YouraBuyer />
            <Community />
        </div>
    );
}

export default Page;
