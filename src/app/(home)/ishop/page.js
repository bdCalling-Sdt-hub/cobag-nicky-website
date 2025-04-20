'use client';

import VideoAndCard from '@/app/components/Isend/VideoAndCard';
import CouriersAvailable from '@/app/components/Ishop/CouriersAvailable';
import HowDoesWork from '../../components/Ishop/HowDoesWork';
import React, { useRef, useState } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiCalendar, CiDollar, CiLocationOn, CiUser } from 'react-icons/ci';
import { IoAddCircleOutline, IoSearchOutline, IoShieldCheckmarkOutline } from 'react-icons/io5'; // Corrected import for IoSearchOutline
import PopularProducts from '@/app/components/Ishop/PopularProducts';
import i18n from '@/app/utils/i18';
import { useSearchIShopMutation, useSearchItravelMutation } from '@/app/redux/Features/Search/searchItravel';
import toast, { Toaster } from 'react-hot-toast';
import { FaBox, FaRegClock, FaStar } from 'react-icons/fa6';
import { IoMdCheckbox, IoMdInformationCircle } from 'react-icons/io';
import { CiImageOn } from "react-icons/ci";
import { useCreateIshopMutation, useGetAllIshopQuery } from '@/app/redux/Features/Ishop/ishop';
import { useGetAllPostQuery } from '@/app/redux/Features/Itravel/createPlane';
import { useRouter } from 'next/navigation';
import useUser from '@/hooks/useUser';
import { usePaymentMutation } from '@/app/redux/Features/payment/createPayment';
import { MdVerifiedUser } from 'react-icons/md';
import { FiMessageSquare } from 'react-icons/fi';
import baseUrl from '@/app/redux/api/baseUrl';
import { LuPlane } from 'react-icons/lu';



