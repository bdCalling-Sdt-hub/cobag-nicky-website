import Link from 'next/link';
import React from 'react';


const YouraBuyer = () => {
    return (
        <div>
            <div className='md:w-3/4 md:px-0 px-5  mx-auto grid lg:grid-cols-2 gap-10 items-center md:my-20 my-10'>
                <div data-aos="fade-up" data-aos-duration="300" className='flex items-end justify-end'>
                    <img className='w-full' src="/Images/Ourconcept/ourconcept2.png" alt="" />
                </div>
                <div data-aos="fade-up" data-aos-duration="500" className='md:py-20 py-10 text-primary'>
                    <h2 className='gap-2 md:text-5xl text-3xl font-semibold'>Why Choose CoBag?</h2>
                    <div>
                        <ul className='my-5 list-disc ml-6'>
                            <li className='my-5 text-xl'>
                                <span className='font-semibold'> Secure: </span>User identities, trips, and parcel contents are verified. Payments are held until the mission is completed successfully.
                            </li>
                            <li className='my-5 text-xl'>
                                <span className='font-semibold'> Eco-Friendly:</span>  CoBag uses space on flights and trains that are already traveling, reducing unnecessary CO2 emissions.
                            </li>
                            <li className='my-5 text-xl'>
                                <span className='font-semibold'>Affordable: </span>  Save on expensive excess baggage fees and international shipping costs.
                            </li>
                            <li className='my-5 text-xl'>
                                <span className='font-semibold'>Flexible: </span>  Choose the service that suits your needs—whether you’re selling kilos, sending parcels, or making purchases abroad.
                            </li>
                        </ul>
                        <div>
                            <p className='text-xl mb-10'> <span className='font-semibold'>Join the CoBag Movement Today! <br /> </span>  Whether you’re a traveler, a sender, or a buyer, CoBag helps you make the most of every trip. Turn unused baggage space into opportunities and experience a smarter, greener way to travel.</p>
                        </div>
                        <Link href={'/signup'}>
                            <button className='bg-gradient-to-r from-[#98DED9] to-[#C7FFD8] py-3 px-16 text-primary font-semibold rounded-md w-full'>Sign Up Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default YouraBuyer;