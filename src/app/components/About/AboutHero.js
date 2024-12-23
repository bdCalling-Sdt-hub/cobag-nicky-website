
import React from 'react';
import { FaArrowDown } from 'react-icons/fa6';

const AboutHero = () => {
    return (
        <div>
            <div className='bg-[url("/Images/about/about_banner.png")] md:min-h-[90vh] min-h-[80vh] w-full bg-cover bg-center '>
                <div className='md:min-h-[90vh] min-h-[80vh] w-full bg-[#000000b0] flex items-center'>
                    <div className='text-white w-[90%] mx-auto py-5'>
                        <h2 className='md:text-6xl text-4xl leading-[1.3]'>Co<span className='font-semibold'>B</span>ag <br className='md:block hidden' /> When Your <span className='font-semibold'>Luggage</span> Travels <br className='md:block hidden' /> for You... and for Others.</h2>
                        <p className='md:my-10 my-5 md:text-2xl text-xl md:w-[60%] w-full'>CoBag was born from a moment of inspiration during a trip that revealed the hidden potential of unused luggage space. What started as a simple frustration became a revolutionary way to connect people across the globe.</p>
                        <button className='bg-gradient-to-r from-[#98DED9] to-[#C7FFD8] py-3 px-8 rounded-xl text-primary font-semibold flex items-center justify-center gap-2'><FaArrowDown /> Amazing Story</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutHero;