const Page = () => {

    const { t } = i18n;

    const { data: getAllData } = useGetAllIshopQuery();



    const [showFlexibleDate, setShowFlexibleDate] = useState(false); // State for Flexible Dates checkbox
    const [formValues, setFormValues] = useState({
        departureCity: '',
        arrivalCity: '',
        desiredDate: '',
        alternateDate: '',
    });

    const handleCheckboxChange = (e) => {
        setShowFlexibleDate(e.target.checked); // Toggle state for Flexible Dates

    };

    const handleInputChange = (field, value) => {
        setFormValues({ ...formValues, [field]: value }); // Update form values dynamically
    };

    // ================ search ================

    const [searchIshop, { isLoading }] = useSearchItravelMutation();
    const [searchTerm, setSearchTerm] = useState([]);

    // console.log(searchTerm);

    const [postIshop] = useCreateIshopMutation();


    const [allSearchResutl, setAllSearchResutl] = useState([]);

    console.log('allSearchResutl', allSearchResutl);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const departureCity = form?.departureCity?.value || '';
        const arrivalCity = form?.arrivalCity?.value || '';
        const departureDate = form?.desiredDate?.value || '';
        const arrivalDate = form?.desiredFlexibleDate?.value || ''; // Add this line
        const maxpurchAmountAdvance = Number(form?.desiredPrice?.value) || 0; // Add this line

        const name = form?.name?.value || '';
        const quantity = Number(form?.quantity?.value) || 0;
        const weight = Number(form?.weight?.value) || 0;



        const formData = {
            transportMode: 'all',
            departureCity,
            arrivalCity,
            departureDate,
            arrivalDate,
            maxpurchAmountAdvance,
        };
        const fromDataPost = new FormData();
        if (showFlexibleDate) {

            fromDataPost.append('departureCity', departureCity);
            fromDataPost.append('arrivalCity', arrivalCity);
            fromDataPost.append('departureDate', departureDate);
            fromDataPost.append('arrivalDate', arrivalDate);
            fromDataPost.append('PurchasePrice', maxpurchAmountAdvance);
            fromDataPost.append('productName', name);
            fromDataPost.append('quantity', quantity);
            fromDataPost.append('uploadImage', form.image.files[0]);
        }


        try {
            if (!showFlexibleDate) {
                const response = await searchIshop(formData).unwrap();
                console.log(response);
                if (response?.success) {
                    setAllSearchResutl(response?.data)
                    toast.success(`Search successfully !! See ${response?.data?.length} Item`);
                }
            }
            else {
                const response = await postIshop(fromDataPost).unwrap();
                // console.log(response);
                if (response?.success) {
                    setSearchTerm(response?.data)
                    toast.success(`Search successfully !! See ${response?.data?.length} Item`);
                }
            }


        } catch (error) {
            console.log(error);
        }



    };





    // Create a reference to the section you want to scroll to
    const routesSectionRef = useRef(null);


    const router = useRouter();
    const user = useUser();
    // console.log(user?.subscription === false);
    const [payment20Persent] = usePaymentMutation();

    const handleGoMessage = async (request) => {

        console.log(request);

        const data = {
            amount: Number(request?.price / 100 * 20) * 100,
            cobagProfit: 10,
            currency: "eur",
            paymentMethodId: "pm_card_visa",
            isEightyPercent: true,
            senderId: user?._id,
            sellKgId: request?._id,
            travellerId: request?.userId?._id
        }

        console.log(data);



        if (user?.subscription === false) {
            toast.error('Please login get subscription or 20% pay');

            const res = await payment20Persent(data).unwrap();
            console.log(res);
            if (res) {
                // window.location.href = res?.data?.url;
                return router.push(res?.url);
            }

        }
        // toast.success('Message sent successfully');
    }

    return (
        <div>
            <Toaster position="top-center" toastOptions={{ duration: 3000 }} containerStyle={{ zIndex: 999999 }} />
            <div className='bg-[url("/Images/Ishop/banner.png")] w-full min-h-[90vh] duration-500 bg-cover bg-center'>
                <div>
                    <div className='bg-[#000d1a8a] min-h-[90vh] md:py-32 py-20'>
                        <div className='lg:w-2/4 mx-auto text-center'>
                            <h1 className='md:text-4xl text-3xl font-semibold text-white'>
                                {t('worldPurchasesInYourBasket5454')}
                            </h1>
                            <p className='text-white lg:text-xl lg:mt-5 mt-3'>
                                {/* {t('whatYouCantFindAtHome5454')} */}
                                What you can't find at home, our courier travelers will bring it to you! The world has never been so close
                            </p>
                        </div>
                        <form className="lg:w-2/4 w-11/12 mx-auto mt-10 bg-[#ffffffab] backdrop-blur-lg lg:p-10 p-5 rounded-lg" onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <div className="grid lg:grid-cols-2 gap-4">
                                    {/* Departure City */}
                                    <div>
                                        <label className="block mb-2 font-semibold  text-[#474747]">{t('cityOfPurchase5454')}</label>
                                        <div className="relative flex items-center">
                                            <input
                                                type="text"
                                                name='departureCity'
                                                placeholder={t('enterDepartureCity5454')}
                                                className="w-full py-2 px-10 border rounded bg-gray-100 focus:outline-none focus:ring-0"
                                            />
                                            <span className="absolute left-3 text-gray-400">
                                                <CiLocationOn className="text-2xl" />
                                            </span>
                                        </div>
                                    </div>

                                    {/* Arrival City */}
                                    <div>
                                        <label className="block mb-2 font-semibold  text-[#474747]">{t('deliveryCity5454')}</label>
                                        <div className="relative flex items-center">
                                            <input
                                                type="text"
                                                name='arrivalCity'
                                                placeholder={t('enterArrivalCity5454')}
                                                className="w-full py-2 px-10 border rounded bg-gray-100 focus:outline-none focus:ring-0"
                                            />
                                            <span className="absolute left-3 text-gray-400">
                                                <CiLocationOn className="text-2xl" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 items-start gap-4 my-5">
                                    {/* Desired Date */}
                                    <div>
                                        <label className="block mb-2 font-semibold  text-[#474747]">{t('desiredDate5454')}</label>
                                        <div className="relative flex items-center">
                                            <input
                                                type="date"
                                                name='desiredDate'
                                                className="w-full py-2 px-10 border rounded bg-gray-100 focus:outline-none focus:ring-0"
                                            />
                                            <span className="absolute left-3 text-gray-400">
                                                <CiCalendar className="text-2xl" />
                                            </span>
                                        </div>
                                    </div>

                                    {/* Checkbox for Flexible Dates */}
                                    <div>
                                        <label className="block mb-2 font-semibold  text-[#474747]">
                                            Flexible Dates
                                        </label>
                                        <div className="">
                                            <div className="relative flex items-center">
                                                <input
                                                    type="date"
                                                    name='desiredFlexibleDate'
                                                    className="w-full py-2 px-10 border rounded bg-gray-100 focus:outline-none focus:ring-0"
                                                />
                                                <span className="absolute left-3 text-gray-400">
                                                    <CiCalendar className="text-2xl" />
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <label className="block mb-2 font-semibold  text-[#474747]">{t('Estimatedpurchaseprice')}</label>
                                    <div className="relative flex items-center">
                                        <input
                                            type="number"
                                            name='desiredPrice'
                                            placeholder={`Enter Your Price`}
                                            className="w-full py-2 px-10 border rounded bg-gray-100 focus:outline-none focus:ring-0"
                                        />
                                        <span className="absolute left-3 text-gray-400">
                                            <BsCurrencyDollar className="text-2xl" />
                                        </span>
                                    </div>
                                </div>
                                <div>

                                    <label id="flexibleDate" className="flex items-center gap-2 mt-10 font-semibold  text-[#474747]">
                                        <input
                                            type="checkbox"
                                            checked={showFlexibleDate}
                                            onChange={handleCheckboxChange}
                                            name="flexibleDate"
                                            className="w-4 h-4 text-primary focus:ring-0"
                                        />
                                        {/* {t('flexibleDates454')} */}
                                        I want to Post
                                    </label>



                                    {showFlexibleDate && (
                                        <div className="">
                                            <div>
                                                <label className="block mb-2 mt-5 text-sm font-semibold text-[#474747]">Product name</label>
                                                <div className="relative flex items-center">
                                                    <input
                                                        type="text"
                                                        name='name'
                                                        placeholder="Product name"
                                                        className="w-full py-2 px-2 border rounded bg-gray-100 focus:outline-none focus:ring-0"
                                                    />
                                                    {/* <span className="absolute left-3 text-gray-400">
                                                        <IoMdCheckbox className="text-2xl" />
                                                    </span> */}
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block mb-2 mt-5 text-sm font-semibold text-[#474747]">Quantity (kg)</label>
                                                <div className="relative  flex items-center">
                                                    <input
                                                        type="text"
                                                        name='quantity'
                                                        placeholder="weight (kg)"
                                                        className="w-full py-2 px-10 border rounded bg-gray-100 focus:outline-none focus:ring-0"
                                                    />
                                                    <span className="absolute left-3 text-gray-400">
                                                        <FaBox className="text-xl" />
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                {/* image upload  */}
                                                <label className="block mb-2 mt-5 text-sm font-semibold text-[#474747]">Upload image</label>
                                                <div className="relative flex items-center">
                                                    <input
                                                        type="file"
                                                        name='image'
                                                        className="w-full py-2 px-2 border rounded bg-gray-100 focus:outline-none focus:ring-0"
                                                    />
                                                    {/* <span className="absolute left-3 text-gray-400">
                                                        <CiImageOn className="text-2xl" />
                                                    </span> */}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div>
                            {
                                !showFlexibleDate ?
                                    <button
                                        type="submit"
                                        className="bg-gradient-to-r from-[#98DED9] to-[#C7FFD8] text-primary px-4 py-2 rounded-md mt-4 font-semibold flex items-center justify-center gap-3 w-full"
                                    >
                                        <IoSearchOutline />
                                        {/* {t('searchForRoute454')} */}
                                        Find a courier
                                    </button>
                                    :
                                    <button
                                        type="submit"
                                        className="bg-gradient-to-r from-[#98DED9] to-[#C7FFD8] text-primary px-4 py-2 rounded-md mt-4 font-semibold flex items-center justify-center gap-3 w-full"
                                    >
                                        <IoAddCircleOutline />
                                        Post Now
                                    </button>
                            }

                        </form>
                    </div>
                </div>
            </div>

            <section ref={routesSectionRef} id="routes" className="lg:w-[60%] w-[95%] mx-auto py-10">
                <h2 className="text-2xl font-semibold text-primary mt-10">Available routes</h2>

                {allSearchResutl.length > 0 ? (
                    allSearchResutl.map((item, index) => (
                        <div key={index} className="shadow-[0_0_15px_0_rgba(0,0,0,0.1)]   rounded-lg md:p-10 p-5 my-5">
                            <div className="md:flex flex-wrap items-center justify-between">
                                <div>
                                    <div className="flex items-center text-primary gap-3 font-medium">
                                        <div className="w-14 h-14 bg-[#f6f6fb] text-primary flex items-center justify-center rounded-lg">
                                            {item.transportMode === 'plane' ? (
                                                <LuPlane className="text-2xl" />
                                            ) : (
                                                <MdVerifiedUser className="text-2xl" />
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
                                        <h3 className="text-3xl font-semibold text-primary mb-3 flex items-center  gap-3">{item.price}€ <IoMdInformationCircle className="text-gray-500 text-xl cursor-pointer" /></h3>
                                        <span className="flex items-center gap-3">
                                            <IoShieldCheckmarkOutline className="text-green-500 capitalize" />
                                            including insurance and protection

                                        </span>

                                    </div>
                                    <div className='w-full mt-5'>
                                        <div className="bg-[#eeeff8] py-5 md:w-96 w-full px-10 rounded-lg text-primary">
                                            <h3 className="font-semibold">Your shipment</h3>
                                            <h2 className="text-2xl font-semibold">{item.totalSpace} kg</h2>
                                        </div>
                                        <div className='my-5 bg-[#F2FEF8] py-5 md:w-96 w-full md:px-10 px-5 rounded-lg text-primary text-sm'>
                                            <h2>Delivery by {item.user.firstName}</h2>
                                            <p><span className='font-semibold'>Today</span> {item.arrivalDate} at <span className='font-semibold'>{item.arrivalTime}</span></p>
                                            <p>In <span className='font-semibold'>Brazzaville (Maya-Maya)</span>
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
                        <h2 className="text-center text-2xl font-semibold text-red-500 my-20">No Search Data Found !!</h2>
                    </div>
                )}
            </section>


            <VideoAndCard />
            <CouriersAvailable searchIshopItem={getAllData?.data} />
            <HowDoesWork />
            <PopularProducts />

        </div>
    );
};

export default Page;
