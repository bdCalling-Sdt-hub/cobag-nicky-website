import React from 'react';

const MessageHeader = ({userId}) => {
    //  console.log(userId);
    return (
        <div>
            <div className='flex items-center lg:gap-5 gap-2 xl:ml-0  ml-12 p-5 border-b border-[#0000001a]'>
                <img className='lg:w-14 w-10 lg:h-14 h-10 rounded-full' src="/Images/about/user-profile-image.png" alt="" />
                <h2 className='lg:text-2xl font-semibold'>Nerob{userId}</h2>
            </div>
        </div>
    );
}

export default MessageHeader;
