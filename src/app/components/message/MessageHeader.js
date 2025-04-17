import baseUrl from '@/app/redux/api/baseUrl';
import React from 'react';

const MessageHeader = ({ receiverDetails }) => {
    return (
        <div>
            <div className="flex gap-2 p-5 items-center border-b ">
                <div className="relative inline-flex">
                    <div className="w-10 h-10 rounded-full">
                        {
                            receiverDetails && <img className='w-10 h-10 z-[999999] rounded-full' src={`${receiverDetails?.profileImage ? baseUrl + receiverDetails?.profileImage : 'https://res.cloudinary.com/nerob/image/upload/v1736698546/ForBdcolling/uuovt73ylqcnaizimunk.png'}`} alt="" />
                        }
                    </div>
                    <div className="w-10 h-10 z-[1] bg-blue-300 rounded-full duration-500 absolute top-0 left-0 animate-ping animate-delay-500"></div>
                    {/* <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div> */}
                </div>
            </div>
        </div>
    );
}

export default MessageHeader;
