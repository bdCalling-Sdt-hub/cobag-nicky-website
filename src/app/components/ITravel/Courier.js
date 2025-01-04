import React from 'react';

const Courier = () => {
    return (
        <div className='bg-[#f6f6fb]'>
            <div className='lg:w-[70%] w-[90%] mx-auto py-20'>
                <h2 className='md:text-4xl text-3xl font-semibold text-primary text-center'>What is it like to be a courier with Cobag?</h2>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 mt-10' >
                    <div className='bg-white p-10 rounded-xl flex flex-col justify-center items-center'>
                        <img src="/Images/Itravel/Courier-2.png" alt="" />
                        <h2 className='text-2xl font-normal my-5 text-primary text-center'>Double your winnings</h2>
                        <p className='text-ceneter'>As a courier, earn on two fronts: transport packages in your unused kilos and make purchases for €25 per mission. Transform your trips into multiple income opportunities.</p>
                    </div>
                    <div className='bg-white p-10 rounded-xl flex flex-col justify-center items-center'>
                        <img src="/Images/Itravel/Courier-3.png" alt="" />
                        <h2 className='text-2xl font-normal my-5 text-primary text-center'>A simple and direct mission</h2>
                        <p className='text-center'>Buy in the country where you are, carry your purchases in your luggage, and deliver them directly to your destination. A single user, a single exchange: simple and efficient.</p>
                    </div>
                    <div className='bg-white p-10 rounded-xl flex flex-col justify-center items-center'>
                        <img src="/Images/Itravel/Courier-1.png" alt="" />
                        <h2 className='text-2xl font-normal my-5 text-primary text-center'>Maximize your earnings with tax exemption</h2>
                        <p className='text-center'>As a courier, recover the VAT on purchases transported internationally. A simple and legal bonus that maximizes your income. With Cobag, each journey becomes even more profitable.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courier;
