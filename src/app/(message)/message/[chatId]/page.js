'use client';
import MessageHeader from '@/app/components/message/MessageHeader';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { CloudUploadOutlined, InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Form, Image, Input, InputNumber, Upload, Modal } from 'antd';
import { LuPlane, LuShield } from 'react-icons/lu';
import { CiStar } from 'react-icons/ci';
import { FaAngleDown, FaArrowRightLong, FaCheck } from 'react-icons/fa6';
import { GoLaw } from 'react-icons/go';
import { IoCardOutline, IoInformationCircleOutline, IoMenu } from 'react-icons/io5';
import { FiPaperclip, FiSend, FiShield } from 'react-icons/fi';
import Dragger from 'antd/es/upload/Dragger';
import { RxCross1 } from 'react-icons/rx';
import { useGetChatQueryQuery, useGetChatsQuery, useGetMessageQuery, useGetSellKgByIdQuery, useSendMessageMutation } from '@/app/redux/Features/message/getMessage';
import { useGetSingleUserQuery, useGetUserQuery } from '@/app/redux/Features/Auth/getUser';
import useUser from '@/hooks/useUser';
import baseUrl from '@/app/redux/api/baseUrl';
import UserMessages from '@/app/components/message/UserMessages';
import SendMessage from '@/app/components/message/SendMessage';
import toast from 'react-hot-toast';
import { usePaymentMutation } from '@/app/redux/Features/payment/createPayment';
import { useGetAllCalculationDataQuery } from '@/app/redux/Features/calculation/getCalculationData';

