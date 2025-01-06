import React from 'react';

const Advantages = () => {
    return (
        <div className='py-20 bg-[#fafaff]'>
            <div className='text-center my-10'>
                <h1 className='md:text-5xl text-3xl font-semibold text-primary mb-5'>The CoBag Sky advantages</h1>
                <p className='text-base font-semibold text-gray-500'>A premium experience to optimize your missions</p>
            </div>

            <div className='lg:w-[60%] w-[90%] mx-auto mt-20'>
                <div className='grid lg:grid-cols-2 items-center gap-20 my-20'>
                    <img className='w-full' src="/Images/commission/commission-image-1.png" alt="" />
                    <div className='flex items-start gap-5'>
                        <img src="/Images/commission/commission-con-1.png" alt="" />
                        <div>
                            <h2 className='md:text-3xl text-2xl font-semibold text-primary mb-5'>0% commissions</h2>
                            <p className='text-gray-400'>0% commission fee. An ideal solution to maximize your earnings</p>
                        </div>
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 items-center gap-20 my-20'>
                    <img className='w-full' src="/Images/commission/commission-image-2.png" alt="" />
                    <div className='flex items-start gap-5'>
                        <img src="/Images/commission/commission-con-2.png" alt="" />
                        <div>
                            <h2 className='md:text-3xl text-2xl font-semibold text-primary mb-5'>Sans engagement</h2>
                            <p className='text-gray-400'>Enjoy complete flexibility with the ability to cancel at any time. Stay in control of your subscription</p>
                        </div>
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 items-center gap-20 my-20'>
                    <img className='w-full' src="/Images/commission/commission-image-3.png" alt="" />
                    <div className='flex items-start gap-5'>
                        <img src="/Images/commission/commission-con-3.png" alt="" />
                        <div>
                            <h2 className='md:text-3xl text-2xl font-semibold text-primary mb-5'>Insurance Plus included</h2>
                            <p className='text-gray-400'>Enjoy complete flexibility with the ability to cancel at any time. Stay in control of your subscription</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Advantages;
