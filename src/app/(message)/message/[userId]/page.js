'use client';
import MessageHeader from '@/app/components/message/MessageHeader';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { CloudUploadOutlined, InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Form, Image, Input, InputNumber, Upload, Modal } from 'antd';
import { LuPlane, LuShield } from 'react-icons/lu';
import { CiStar } from 'react-icons/ci';
import { FaAngleDown, FaArrowRightLong, FaCheck } from 'react-icons/fa6';
import { GoLaw } from 'react-icons/go';
import { IoCardOutline, IoMenu } from 'react-icons/io5';
import { FiShield } from 'react-icons/fi';
import Dragger from 'antd/es/upload/Dragger';
import { RxCross1 } from 'react-icons/rx';
import { useGetMessageQuery } from '@/app/redux/Features/message/getMessage';
import { useGetUserQuery } from '@/app/redux/Features/Auth/getUser';

const Page = () => {
    const params = useParams(); // Retrieve all route parameters
    const userId = params?.userId; // Extract the `userId` parameter if it exists
    const { data: user } = useGetUserQuery();
    // const senderId = user?.user?._id ; 
    const senderId = '67863c745a8b583ba21e3716';

    console.log(senderId);


    const { data: message } = useGetMessageQuery({ resiverId: userId, senderId: senderId });

    
    console.log(message?.data.filter(message => message.receiverId === userId));
    


    const [isAdjust, setIsAdjust] = useState(false);
    const handleIsAdjust = () => {
        setIsAdjust(!isAdjust);
    }



    const [fileList, setFileList] = useState(false);
    const [payModalVisible, setPayModalVisible] = useState(false); // Modal visibility state for Pay Now
    const handleTotalCost = () => {
        setFileList(!fileList);
    }

    const showPayModal = () => {
        setPayModalVisible(true); // Show the modal
    };

    const handlePayOk = () => {
        setPayModalVisible(false); // Close the modal
        // Implement further payment logic here
    };

    const handlePayCancel = () => {
        setPayModalVisible(false); // Close the modal if canceled
    };

    const [isSidebarShow, setIsSidebarShow] = useState(false);
    const handleMenuSideShow = () => {
        setIsSidebarShow(!isSidebarShow);
        // console.log(isSidebarShow);
    }



    return (
        <div className=''>

            <div className='grid lg:grid-cols-4 '>
                <div className='lg:col-span-3'>
                    <MessageHeader userId={userId} />

                    <div className='bg-slate-100 min-h-screen'>
                        <div className='h-[78vh] overflow-y-auto p-5'>
                            <div className='flex gap-3 items-end'>
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
                            </div>

                        </div>

                        <div className="mt-5">
                            {/* Input field container */}
                            <div className="flex items-center gap-3 border-t border-gray-300 pt-2 px-3">
                                {/* File input */}
                                <Upload >
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                                {/* Text input field */}
                                <input
                                    type="text"
                                    name="text"
                                    id="message-input"
                                    placeholder="Type a message..."
                                    className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-gray-700"
                                />

                                {/* Send button */}
                                <button
                                    className="p-3 bg-primary text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Send
                                </button>
                            </div>
                        </div>

                    </div>
                </div>


                <div className='lg:col-span-1 h-screen overflow-y-auto'>
                    <div onClick={handleMenuSideShow} className='lg:hidden block absolute top-6 right-2 z-[9999999]'>
                        {
                            !isSidebarShow ?
                                <IoMenu className='text-3xl' /> :
                                <RxCross1 className='text-3xl' />
                        }

                    </div>

                    <div className='lg:block hidden'>
                        <div className='bg-white p-6 border-b border-gray-200'>
                            <div className='flex items-center gap-2'>
                                <LuShield className='text-xl text-green-600' />
                                <CiStar className='text-xl text-orange-400' />
                            </div>
                            <p className='text-sm text-gray-500 mt-2'>Verified Traveler • Expert</p>
                        </div>
                        <div className='bg-gray-100 p-5'>
                            <div className='flex items-center text-sm gap-5 '>
                                <span><LuPlane className='text-2xl font-semibold text-primary' /></span>
                                <div className='flex items-center gap-5 font-semibold'>
                                    <span>Paris CDG</span>
                                    <span><FaArrowRightLong className='text-xl font-semibold text-primary' /></span>
                                    <span>Brazzaville Maya-Maya</span>
                                </div>
                            </div>
                            <div className='text-sm text-gray-500 mt-2'>
                                <span>15 Mars 2024 </span>
                                <span>10:30 </span>
                                <span>3kg</span>
                            </div>
                            <div className='mt-5 flex items-center justify-end'>
                                <div>
                                    <div>
                                        <div onClick={handleTotalCost} className='flex items-center justify-end gap-2 font-semibold text-gray-500 cursor-pointer'>
                                            25.70€ <FaAngleDown />
                                        </div>
                                        {
                                            fileList &&
                                            <div>
                                                <h2 className='font-semibold my-5'>Price Details:</h2>
                                                <div className='flex items-center justify-between my-2'>
                                                    <span className='text-gray-500'>Basic price ( 3 kg)</span>
                                                    <span>21.00€</span>
                                                </div>
                                                <div className='flex items-center justify-between my-2'>
                                                    <span className='text-gray-500'>Commission (20%)</span>
                                                    <span>21.00€</span>
                                                </div>
                                                <div className='flex items-center justify-between my-2'>
                                                    <span className='text-gray-500'>Fixed costs</span>
                                                    <span>21.00€</span>
                                                </div>
                                                <hr />
                                                <div className='flex items-center justify-between my-2'>
                                                    <span className='text-gray-500 font-semibold'>Total costs :</span>
                                                    <span className='font-semibold'>21.00€</span>
                                                </div>
                                            </div>
                                        }

                                    </div>
                                    <p className='text-xs text-gray-500'>Price including insurance and commissions</p>
                                </div>
                            </div>
                        </div>
                        <div className='p-5'>
                            <button onClick={handleIsAdjust} className='flex items-center justify-center gap-3 my-5 text-primary font-semibold'><GoLaw className='text-2xl font-semibold' /> Adjust</button>


                            {
                                isAdjust && <form action="" className="max-w-2xl mx-auto bg-gray-50 my-5">
                                    <div className="flex items-end gap-3 mb-4">
                                        <label className="block ">
                                            <span className='text-sm'>Weight</span>
                                            <input
                                                type="number"
                                                id="weight"
                                                name="weight"
                                                placeholder="Enter weight"
                                                className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </label>
                                        <button
                                            type="button"
                                            className="ml-3 min-w-32 px-4 py-2 bg-primary text-white rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            To Validate
                                        </button>
                                    </div>

                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm">Brief Description:</label>
                                        <input
                                            type="text"
                                            id="description"
                                            name="description"
                                            placeholder="Enter brief description"
                                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm">Declared Value:</label>
                                        <input
                                            type="text"
                                            id="declared-value"
                                            name="declared-value"
                                            placeholder="Enter declared value"
                                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                </form>
                            }
                            <div >
                                <h2 className='font-semibold'>Additional options</h2>
                                <label htmlFor="chakcbox1" className='block mt-2'>
                                    <input type="checkbox" name="chakcbox1" id="chakcbox1" />
                                    <span className='ml-2  blcok'>Hand delivery</span>
                                </label>
                                <label htmlFor="chakcbox2" className='block mt-2'>
                                    <input type="checkbox" name="chakcbox2" id="chakcbox2" />
                                    <span className='ml-2  blcok'>Secure locker (+5€)</span>
                                </label>
                            </div>

                        </div>
                        <div className='p-5'>
                            <Dragger >
                                <p className="ant-upload-drag-icon">
                                    <CloudUploadOutlined />
                                </p>
                                <p className="ant-upload-text">Click to add photos/videos</p>
                            </Dragger>
                        </div>
                        <div className='p-5'>
                            <div className='text-center'>
                                <button className='flex items-center justify-center gap-3 bg-green-600 text-purple-50 mb-2 py-2 w-full rounded-lg' onClick={showPayModal}> <IoCardOutline />
                                    Pay Now</button>
                            </div>
                        </div>
                    </div>

                    {/* need api intregation in here */}
                    {
                        isSidebarShow &&
                        <div className='w-2/3 z-[999] absolute top-20 pb-20 right-0 h-screen bg-white overflow-y-auto'>
                            <div className='bg-white p-6 border-b border-gray-200'>
                                <div className='flex items-center gap-2'>
                                    <LuShield className='text-xl text-green-600' />
                                    <CiStar className='text-xl text-orange-400' />
                                </div>
                                <p className='text-sm text-gray-500 mt-2'>Verified Traveler • Expert</p>
                            </div>
                            <div className='bg-gray-100 p-5'>
                                <div className='flex items-center text-sm gap-5 '>
                                    <span><LuPlane className='text-2xl font-semibold text-primary' /></span>
                                    <div className='flex items-center gap-5 font-semibold'>
                                        <span>Paris CDG</span>
                                        <span><FaArrowRightLong className='text-xl font-semibold text-primary' /></span>
                                        <span>Brazzaville Maya-Maya</span>
                                    </div>
                                </div>
                                <div className='text-sm text-gray-500 mt-2'>
                                    <span>15 Mars 2024 </span>
                                    <span>10:30 </span>
                                    <span>3kg</span>
                                </div>
                                <div className='mt-5 flex items-center justify-end'>
                                    <div>
                                        <div>
                                            <div onClick={handleTotalCost} className='flex items-center justify-end gap-2 font-semibold text-gray-500 cursor-pointer'>
                                                25.70€ <FaAngleDown />
                                            </div>
                                            {
                                                fileList &&
                                                <div>
                                                    <h2 className='font-semibold my-5'>Price Details:</h2>
                                                    <div className='flex items-center justify-between my-2'>
                                                        <span className='text-gray-500'>Basic price ( 3 kg)</span>
                                                        <span>21.00€</span>
                                                    </div>
                                                    <div className='flex items-center justify-between my-2'>
                                                        <span className='text-gray-500'>Commission (20%)</span>
                                                        <span>21.00€</span>
                                                    </div>
                                                    <div className='flex items-center justify-between my-2'>
                                                        <span className='text-gray-500'>Fixed costs</span>
                                                        <span>21.00€</span>
                                                    </div>
                                                    <hr />
                                                    <div className='flex items-center justify-between my-2'>
                                                        <span className='text-gray-500 font-semibold'>Total costs :</span>
                                                        <span className='font-semibold'>21.00€</span>
                                                    </div>
                                                </div>
                                            }

                                        </div>
                                        <p className='text-xs text-gray-500'>Price including insurance and commissions</p>
                                    </div>
                                </div>
                            </div>
                            <div className='p-5'>
                                <button onClick={handleIsAdjust} className='flex items-center justify-center gap-3 my-5 text-primary font-semibold'><GoLaw className='text-2xl font-semibold' /> Adjust</button>


                                {
                                    isAdjust && <form action="" className="max-w-2xl mx-auto bg-gray-50 my-5">
                                        <div className="flex items-end gap-3 mb-4">
                                            <label className="block ">
                                                <span className='text-sm'>Weight</span>
                                                <input
                                                    type="number"
                                                    id="weight"
                                                    name="weight"
                                                    placeholder="Enter weight"
                                                    className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </label>
                                            <button
                                                type="button"
                                                className="ml-3 min-w-32 px-4 py-2 bg-primary text-white rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            >
                                                To Validate
                                            </button>
                                        </div>

                                        <div className="mb-4">
                                            <label className="block mb-2 text-sm">Brief Description:</label>
                                            <input
                                                type="text"
                                                id="description"
                                                name="description"
                                                placeholder="Enter brief description"
                                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="block mb-2 text-sm">Declared Value:</label>
                                            <input
                                                type="text"
                                                id="declared-value"
                                                name="declared-value"
                                                placeholder="Enter declared value"
                                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                    </form>
                                }
                                <div >
                                    <h2 className='font-semibold'>Additional options</h2>
                                    <label htmlFor="chakcbox1" className='block mt-2'>
                                        <input type="checkbox" name="chakcbox1" id="chakcbox1" />
                                        <span className='ml-2  blcok'>Hand delivery</span>
                                    </label>
                                    <label htmlFor="chakcbox2" className='block mt-2'>
                                        <input type="checkbox" name="chakcbox2" id="chakcbox2" />
                                        <span className='ml-2  blcok'>Secure locker (+5€)</span>
                                    </label>
                                </div>

                            </div>
                            <div className='p-5'>
                                <Dragger >
                                    <p className="ant-upload-drag-icon">
                                        <CloudUploadOutlined />
                                    </p>
                                    <p className="ant-upload-text">Click to add photos/videos</p>
                                </Dragger>
                            </div>
                            <div className='p-5'>
                                <div className='text-center'>
                                    <button className='flex items-center justify-center gap-3 bg-green-600 text-purple-50 mb-2 py-2 w-full rounded-lg' onClick={showPayModal}> <IoCardOutline />
                                        Pay Now</button>
                                </div>
                            </div>
                        </div>
                    }

                </div>


            </div>

            {/* Modal for Pay Now */}
            <Modal
                open={payModalVisible}
                onOk={handlePayOk}
                onCancel={handlePayCancel}
                footer={false}
            >
                <div className="text-center">
                    <h2 className="text-xl font-semibold text-primary mb-10">
                        Your Card
                    </h2>
                    <div className=''>
                        <form className="text-left space-y-5">
                            {/* Card Number */}
                            <div>
                                <label className="block text-sm font-semibold mb-1">Card number</label>
                                <input
                                    type="text"
                                    placeholder="1234 5678 9012 3456"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            {/* Expiration Date */}
                            <div className="flex gap-3">
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold mb-1">Expiration date</label>
                                    <input
                                        type="text"
                                        placeholder="MM/YY"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                {/* CVC */}
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold mb-1">CVC</label>
                                    <input
                                        type="text"
                                        placeholder="123"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>

                            {/* Terms Agreement */}
                            <div className="flex items-start gap-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="w-4 h-4 accent-primary"
                                />
                                <label htmlFor="terms" className="text-sm text-gray-600">
                                    By confirming, you agree to the <span className="text-primary font-semibold">Terms of Use</span> and <span className="text-primary font-semibold">Privacy Policy</span>.
                                </label>
                            </div>

                            {/* Confirm Button */}
                            <button
                                type="button"
                                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center gap-2 justify-center"
                            >
                                <FiShield className='text-2xl' /> Confirm Pay
                            </button>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Page;
