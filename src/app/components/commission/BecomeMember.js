import React from 'react';
import { FaArrowRightLong, FaArrowTrendUp } from 'react-icons/fa6';

const BecomeMember = () => {
    return (
        <div className='my-20'>
            <div className='my-10'>
                <img className='w-1/4 mx-auto' src="/Images/commission/commission-hero-logo.png" alt="" />
            </div>
            <div className='lg:w-1/2 lg:mx-auto mx-5  border-2 border-primary p-10 rounded-2xl grid lg:grid-cols-2 gap-10'>
                <div>
                    <div className='text-primary flex items-center gap-5'>
                        <FaArrowTrendUp />
                        <h2><span className='text-3xl'>30€ </span>/ month saved by our members</h2>
                    </div>
                    <p className='my-3 text-gray-500'>Members save an average of €30 per month with CoBag Sky*</p>
                    <p className='my-3 text-gray-500'>*Average savings made per month, calculated on the basis of all missions carried out over a month, thanks to the €0 commission fees</p>
                </div>
                <div className='text-right flex flex-col items-end justify-center'>
                    <h2 className='text-xl text-primary'>Become a member for only €10 per month</h2>
                    <p className='my-3'>Your benefits are usable wherever CoBag Sky is present</p>
                    <button className='bg-primary py-3 px-10 text-white font-semibold rounded-lg'>Try now <FaArrowRightLong className='inline ml-2' /> </button>
                </div>
            </div>
        </div>
    );
}

export default BecomeMember;
