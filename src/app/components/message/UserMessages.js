import React from 'react';
import { Image } from 'antd';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import skeleton CSS
import baseUrl from '@/app/redux/api/baseUrl';

const UserMessages = ({ messages, user, receiverDetails }) => {
    return (
        <div>
            {/* Render message here */}
            <div className="h-[78vh] overflow-y-auto p-5 space-y-5">
                {messages?.map((message) => {
                    const isMyMessage = message?.senderId === user?._id;
                    const fileUrls = message?.content?.fileUrls || [];

                    return (
                        <div
                            key={message._id}
                            className={`flex ${isMyMessage ? "justify-end" : "justify-start"} items-end gap-3`}
                        >
                            {/* Sender/Receiver Image */}
                            {!isMyMessage && receiverDetails?.profileImage && (
                                <Image
                                    src={`${baseUrl}${receiverDetails?.profileImage}`}
                                    alt="profile"
                                    width={40}
                                    height={40}
                                    className="size-10 md:size-12 object-cover rounded-full flex-shrink-0"
                                    preview={false}
                                    loading="lazy"
                                />
                            )}

                            {/* Message Content */}
                            <div
                                className={`w-full max-w-[300px] md:max-w-[500px] flex flex-col ${isMyMessage ? "items-end" : "items-start"} flex-shrink-0`}
                            >
                                {/* Mixed Content */}
                                {message?.content?.messageType === "mixed" && (
                                    <div className={`flex flex-col gap-y-2 ${isMyMessage ? "flex-row-reverse" : ""}`}>
                                        <div className="relative cursor-pointer">
                                            <Image
                                                src={`${baseUrl}${fileUrls[0]}`}
                                                alt="image"
                                                width={200}
                                                height={200}
                                                className="object-cover rounded-xl"
                                                preview={false}
                                                loading="lazy"
                                                fallback={<Skeleton width={200} height={200} />}
                                            />
                                            {fileUrls.length >= 2 && (
                                                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-bold rounded-xl">
                                                    +{fileUrls.length - 1}
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex flex-col justify-end">
                                            <div
                                                className={`p-3 rounded-xl text-sm max-w-xs ${isMyMessage ? "bg-[#615EF0] text-white" : "bg-[#F1F1F1] text-black"}`}
                                            >
                                                {message?.content?.text}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Text Message */}
                                {message?.content?.messageType === "text" && (
                                    <div className="w-full max-w-fit space-y-1 group">
                                        <div
                                            className={`p-3 rounded-xl text-sm max-w-xs cursor-pointer ${isMyMessage ? "bg-[#161d6f] text-white" : "bg-[#c7ffd8] text-black"}`}
                                        >
                                            {message?.content?.text}
                                        </div>
                                    </div>
                                )}

                                {/* Image Message */}
                                {message?.content?.messageType === "image" && (
                                    <div className="group">
                                        <div className="relative cursor-pointer">
                                            <Image
                                                src={`${baseUrl}${fileUrls[0]}`}
                                                alt="image"
                                                width={200}
                                                height={200}
                                                className="rounded-xl"
                                                preview={false}
                                                loading="lazy"
                                                fallback={<Skeleton width={200} height={200} />}
                                            />
                                            {fileUrls.length >= 2 && (
                                                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-bold rounded-xl">
                                                    +{fileUrls.length - 1}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Audio Message */}
                                {message?.content?.messageType === "audio" && (
                                    <div>
                                        <audio controls>
                                            <source
                                                src={`${baseUrl}${fileUrls[0]}`}
                                                type="audio/mpeg"
                                            />
                                        </audio>
                                    </div>
                                )}

                                {/* Video Message */}
                                {message?.content?.messageType === "video" && (
                                    <div>
                                        <video controls width="250">
                                            <source
                                                src={`${baseUrl}${fileUrls[0]}`}
                                                type="video/mp4"
                                            />
                                        </video>
                                    </div>
                                )}

                                {/* Document Message */}
                                {message?.content?.messageType === "document" && (
                                    <div>
                                        <a
                                            href={`${baseUrl}${fileUrls[0]}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 underline"
                                        >
                                            View Document
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default UserMessages;


{/* <div className='flex gap-3 items-end'>
    <img className='w-10 h-10 rounded-full' src="/Images/about/user-profile-image.png" alt="" />
    <div>
        <p className='p-3 mt-3 bg-[#c7ffd8] w-3/4 font-medium rounded-tr-xl rounded-br-xl rounded-tl-xl'> How are You ?</p>
        <p className='p-3 mt-3 bg-[#c7ffd8] w-3/4 font-medium rounded-tr-xl rounded-br-xl rounded-tl-xl'> Didn't I tell you not to put your phone on charge just because it's the weekend?</p>
        <span className='text-xs font-semibold'>2:10 pm</span>
    </div>
</div>
<div className='flex  items-end justify-end'>
    <div className='flex gap-3  items-end justify-end'>
        <div className='w-3/4'>
            <Image className='max-w-32' src="/Images/about/message-user.png" alt="" />
            <span className='block text-right text-xs font-semibold'>2:00 pm</span>
        </div>

        <img className='w-10 h-10 rounded-full' src="/Images/about/message-user.png" alt="" />
    </div>
</div>

<div className='flex gap-3 items-end'>
    <img className='w-10 h-10 rounded-full' src="/Images/about/mahmud.jpg" alt="" />
    <div>
        <Image className='max-w-32' src="/Images/about/mahmud.jpg" alt="" />
        <span className='text-xs font-semibold block'>2:10 pm</span>
    </div>
</div>

<div className='flex  items-end justify-end'>
    <div className='flex gap-3  items-end justify-end'>
        <div className='w-3/4'>
            <div>
                <p className='p-3 mt-3 bg-primary  font-medium rounded-tl-xl rounded-bl-xl rounded-tr-xl'> 😀😀😀</p>
            </div>
            <span className='block text-right text-xs font-semibold'>2:00 pm</span>
        </div>
        <img className='w-10 h-10 rounded-full' src="/Images/about/user-profile-image.png" alt="" />

    </div>
</div>

<div className='flex gap-3 items-end'>
    <img className='w-10 h-10 rounded-full' src="/Images/about/mahmud.jpg" alt="" />
    <div>
        <Image className='max-w-32' src="/Images/about/mahmud.jpg" alt="" />
        <span className='text-xs font-semibold block'>2:10 pm</span>
    </div>
</div>

<div className='flex  items-end justify-end'>
    <div className='flex gap-3  items-end justify-end'>
        <div className='w-3/4'>
            <div>
                <p className='p-3 mt-3 bg-primary  font-medium rounded-tl-xl rounded-bl-xl rounded-tr-xl'> 😀😀😀</p>
            </div>
            <span className='block text-right text-xs font-semibold'>2:00 pm</span>
        </div>
        <img className='w-10 h-10 rounded-full' src="/Images/about/user-profile-image.png" alt="" />
    </div>

    </div> */}