import React from 'react';

const HalfEmptyLuggage = () => {
    return (
        <div className='w-[90%] mx-auto py-20'>
            <div className='w-2/4 mx-auto text-center my-10'>
                <h2 className='md:text-4xl text-3xl font-semibold text-primary'>Are you leaving with half-empty luggage?</h2>
                <p className='mt-3 font-semibold text-[#737373]'>Don’t let those unused kilos go to waste! With Cobag, every available kilo becomes an opportunity to generate revenue. Make your trips profitable by offering them to shippers or buyers. Transform an ordinary flight into a lucrative trip.</p>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                <div className='bg-[url("/Images/Itravel/half-empty-laggage-1.png")] w-full h-[300px] bg-cover bg-center bg-[#f7f7fc]  rounded-lg overflow-hidden'>
                    <div className='flex items-end justify-start p-5 h-full w-full bg-[#00000096]'>
                        <div>
                            <p className='bg-[#fff] text-primary w-20 text-center py-2 px-6 rounded-full'>New</p>
                            <h2 className='text-2xl my-3 font-semibold text-white'>Resell your kilos</h2>
                            <p className='text-white'>Your luggage can earn you big: offer your unused kilos and earn on every flight..</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[url("/Images/Itravel/half-empty-laggage-2.png")] w-full h-[300px] bg-cover bg-center bg-[#f7f7fc]  rounded-lg overflow-hidden'>
                    <div className='flex items-end justify-start p-5 h-full w-full bg-[#00000096]'>
                        <div>
                            <p className='bg-[#fff] text-primary w-20 text-center py-2 px-6 rounded-full'>Mutual aid</p>
                            <h2 className='text-2xl my-3 font-semibold text-white'>Help a sender</h2>
                            <p className='text-white'>Allow someone to send their package quickly and confidently.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HalfEmptyLuggage;
