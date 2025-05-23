'use client';
import React, { useEffect, useRef, useState } from 'react';
import { LuPlane, LuShield } from 'react-icons/lu';
import { IoIosNotificationsOutline, IoMdInformationCircle, IoMdTrain } from "react-icons/io";
import { CiCalendar, CiLocationOn, CiStar } from 'react-icons/ci';
import { FaRegClock, FaStar, FaToggleOff, FaToggleOn } from 'react-icons/fa6';  // Corrected the duplicate import
import { MdVerifiedUser } from 'react-icons/md';
import { FiMessageSquare } from 'react-icons/fi';
import i18n from '@/app/utils/i18';
import Link from 'next/link';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import baseUrl from '@/app/redux/api/baseUrl';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import useUser from '@/hooks/useUser';
import { usePaymentMutation } from '@/app/redux/Features/payment/createPayment';
import { useCreateSingleChatMutation, useGetChatsQuery } from '@/app/redux/Features/message/getMessage';
import { useGetSingleUserQuery, useGetUserQuery } from '@/app/redux/Features/Auth/getUser';

const AvailableRoutes = ({ searchData }) => {


    const { t } = i18n;

    const [isNotificaiton, setIsNotificaiton] = useState(true);

    const handleNotificationShowHide = () => {
        setIsNotificaiton(!isNotificaiton);
    }

    const routeData = [
        {
            transportMode: 'plane',
            transportType: 'Vol direct',
            price: 18.00,
            departureCity: 'Paris (CDG)',
            departureDate: '15/03/2024',
            departureTime: '14:30',
            arrivalCity: 'Brazzaville (Maya-Maya)',
            arrivalDate: '15/03/2024',
            arrivalTime: '22:00',
            totalSpace: 3,
            user: {
                profileImage: '/Images/NewSection/usreImgae.avif',
                firstName: 'Thomas Martin',
                reviewAva: 4.8,
                reviewInt: 22,
            },
        },
        // Add more raw route data here as needed
    ];


    const [isNotification, setIsNotification] = useState(false);

    // Create a reference to the section you want to scroll to
    const routesSectionRef = useRef(null);

    const handleNotificationShowHide2 = () => {
        setIsNotification(prev => !prev);

        // Scroll to the section smoothly
        if (routesSectionRef.current) {
            routesSectionRef.current.scrollIntoView({
                behavior: 'smooth', // Smooth scroll
                block: 'start' // Scroll to the top of the section
            });
        }
    };

    const router = useRouter();
    const user = useUser();
    const [payment20Persent] = usePaymentMutation();

    const [creatChat] = useCreateSingleChatMutation();




    const [currency, setCurrency] = useState('usd');
    useEffect(() => {
        const getcurrency = localStorage.getItem('currency');
        setCurrency(getcurrency);
    }, [currency]);


    const { data: userData } = useGetSingleUserQuery(user?._id);
    const userDetails = userData?.data;



    const handleGoMessage = async (request) => {


        const formData = new FormData();
        formData.append("amount", `${Number(5 * 100)}`);
        formData.append("cobagProfit", request?.cobagProfit);
        formData.append("currency", currency !== 'Euro' ? 'usd' : 'eur' || 'usd');
        formData.append("paymentMethodId", "pm_card_visa");
        formData.append("isTwentyPercent", 'true');
        formData.append("senderId", user?._id);
        formData.append("sellKgId", request?._id);
        formData.append("travellerId", request?.user?._id);

        console.log(user);


        if (!userDetails?.isTwentyPercent) {

            toast.error('Please pay 5$ for Sucure All Transection');
            const res = await payment20Persent(formData).unwrap();
            console.log('paymnent ', res);

            if (res) {

                // window.location.href = res?.data?.url;
                return router.push(res?.url);
            }
        }

        console.log(request?.user?._id);

        const createChatData = {
            receiverId: request?.user?._id,
            sellKgId: request?._id
        }

        if (userDetails?.isTwentyPercent) {

            const res = await creatChat(createChatData).unwrap();
            console.log('chat Data ', res?.data);
            if (res?.code === 201) {

                // window.location.href = res?.data?.url;
                return router.push(`/message/${res?.data?._id}`);
            }
        }



        // toast.success('Message sent successfully');
    }


    console.log(searchData);


    return (
        <div className='lg:py-20 py-10 bg-[#]'>
            <div className='lg:w-[80%] mx-auto mb-5 flex justify-center items-center gap-3'>
                <p className='text-base font-semibold text-gray-600'>Be alerted</p>
                <a href="#routes" onClick={handleNotificationShowHide2}>
                    {
                        isNotification ?
                            <FaToggleOff className='text-4xl cursor-pointer text-primary' />
                            :
                            <FaToggleOn className='text-4xl cursor-pointer text-primary' />
                    }
                </a>

            </div>

            {
                searchData.length < 1 &&
                <div className='md:w-[600px] mx-auto my-10 px-5 md:px-0'>
                    <div className=' grid md:grid-cols-2 gap-5'>
                        <div>
                            <img src="/Images/NewSection/available-routes.png" alt="" />
                        </div>
                        <div className='bg-gray-200 p-5 rounded-xl'>
                            <h2 className='text-2xl font-semibold text-primary flex items-center gap-2 mb-5'><span className='text-4xl'>😋</span> Victim of its success</h2>
                            <p>Oooh... Too bad, all the travelers have already sold their kilos for this destination. But don't worry! Sign up for the alert and be the first to know as soon as a new traveler offers their space.</p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='text-base my-3 text-gray-600'>Receive an alert for new places available:</p>
                        <div className='grid grid-cols-2 gap-5'>
                            <input className='w-full p-3 rounded-lg border border-gray-300' type="email" placeholder='Enter your email' name="email" id="" />
                            <button className='w-full p-3 rounded-lg bg-primary text-white flex items-center justify-center gap-2'><IoIosNotificationsOutline className='text-2xl' />Activate alert</button>
                        </div>
                    </div>
                </div>
            }


            <section ref={routesSectionRef} id="routes" className="lg:w-[60%] w-[95%] mx-auto py-10">
                <h2 className="text-2xl font-semibold text-primary mt-10">Available routes</h2>

                {searchData.length > 0 ? (
                    searchData.map((item, index) => (
                        <div key={index} className="shadow-[0_0_15px_0_rgba(0,0,0,0.1)]   rounded-lg md:p-10 p-5 my-5">
                            <div className="md:flex flex-wrap items-center justify-between">
                                <div>
                                    <div className="flex items-center text-primary gap-3 font-medium">
                                        <div className="w-14 h-14 bg-[#f6f6fb] text-primary flex items-center justify-center rounded-lg">
                                            {item.transportMode === 'plane' ? (
                                                <LuPlane className="text-2xl" />
                                            ) : (
                                                <IoMdTrain className="text-2xl" />
                                            )}
                                        </div>
                                        <h2 className="capitalize">
                                            {item.transportType} {item.transportMode}

                                        </h2>
                                    </div>

                                    <div>
                                        <div className="flex gap-2 my-8">
                                            <CiLocationOn className="text-2xl" />
                                            <div>
                                                <p>{item.departureCity}</p>
                                                <div className="flex items-center gap-2">
                                                    <span className="flex items-center gap-2 text-sm">
                                                        <CiCalendar />
                                                        {item.departureDate}
                                                    </span>
                                                    <span className="flex items-center gap-2 ml-5 text-sm">
                                                        <FaRegClock />
                                                        {item.departureTime}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-2 my-8">
                                            <CiLocationOn className="text-2xl" />
                                            <div>
                                                <p>{item.arrivalCity}</p>
                                                <div className="flex items-center gap-2">
                                                    <span className="flex items-center gap-2 text-sm">
                                                        <CiCalendar />
                                                        {item.arrivalDate}
                                                    </span>
                                                    <span className="flex items-center gap-2 ml-5 text-sm">
                                                        <FaRegClock />
                                                        {item.arrivalTime}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div>
                                    <div className="flex flex-col justify-end items-end text-gray-500">
                                        <h3 className="text-3xl font-semibold text-primary mb-3 flex items-center  gap-3">{item?.price}€ <IoMdInformationCircle className="text-gray-500 text-xl cursor-pointer" /></h3>
                                        <span className="flex items-center gap-3">
                                            <IoShieldCheckmarkOutline className="text-green-500 capitalize" />
                                            including insurance and protection

                                        </span>

                                    </div>
                                    <div className='w-full mt-5'>
                                        <div className="bg-[#eeeff8] py-5 md:w-96 w-full px-10 rounded-lg text-primary">
                                            <h3 className="font-semibold capiralize"> {
                                                item.transportMode === 'plane' ? 'Your Shipment' : item?.Size} </h3>
                                            <h2 className="text-2xl font-semibold">{item.totalSpace} kg</h2>
                                        </div>
                                        <div className='my-5 bg-[#F2FEF8] py-5 md:w-96 w-full md:px-10 px-5 rounded-lg text-primary text-sm'>
                                            <h2>Delivery by {item.user.firstName}</h2>
                                            <p><span className='font-semibold'>Today</span> {item.arrivalDate} at <span className='font-semibold'>{item.arrivalTime}</span></p>
                                            <p>In <span className='font-semibold'>{item?.destinationArea}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="flex flex-wrap justify-between gap-10 items-center my-5">


                            </div>

                            <div className="flex flex-wrap items-center md:justify-between gap-5">
                                <div className="flex flex-wrap items-center gap-5">
                                    <img className="w-14 rounded-full" src={baseUrl + item.user.profileImage} alt="" />
                                    <div>
                                        <h3 className="font-semibold text-primary">{item.user.firstName}</h3>
                                        <div className="flex items-center flex-wrap gap-3">
                                            <span className="flex items-center gap-3 text-gray-500">
                                                {item.user.reviewAva}
                                                <FaStar className="text-yellow-400" /> ({item.user.reviewInt} reviews)
                                            </span>
                                            <li className="list-disc text-gray-600 ml-5 mr-2">0 packages delivered</li>

                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex flex-wrap items-center justify-end gap-5">
                                        {/* <Link href={`/ishop/${item._id}`} className="flex items-center gap-3 py-3 px-10 text-primary border-2 border-primary rounded-lg">
                                            <CiStar /> View review
                                        </Link> */}
                                        <p className="text-right text-sm text-gray-500">Languages spoken: French, English</p>
                                        <button onClick={() => handleGoMessage(item)} className="flex items-center gap-3 py-3 px-10 bg-primary text-white border-2 border-primary rounded-lg">
                                            <FiMessageSquare /> Contact
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>
                        {/* <h2 className="text-center text-2xl font-semibold text-red-500 my-20">No Search Data Found !!</h2> */}
                        <img className='max-w-[250px]  mx-auto' src="/Images/searchnotfound.webp" alt="" />
                    </div>
                )}
            </section>


        </div>
    );
}

export default AvailableRoutes;
