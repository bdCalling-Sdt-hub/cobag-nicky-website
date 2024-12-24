import React from 'react';

const Community = () => {
    return (
        <div className='bg-primary md:py-32 py-20 flex items-center justify-center text-white border-b-[1px] border-white'>
            <div className='text-center md:px-0 px-5'>
                <h2 className='md:text-5xl text-3xl font-semibold '>Join the CoBag community</h2>
                <h3 className='md:my-5 py-3 md:text-2xl text-xl'>Whether you are a traveler or a shipper, CoBag offers you a new way  <br /> to travel and send packages.</h3>
                <button className='bg-gradient-to-r from-[#98DED9] to-[#C7FFD8] py-3 px-16 text-primary font-semibold rounded-md'>Sign Up</button>
            </div>
        </div>
    );
}

export default Community;
