import React from 'react';


const YourTravial = () => {
    return (
        <div className='md:w-3/4 md:px-0 px-5 mx-auto grid lg:grid-cols-2 gap-10 items-center md:my-20 my-10'>
            <div data-aos="fade-up" data-aos-duration="300" className=' text-primary'>
                <h2 className='gap-2 md:text-5xl text-3xl font-semibold'>CoBag: Turn Extra Space Into Opportunities!</h2>
                <p className='my-10 text-xl'>CoBag is a revolutionary platform that connects travelers, senders, and buyers to maximize the use of unused baggage space. Whether you're traveling light, dealing with excess baggage, or need to transport something internationally, CoBag has you covered.</p>

                <div>
                    <h2 className='gap-2 md:text-5xl text-3xl font-semibold'>How It Works?</h2>
                    <div className='my-5'>
                        <p className='my-5 text-xl'><span className='font-semibold mr-5'>1.</span>
                            <span className='font-semibold'>For Travelers Selling Unused Kilos:</span> Got extra kilos in your luggage? List your trip on CoBag and offer your unused baggage space to people who need it. Transport excess baggage, parcels, or even international purchases. Earn money effortlessly and securely while you travel.
                        </p>
                        <p className='my-5 text-xl'><span className='font-semibold mr-5'>2.</span>
                            <span className='font-semibold'>For Those With Excess Baggage:</span>  Avoid costly airline fees by renting unused kilos from travelers already taking the same flight or train. Hand over your extra luggage securely and save money.
                        </p>
                        <p className='my-5 text-xl'><span className='font-semibold mr-5'>3.</span>
                            <span className='font-semibold'>For International Buyers: </span> Looking for a product that’s unavailable in your country? Connect with a traveler in the region who can purchase it for you and bring it back. Pay securely through the platform, and receive your item upon the traveler’s return.
                        </p>
                        <p className='my-5 text-xl'><span className='font-semibold mr-5'>4.</span>
                            <span className='font-semibold'>For Parcel Senders: </span>  Need to send a parcel quickly? CoBag connects you with a traveler heading to your desired destination. Arrange for delivery, either in person or via a secure locker at the airport.
                        </p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="500" className='flex items-end justify-end'>
                <img className='w-full' src="/Images/Ourconcept/ourconcept1.png" alt="" />
            </div>
        </div>
    );
}

export default YourTravial;
