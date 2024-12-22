import React from 'react';

const DoseItWork = () => {
    return (
        <div className='bg-[#EEEFF8] py-20 '>
            <h2 className='text-center md:text-5xl text-3xl text-primary font-semibold'>How does it work?</h2>

            <div className='mt-10 md:w-[70%] w-[90%] mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                <div className='bg-white relative p-10 flex flex-col items-center rounded-xl text-center'>
                    <img className='' src="/Images/Landingpage/Home_work_1.png" alt="" />
                    <h3 className='my-5 text-xl font-semibold text-primary'>Post or search for an ad</h3>
                    <p>Publish your trip or find a traveler that meets your needs.</p>
                    <span className='absolute -top-2 -left-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center'>1</span>
                </div>
                <div className='bg-white relative p-10 flex flex-col items-center rounded-xl text-center'>
                    <img className='' src="/Images/Landingpage/Home_work_2.png" alt="" />
                    <h3 className='my-5 text-xl font-semibold text-primary'>Chat via our messaging</h3>
                    <p>Validate all details via our integrated secure messaging.</p>
                    <span className='absolute -top-2 -left-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center'>2</span>
                </div>
                <div className='bg-white relative p-10 flex flex-col items-center rounded-xl text-center'>
                    <img className='' src="/Images/Landingpage/Home_work_3.png" alt="" />
                    <h3 className='my-5 text-xl font-semibold text-primary'>Confirm delivery</h3>
                    <p>Use the secure code to complete the transaction securely.</p>
                    <span className='absolute -top-2 -left-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center'>3</span>
                </div>
            </div>

        </div>
    );
}

export default DoseItWork;