const Page = () => {
    const [message, setMessage] = useState("");
    const [files, setFiles] = useState([]);
    const user = useUser()
    const params = useParams(); // Get the parameters from the URL
    const chatId = params?.chatId; // Extract the `userId` parameter if it exists




    //get chat details
    const { data: responseData } = useGetChatQueryQuery(chatId, {
        skip: !chatId
    });
    const chatDetails = responseData?.data;
    //get receiverId
    const receiverId = chatDetails?.participants?.find(
        (p) => p !== user?._id
    );

    //get receiver details
    const { data: responseUserData } = useGetSingleUserQuery(receiverId, {
        skip: !receiverId
    });
    const receiverDetails = responseUserData?.data;

    //get messages
    const { data: responseMessageData, isLoading: isMessageLoading } = useGetMessageQuery(chatId, {
        skip: !chatId
    });
    const messages = responseMessageData?.data?.results;

    //send message 
    const [sendMessage] = useSendMessageMutation()

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


    //send message handler
    const handleSendMessage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("chatId", chatId);
        formData.append("message", message);
        formData.append("receiverId", receiverId);
        formData.append("files", files);
        formData.append("sellKgId", mainSellKg?._id);


        if (message === "" && files.length === 0) {
            return
        }

        try {
            const res = await sendMessage(formData).unwrap();
            if (res.code === 200 && res.data) {
                setMessage("");
                setFiles([]);
            }
        } catch (error) {
            console.error(error);
        }
    }

    // ======================== sell kg details with payment details ======================

    const { data: responseChatData } = useGetChatsQuery();
    const allChats = responseChatData?.data?.results;
    const filterData = allChats?.find((item) => item._id == chatId);


    const { data: sellKgData } = useGetSellKgByIdQuery(filterData?.sellKgId);
    const mainSellKg = sellKgData?.data;

    console.log(user);
    console.log(mainSellKg);



    //========= payment info  ========
    const [payForOrder] = usePaymentMutation();
    const router = useRouter();

    const [image, setImage] = useState([]); // State to hold images
    const handleUploadChange = ({ fileList }) => {
        // Update the state with the file list
        setImage(fileList[0]); // fileList will be an array of uploaded files
    };

    const [currency, setCurrency] = useState('usd');
    useEffect(() => {
        const getcurrency = localStorage.getItem('currency');
        setCurrency(getcurrency);
    }, [currency]);

    console.log(mainSellKg?.isOrderComfirmed);

    const { data: planeData } = useGetAllCalculationDataQuery();
    console.log(planeData?.data[0]?.missionPrice);

    const paymentForORder = async () => {


        // console.log(mainSellKg);
        // console.log(user);



        try {


            const formData = new FormData();
            formData.append("amount", `${(mainSellKg?.price * 100) - (5 * 100)}`);
            formData.append("cobagProfit", Number(mainSellKg?.price * 100) - mainSellKg?.price * 80);
            formData.append("currency", currency !== 'Euro' ? 'usd' : "eur");
            formData.append("paymentMethodId", "pm_card_visa");
            formData.append("isEightyPercent", true);
            formData.append("senderId", user?._id);
            formData.append("sellKgId", mainSellKg?._id);
            formData.append("travellerId", mainSellKg?.userId);
            formData.append("packageImage", image);
            console.log(mainSellKg?.price);


            if (mainSellKg?.price < 1 || !mainSellKg?.price) {
                return toast.error('Your price is less than 1');
            }

            if (image.length === 0) {
                return toast.error('Please upload image');
            }

            toast.success('Payment is processing');


            const res = await payForOrder(formData).unwrap();

            console.log(res);
            if (res) {
                // window.location.href = res?.data?.url;
                return router.push(res?.url, '_blank');
            }



        } catch (error) {
            // console.error(error);
            toast.error(error?.data?.message || 'An error occurred while sending the message.');
            alert('Please Check All is Correct');
        }


    }


    const [selectedOption, setSelectedOption] = useState(null);

    // Function to handle button click and change state
    const handleSelectOption = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className=''>



            <div className='grid lg:grid-cols-4 '>
                <div className='lg:col-span-3'>
                    <MessageHeader receiverDetails={receiverDetails} />


                    <div className='bg-slate-100 min-h-screen '>

                        {/* user messages here */}
                        <UserMessages user={user} receiverDetails={receiverDetails} messages={messages} />

                        {/* message send input here */}
                        <SendMessage files={files} setFiles={setFiles} message={message} setMessage={setMessage} handleSendMessage={handleSendMessage} />

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
                                    <span>{mainSellKg?.departureCity}</span>
                                    <span><FaArrowRightLong className='text-xl font-semibold text-primary' /></span>
                                    <span>{mainSellKg?.arrivalCity}</span>
                                </div>
                            </div>
                            <div className='text-sm text-gray-500 mt-2'>
                                <span>{mainSellKg?.departureDate} - </span>
                                <span>{mainSellKg?.departureTime} -  </span>
                                <span>{mainSellKg?.totalSpace} kg</span>
                            </div>
                            <div className=''>
                                <div>
                                    <div>
                                        <div onClick={handleTotalCost} className='flex items-center justify-end gap-2 font-semibold text-gray-500 cursor-pointer'>
                                            {mainSellKg?.price} € <FaAngleDown />
                                        </div>
                                        {
                                            fileList &&
                                            <div>
                                                <h2 className='font-semibold text-sm '>Price Details:</h2>
                                                <hr className='my-3' />
                                                <div className='flex items-center justify-between my-2'>
                                                    <span className='text-gray-500 font-semibold text-sm'>Traveler mission</span>
                                                    <span>15 €</span>
                                                </div>
                                                <div className='flex items-center justify-between my-2'>
                                                    <span className='text-gray-500 font-semibold text-sm'>Basic price ({mainSellKg?.totalSpace} kg)</span>
                                                    <span>{mainSellKg?.totalSpace * mainSellKg?.pricePerKilo} €</span>
                                                </div>
                                                <div className='flex items-center justify-between my-2'>
                                                    <span className='text-gray-500 font-semibold text-sm'>Commission (20%)</span>
                                                    <span>  {(mainSellKg?.price - (Number(mainSellKg?.totalSpace * mainSellKg?.pricePerKilo) + 15)).toFixed(2)} €</span>
                                                </div>
                                                <hr />
                                                <div className='flex items-center justify-between my-2'>
                                                    <span className='text-gray-500 font-semibold'>Total costs :</span>
                                                    <span className='font-semibold'>{(mainSellKg?.price)}€</span>
                                                </div>
                                                <div className='flex items-center justify-between my-2'>
                                                    <span className='text-gray-500 font-semibold text-sm'>Initial deposit already paid <br />
                                                        <span className='text-gray-400 text-xs font-normal'>(Refundable if no agreement is reached)</span></span>
                                                    <span> -5 €</span>
                                                </div>
                                                <hr />
                                                <div className='flex items-center justify-between my-2'>
                                                    <span className='text-gray-500 font-semibold'>Total to pay :</span>
                                                    <span className='font-semibold'>{(mainSellKg?.price) - 5}€</span>
                                                </div>
                                            </div>
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-5 bg-gray-50 rounded-lg m-1'>
                            {/* Check for mainSellKg object if order is not confirmed */}
                            {!mainSellKg?.isOrderComfirmed && (
                                <div>
                                    {/* Title for Additional Options */}
                                    <h2 className='font-semibold text-primary flex items-center gap-1'><IoInformationCircleOutline className='text-xl' />Purchase already paid online?</h2>

                                    {/* Purchase already paid online? - Yes/No buttons */}
                                    <div className="mb-4">
                                        <div className='mt-1'>
                                            <button
                                                className={`px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-300 ${selectedOption === 'yes' ? 'bg-primary text-white' : 'bg-white text-primary border border-primary'
                                                    }`}
                                                onClick={() => handleSelectOption('yes')}
                                            >
                                                Yes
                                            </button>
                                            <button
                                                className={`px-4 py-2 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-300 ${selectedOption === 'no' ? 'bg-primary text-white' : 'bg-white text-primary border border-primary'
                                                    }`}
                                                onClick={() => handleSelectOption('no')}
                                            >
                                                No
                                            </button>
                                        </div>
                                    </div>

                                    {/* Estimated Product Price */}
                                    <p className='font-semibold text-sm mb-1'>Estimated product price</p>
                                    <div className="flex items-center mb-4">
                                        <input
                                            type="number"
                                            placeholder="Enter estimated price"
                                            className="border border-gray-300 px-4 py-2 rounded-l-md focus:ring-2 focus:ring-blue-300 w-64"
                                        />
                                        <button className="bg-primary text-white px-4 py-2 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-300">Confirm</button>
                                    </div>

                                    {/* Delivery Options */}
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Delivery options</h3>

                                        <div className="flex items-center mb-2">
                                            <input
                                                type="checkbox"
                                                id="handDelivery"
                                                name="handDelivery"
                                                className="h-5 w-5 border-gray-300 rounded focus:ring-blue-300"
                                            />
                                            <label htmlFor="handDelivery" className="ml-2 text-sm">Hand delivery</label>
                                        </div>

                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id="secureLocker"
                                                name="secureLocker"
                                                className="h-5 w-5 border-gray-300 rounded focus:ring-blue-300"
                                            />
                                            <label htmlFor="secureLocker" className="ml-2 text-sm">Secure locker (+10€)</label>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>



                        {
                            !mainSellKg?.isOrderComfirmed &&
                            <div className="p-5">
                                <Dragger
                                    onChange={handleUploadChange}
                                    multiple={false} // To allow multiple files to be uploaded
                                >
                                    <p className="ant-upload-drag-icon">
                                        <CloudUploadOutlined />
                                    </p>
                                    <p className="ant-upload-text">Click to add photos/videos</p>
                                </Dragger>

                            </div>
                        }
                        {
                            !mainSellKg?.isOrderComfirmed &&
                            <div className='p-5'>
                                <div className='text-center'>
                                    <button className='flex items-center justify-center gap-3 bg-green-600 text-purple-50 mb-2 py-2 w-full rounded-lg' onClick={paymentForORder}> <IoCardOutline />
                                        Pay Now</button>
                                </div>
                            </div>
                        }
                        {
                            mainSellKg?.isOrderComfirmed &&
                            <div className='p-5'>
                                <div className='text-center'>
                                    <span className='text-2xl font-semibold text-green-500'>This Order is Booked</span>
                                </div>
                            </div>
                        }
                    </div>

                    {/* need api intregation in here */}
                    {
                        isSidebarShow &&
                        <div className='  z-[999] absolute top-20 pb-20 right-0 h-screen bg-white overflow-y-auto'>
                            <div className='bg-white p-6 border-b border-gray-200'>
                                <div className='flex items-center gap-2'>
                                    <LuShield className='text-xl text-green-600' />
                                    <CiStar className='text-xl text-orange-400' />
                                </div>
                                <p className='text-sm text-gray-500 mt-2'>Verified Traveler • Expert</p>
                            </div>
                            <div className='bg-gray-100 p-5  '>
                                <div className='flex items-center text-sm gap-5 '>
                                    <span><LuPlane className='text-2xl font-semibold text-primary' /></span>
                                    <div className='flex items-center gap-5 font-semibold'>
                                        <span>{mainSellKg?.departureCity}</span>
                                        <span><FaArrowRightLong className='text-xl font-semibold text-primary' /></span>
                                        <span>{mainSellKg?.arrivalCity}</span>
                                    </div>
                                </div>
                                <div className='text-sm text-gray-500 mt-2'>
                                    <span>{mainSellKg?.departureDate} </span>
                                    <span>{mainSellKg?.departureTime} </span>
                                    <span>{mainSellKg?.totalSpace}kg</span>
                                </div>
                                <div className='mt-5 flex items-center w-full'>
                                    <div>
                                        <div>
                                            <div onClick={handleTotalCost} className='flex items-center justify-between gap-2 font-semibold text-gray-500 cursor-pointer'>
                                                {mainSellKg?.price} € <FaAngleDown />
                                            </div>
                                            {
                                                fileList &&
                                                <div>
                                                    <h2 className='font-semibold my-5'>Price Details:</h2>
                                                    <div className='flex items-center justify-between my-2'>
                                                        <span className='text-gray-500'>Perches Mission</span>
                                                        <span>{planeData?.data[0]?.missionPrice} €</span>
                                                    </div>
                                                    <div className='flex items-center justify-between my-2'>
                                                        <span className='text-gray-500'>Basic price ({mainSellKg?.totalSpace} kg)</span>
                                                        <span>{mainSellKg?.price - planeData?.data[0]?.missionPrice} €</span>
                                                    </div>
                                                    <div className='flex items-center justify-between my-2'>
                                                        <span className='text-gray-500'>Commission (20%)</span>
                                                        <span>{(mainSellKg?.price * 0.2).toFixed(2)} €</span>
                                                    </div>
                                                    <div className='flex items-center justify-between my-2'>
                                                        <span className='text-gray-500'>Fixed costs</span>
                                                        <span>{(mainSellKg?.price)}€</span>
                                                    </div>
                                                    <hr />
                                                    <div className='flex items-center justify-between my-2'>
                                                        <span className='text-gray-500 font-semibold'>Total costs :</span>
                                                        <span className='font-semibold'>{(mainSellKg?.price)}€</span>
                                                    </div>
                                                </div>
                                            }

                                        </div>
                                        <p className='text-xs text-gray-500'>Price including insurance and commissions</p>
                                    </div>
                                </div>
                            </div>
                            <div className='p-5'>
                                {
                                    !mainSellKg?.isOrderComfirmed &&
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
                                }

                            </div>
                            {
                                !mainSellKg?.isOrderComfirmed &&
                                <div className='p-5'>
                                    <Dragger
                                        onChange={handleUploadChange}
                                    >
                                        <p className="ant-upload-drag-icon">
                                            <CloudUploadOutlined />
                                        </p>
                                        <p className="ant-upload-text">Click to add photos/videos</p>
                                    </Dragger>
                                </div>
                            }
                            {
                                !mainSellKg?.isOrderComfirmed &&
                                <div className='p-5'>
                                    <div className='text-center'>
                                        <button onClick={paymentForORder} className='flex items-center justify-center gap-3 bg-green-600 text-purple-50 mb-2 py-2 w-full rounded-lg' > <IoCardOutline />
                                            Pay Now</button>
                                    </div>
                                </div>
                            }

                            {
                                mainSellKg?.isOrderComfirmed &&
                                <div className='p-5'>
                                    <div className='text-center'>
                                        <span className='text-2xl font-semibold text-green-500'>Order Confirmed</span>
                                    </div>
                                </div>
                            }
                        </div>
                    }

                </div>


            </div>


        </div>
    );
};

export default Page;
