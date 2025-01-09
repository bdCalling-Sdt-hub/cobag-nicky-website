import React from 'react';

const MessageHeader = ({userId}) => {
     console.log(userId);
    return (
        <div>
            <div className='flex items-center gap-5 p-5 border-b border-[#0000001a]'>
                <img className='w-14 h-14 rounded-full' src="/Images/about/user-profile-image.png" alt="" />
                <h2 className='text-2xl font-semibold'>Nerob {userId}</h2>
            </div>
        </div>
    );
}

export default MessageHeader;
