import React from 'react';
import { LuPlane } from 'react-icons/lu';

const YouraBuyer = () => {
    return (
        <div className=' flex  items-center justify-between'>
            <div data-aos="fade-up" data-aos-duration="500" className='md:block hidden'>
                <img className='max-w-[700px]' src="/Images/Ourconcept/image-2.png" alt="" />
            </div>
            <div data-aos="fade-up" data-aos-duration="800" className='md:py-20 md:px-48 px-5 py-10 md:max-w-[60%]'>
                <h2 className='flex items-center gap-2 md:text-5xl text-3xl font-semibold'><LuPlane /> Are you a buyer? </h2>
                <div>
                    <p className='my-5 leading-[1.8]'>Paul dreams of getting a pair of limited-edition sneakers, only available in Los Angeles for €200. Problem: he can’t cross the Atlantic to buy them. </p>

                    <p className='my-5 leading-[1.8]'>Meanwhile, Julie is in Los Angeles for a few days. She’ll soon return to Paris with 15 kg of available space in her suitcase. As a courier-traveler, she accepts Paul’s mission through CoBag. </p>

                    <p className='my-5 leading-[1.8]'>Paul makes a secure payment via the platform.  Julie buys the sneakers and transports them in her luggage.  Upon her return, she hands the shoes over to Paul. </p>

                </div>
                <div className='my-10'>
                    <h2 className='font-semibold'>How much does Julie earn? </h2>
                    <ul className='list-disc pl-8 '>
                        <li className='my-2'>€25 for the purchase service. </li>
                        <li className='my-2'>+€5 for express delivery if the timeframe is short.  </li>
                        <li className='my-2'>€7 per kilo transported in her suitcase (minimum €12).. </li>
                    </ul>
                </div>
                <div className='my-10'>
                    <h2 className='font-semibold'>💡 A win-win service. </h2>
                    <ul className='list-disc pl-8 '>
                        <li className='my-2'>Paul gets access to rare products from home, with complete confidence.</li>
                        <li className='my-2'>Julie optimizes her trip and monetizes her unused luggage space. A trip becomes a mission. A mission becomes an opportunity. Julie returns home with a full suitcase and a happy wallet.</li>     
                    </ul>
                </div>
                 
                <button className='bg-gradient-to-r from-[#161D6F] to-[#0B2F9F] py-3 px-10 text-white font-semibold rounded-md '>Learn more</button>
            </div>

        </div>
    );
}

export default YouraBuyer;
