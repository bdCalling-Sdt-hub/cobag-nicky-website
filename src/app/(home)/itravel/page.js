'use client';
import React, { useState } from 'react';
import { CiCalendar, CiCircleQuestion, CiLocationOn } from 'react-icons/ci';
import { FaAngleDown, FaAngleUp, FaArrowRightLong, FaMapLocation, FaMapLocationDot, FaMinus, FaPlane, FaPlus, FaSpinner } from 'react-icons/fa6';
import { IoBagOutline } from 'react-icons/io5';
import { MdInfo, MdOutlineDateRange, MdOutlineFileUpload, MdOutlineShoppingBag } from "react-icons/md";
import { RiShoppingBag4Line } from "react-icons/ri";
import { BiDollar } from "react-icons/bi";
import { FiCheck, FiMessageSquare } from 'react-icons/fi';
import { message, Modal, Space, TimePicker } from 'antd';
import { LuBox, LuPlane } from 'react-icons/lu';
import { PiAirplaneTilt, PiTrainLight } from "react-icons/pi";
import HalfEmptyLuggage from '@/app/components/ITravel/HalfEmptyLuggage';
import Courier from '@/app/components/ITravel/Courier';
import ITravelVideoSection from '@/app/components/ITravel/ITravelVideoSection';
import i18n from '@/app/utils/i18';
import { useGetUserQuery } from '@/app/redux/Features/Auth/getUser';
import { useCreatePlaneMutation, useGetAllPlatformQuery } from '@/app/redux/Features/Itravel/createPlane';
import toast, { Toaster } from 'react-hot-toast';
import { useGetAllCalculationDataQuery } from '@/app/redux/Features/calculation/getCalculationData';
import PopularProducts from '@/app/components/Ishop/PopularProducts';
import { FaRegQuestionCircle } from 'react-icons/fa';
import Link from 'next/link';



const onChangeTime2 = (time, timeString) => {
    console.log(time, timeString);
};
const onChangeTime1 = (time, timeString) => {
    console.log(time, timeString);
};





const Page = () => {
    const { t } = i18n;

    const { data: calculationData } = useGetAllCalculationDataQuery();

    const calculet = calculationData?.data[0];
    // console.log(calculet?.minimumPricePerTransaction, calculet?.purchaseKilosAirplane);

    const [defaultCruuent, setDefaultCruuent] = useState(5);
    // console.log(defaultCruuent);

    const handleDecressValue = () => {
        if (defaultCruuent < 5.5) {
            return message.error('You have no more luggage')
        }
        setDefaultCruuent(defaultCruuent - 0.5)
    }
    const handleIncressValue = () => {
        if (defaultCruuent > 6.5) {
            return message.error('You have no more luggage')
        }
        setDefaultCruuent(defaultCruuent + 0.5)
    }





    const [activeTab, setActiveTab] = useState(1); // Active tab state

    //============ check luggageValue =========
    const [showLuggage, setShowLuggage] = useState(null);
    const handleShowCheckLuggage = () => {
        setShowLuggage(!showLuggage);
    }
    const [luggageValue, setLuggageValue] = useState(0);
    const handleDecress = () => {
        if (luggageValue === 0) {
            return alert('You have no luggage')
        }
        setLuggageValue(luggageValue - 1)
    }
    const handleIncress = () => {
        setLuggageValue(luggageValue + 1)
    }

    //============ check baggageValue =========
    const [showBaggage, setShowBaggage] = useState(null);
    const [baggageValue, setBaggageValue] = useState(0);
    const handleBaggageDecress = () => {
        if (baggageValue === 0) {
            return alert('You have no baggage')
        }
        setBaggageValue(baggageValue - 1)
    }
    const handleBaggageIncress = () => {
        setBaggageValue(baggageValue + 1)
    }
    const handleShowCheckBaggage = () => {
        setShowBaggage(!showBaggage);
    }

    //============ check baggageValue =========
    const [showAvailable, setShowAvailable] = useState(false);
    const handleAvailable = () => {
        setShowAvailable(!showAvailable);
    }



    // ============================ Plane ============================
    const [fileList1, setFileList1] = useState(null); // Store the single file or null
    const [imagePreview, setImagePreview] = useState(null); // Store image preview URL

    // Handle file selection
    const handleFile1Change = (e) => {
        const file = e.target.files[0]; // Get the first file
        if (file) {
            setFileList1(file); // Update the file state
            const objectUrl = URL.createObjectURL(file); // Create a URL for the uploaded file
            setImagePreview(objectUrl); // Set the preview URL
        }
    };


    const { data } = useGetUserQuery();
    const userId = data?.user?._id;

    {/* form submit conditaion modal  */ }
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleShowModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // show modal after form submit 
    const [isModalOpen2, setIsModalOpen2] = useState(false);

    const handleShowModal2 = () => {
        setIsModalOpen2(true);
    };

    const handleCloseModal2 = () => {
        setIsModalOpen2(false);
        handleCloseModal();



    };




    const [createPlane, { isLoading: isCreatePlaneLoading }] = useCreatePlaneMutation();
    const [allFormData, setAllFormData] = useState(null);
    const { data: planeData } = useGetAllCalculationDataQuery();
    console.log(planeData?.data[0]?.missionPrice);



    const submitAllForm = async () => {

        if (activeTab === 1) {
            console.log('plane');

            try {
                const res = await createPlane(allFormData).unwrap();
                console.log(res);
                if (res?.success) {
                    // alert(res?.data)
                    toast.success('Travel created successfully !!')
                    //    alert('Travel created successfully !!')
                    console.log(res?.data)
                    // form.reset();
                    // fileList1 = null;
                    handleShowModal2();
                }
                else {
                    // alert(res?.data?.message)
                    console.log(res);
                    toast.success('Travel created Faild !!')
                }
            } catch (error) {
                console.log(error);
                // toast.success('Travel created Faild Please Try Again !!')
            }


        }

    }



    // console.log(data?.user);



    const handleSubmitTravel = async (e) => {

        e.preventDefault();
        const form = e.target;
        if (form.departureCity.value.length < 3) {
            return toast.error('Please enter a valid departure city')
        }
        if (form.arrivalCity.value.length < 3) {
            return toast.error('Please enter a valid arrival city')
        }
        if (form.departureDate.value.length < 3) {
            return toast.error('Please enter a valid departure date')
        }
        if (form.arrivalDate.value.length < 3) {
            return toast.error('Please enter a valid arrival date')
        }
        if (form.destinationArea.value.length < 3) {
            return toast.error('Please enter a valid destination area')
        }

        const formData = {
            userId: userId,
            transportMode: 'plane',
            transportType: form.transportType.value,
            // flightNumber: form.flightNumber.value,
            departureCity: form.departureCity.value,
            arrivalCity: form.arrivalCity.value,
            departureDate: form.departureDate.value,
            arrivalDate: form.arrivalDate.value,

            departureTime: form.departureTime.value,
            arrivalTime: form.arrivalTime.value,

            handLuggage: luggageValue || 0,
            checkedBaggage: baggageValue || 0,
            availableToBeCourier: showAvailable ? true : false,

            maxpurchAmountAdvance: showAvailable ? form.availableToBeCourier.value : 0,

            courierOptions: {
                maxPurchaseAmount: showAvailable ? calculet?.minimumPricePerTransaction : 0
            },
            destinationArea: form.destinationArea.value,
            price: (planeData?.data[0]?.missionPrice) + (defaultCruuent * (luggageValue + baggageValue)) + (defaultCruuent * (luggageValue + baggageValue) * 0.2),

        }

        console.log(formData);

        setAllFormData(formData);

        handleShowModal();



        // Add your form submission logic here
    };

    // ============================ Train ============================
    const [fileList2, setFileList2] = useState(null); // Store the single file or null
    const [imagePreview2, setImagePreview2] = useState(null); // Store image preview URL

    // Handle file selection
    const handleFile2Change = (e) => {
        const file = e.target.files[0]; // Get the first file
        if (file) {
            setFileList2(file); // Update the file state
            const objectUrl = URL.createObjectURL(file); // Create a URL for the uploaded file
            setImagePreview2(objectUrl); // Set the preview URL
        }
    };

    console.log(fileList1);


    // ============================

    const [smallVlaue, setSmallVlaue] = useState(0);
    const handleSmallIncress = () => {
        if (largeVlaue > 0 || mediumVlaue > 0) {
            return toast.error('You have already selected large or medium Vlaue')
        }
        setSmallVlaue(smallVlaue + 1)
    }
    const handleSmallDecress = () => {
        if (smallVlaue === 0) {
            return alert('You have no small Vlaue')
        }
        setMediumVlaue(0);
        setLargeVlaue(0);
        setSmallVlaue(smallVlaue - 1)
    }

    const [mediumVlaue, setMediumVlaue] = useState(0);
    const handleMediumIncress = () => {
        if (smallVlaue > 0 || largeVlaue > 0) {
            return toast.error('You have already selected large or small Vlaue')
        }
        setMediumVlaue(mediumVlaue + 1)
    }
    const handleMediumDecress = () => {
        if (mediumVlaue === 0) {
            return alert('You have no medium Vlaue')
        }
        setSmallVlaue(0);
        setLargeVlaue(0);
        setMediumVlaue(mediumVlaue - 1)
    }

    const [largeVlaue, setLargeVlaue] = useState(0);
    const handleLargeIncress = () => {
        if (smallVlaue > 0 || mediumVlaue > 0) {
            return toast.error('You have already selected medium or small Vlaue')
        }
        setLargeVlaue(largeVlaue + 1)
    }
    const handleLargeDecress = () => {
        if (largeVlaue === 0) {
            return alert('You have no large Vlaue')
        }
        setSmallVlaue(0);
        setMediumVlaue(0);
        setLargeVlaue(largeVlaue - 1)
    }




    // console.log(smallVlaue, mediumVlaue, largeVlaue);

    const { data: allPlatform } = useGetAllPlatformQuery()
    const platform = allPlatform?.data[0]
    console.log(platform?.train);


    const handleSubmitTrain = async (e) => {
        e.preventDefault();
        const form = e.target;

        // if (!fileList2) {
        //     return toast.error('Please upload your ticket')
        // }
        // if (form.flightNumber.value.length < 3) {
        //     return toast.error('Please enter a valid train number')
        // }
        if (form.departureCity.value.length < 3) {
            return toast.error('Please enter a valid departure city')
        }
        if (form.arrivalCity.value.length < 3) {
            return toast.error('Please enter a valid arrival city')
        }
        if (form.departureDate.value.length < 3) {
            return toast.error('Please enter a valid departure date')
        }
        if (form.arrivalDate.value.length < 3) {
            return toast.error('Please enter a valid arrival date')
        }
        if (form.departureTime.value.length < 3) {
            return toast.error('Please enter a valid departure time')
        }
        if (form.arrivalTime.value.length < 3) {
            return toast.error('Please enter a valid arrival time')
        }
        if (form.destinationArea.value.length < 3) {
            return toast.error('Please enter a valid destination area')
        }
        // enum: ['small', 'medium', 'large']

        const sizePrice =
            (smallVlaue > 0 ? smallVlaue * platform?.train?.small : 0) +
            (mediumVlaue > 0 ? mediumVlaue * platform?.train?.medium : 0) +
            (largeVlaue > 0 ? largeVlaue * platform?.train?.large : 0);

        const missionPrice = planeData?.data[0]?.missionPrice || 0;

        const fromData = {
            userId: userId,
            transportMode: 'train',
            transportType: form.transportType.value,
            Size: smallVlaue > 0 && 'small' || mediumVlaue > 0 && 'medium' || largeVlaue > 0 && 'large',

            // flightNumber: form.flightNumber.value,
            totalSpace: smallVlaue > 0 && smallVlaue || mediumVlaue > 0 && mediumVlaue || largeVlaue > 0 && largeVlaue,
            departureCity: form.departureCity.value,
            arrivalCity: form.arrivalCity.value,
            departureDate: form.departureDate.value,
            arrivalDate: form.arrivalDate.value,
            departureTime: form.departureTime.value,
            arrivalTime: form.arrivalTime.value,

            availableToBeCourier: showAvailable ? true : false,
            destinationArea: form.destinationArea.value,


            price: sizePrice + missionPrice + (sizePrice + missionPrice) * 0.2,


            courierOptions: {
                maxPurchaseAmount: showAvailable ? form.maxpurchAmountAdvance.value : 0 ,
            }

        }

        setAllFormData(fromData);


        console.log(fromData);

        // return
        try {
            const res = await createPlane(fromData).unwrap();
            console.log(res);
            if (res?.success) {
                toast.success('Travel created successfully !!')
                console.log(res?.data)
                form.reset();
                handleShowModal2();
            }
            else {
                console.log(res);
                toast.error('Travel created Faild !!')
            }
        } catch (error) {
            console.log(error);
            toast.error('Travel created Faild Please Try Again !!')
        }





    };




    return (
        <div>
            <Toaster toastOptions={{ duration: 5000 }} containerStyle={{ zIndex: 99999999 }} position="top-center" />
            <div className={` duration-500 ${activeTab === 1 ? 'bg-[url("/Images/Itravel/travel-plane-1.png")] ' : 'bg-[url("/Images/Itravel/travel-tran-1.png")] '}  bg-cover bg-center h-auto w-full `}>
                <div className='w-full h-full bg-[#0000008e] lg:py-10 py-5 px-5 md:px-0'>

                    <div className='flex flex-col items-center justify-center lg:py-10 py-5 lg:px-0 px-5 text-center text-white'>
                        <h2 className='lg:text-5xl text-3xl font-semibold mb-3'>
                            {/* {t('OfferYourJourney')} */}
                            Travel smart
                        </h2>
                        <p className='lg:text-xl'>
                            {/* {t('ResellUnusedKilos')} */}
                            Turn your lost pounds into gains with every trip
                        </p>
                    </div>

                    <div className='max-w-3xl mx-auto backdrop-blur-lg bg-[#ffffff85] md:p-8 p-5 rounded-2xl'>
                        {/* Tab Navigation */}
                        <span className='mb-2 font-semibold block text-[#474747]'>Mode of transport</span>

                        <div className="flex justify-center gap-5 mb-6">
                            <button
                                className={`px-4 py-3 text-lg font-medium w-[50%] rounded-md flex items-center justify-center gap-2  ${activeTab === 1 ? ' bg-primary text-white ' : 'bg-white text-primary'
                                    }`}
                                onClick={() => setActiveTab(1)}
                            >
                                <LuPlane /> {t('Plane')}
                            </button>
                            <button
                                className={`px-4 py-3 text-lg font-medium w-[50%] rounded-md flex items-center justify-center gap-2   ${activeTab === 2 ? ' bg-primary text-white ' : 'bg-white text-primary'
                                    }`}
                                onClick={() => setActiveTab(2)}
                            >
                                <PiTrainLight />{t('Train')}
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className=''>

                            {activeTab === 1 && (
                                <div>
                                    <form onSubmit={handleSubmitTravel} className="space-y-6">

                                        <div className="">
                                            <span className='font-semibold block text-[#474747] mb-2'>Type of journey
                                            </span>
                                            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                                                {/* First Radio Button */}
                                                <label htmlFor="radio1" className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        className="hidden peer"
                                                        type="radio"
                                                        name="transportType"
                                                        id="radio1"
                                                        value="direct" // Set the value here
                                                        defaultChecked
                                                    />
                                                    <div className="peer-checked:bg-primary w-full text-center bg-white text-gray-600 peer-checked:text-white text-xs rounded-lg px-4 py-3">
                                                        <span className="font-semibold">{t("Direct")}</span>
                                                    </div>
                                                </label>

                                                {/* Second Radio Button */}
                                                <label htmlFor="radio2" className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        className="hidden peer"
                                                        type="radio"
                                                        name="transportType"
                                                        id="radio2"
                                                        value="withCorrespondence" // Set the value here
                                                    />
                                                    <div className="peer-checked:bg-primary w-full text-center peer-checked:text-white text-xs bg-white text-gray-600 rounded-lg px-4 py-3">
                                                        <span className="font-semibold">{t("WithCorrespondence")}</span>
                                                    </div>
                                                </label>
                                            </div>

                                        </div>


                                        {/* Departure and Arrival */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block font-semibold text-[#474747]">
                                                    {t('DepartureCity')}</label>
                                                <div className="relative mt-1">
                                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                        {/* Icon */}
                                                        <CiLocationOn className='text-2xl text-gray-500' />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name="departureCity"
                                                        className="block w-full pl-10 border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                        placeholder="Paris"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="font-semibold block text-[#474747]">{t('ArrivalCity')}</label>
                                                <div className="relative mt-1">
                                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                        {/* Icon */}
                                                        <CiLocationOn className='text-2xl text-gray-500' />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name='arrivalCity'
                                                        className="block w-full pl-10 border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                        placeholder="Lyon"
                                                    />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className=" font-semibold block text-[#474747]">
                                                    {/* {t('DepartureDate')} */}
                                                    Departure date and time
                                                </label>
                                                <div className="relative mt-1">
                                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                        {/* Icon */}
                                                        <CiCalendar className='text-2xl text-[#737373]' />
                                                    </div>
                                                    <input
                                                        type="date"
                                                        name='departureDate'
                                                        className="mt-1 pl-10 block w-full border text-[#737373] border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="  mb-2 font-semibold block text-[#474747]">
                                                    {/* {t('ArrivalDate')} */}
                                                    Date and time of arrival
                                                </label>
                                                <div className="relative mt-1">
                                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                        {/* Icon */}
                                                        <CiCalendar className='text-2xl text-[#737373]' />
                                                    </div>
                                                    <input
                                                        type="date"
                                                        name='arrivalDate'
                                                        className="mt-1 pl-10 block w-full border text-[#737373] border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex items-center justify-between gap-5 '>
                                            <div className='w-[50%]'>
                                                <span className='font-semibold block text-[#474747] mb-2'>{t('DepartureTime')}</span>
                                                <TimePicker name='departureTime' className='w-full py-3' use12Hours format="h:mm a" onChange={onChangeTime2} />
                                            </div>
                                            <div className='w-[50%]'>
                                                <span className='font-semibold block text-[#474747] mb-2'>{t('ArrivalTime')}</span>
                                                <TimePicker name='arrivalTime' className='w-full py-3' use12Hours format="h:mm a" onChange={onChangeTime1} />
                                            </div>
                                        </div>


                                        <div>
                                            <span className="font-semibold block text-[#474747] mb-2">
                                                {/* {t('AvailableWeight')} */}
                                                Weight available for resale
                                            </span>

                                            <div className='bg-white p-5 rounded-lg '>

                                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>

                                                    <div className=' '>
                                                        <label htmlFor="handLuggage" className='flex items-center justify-between '>
                                                            <div className='flex items-center gap-3'>
                                                                <div className='w-12 h-12 hover:rotate-45 duration-300 bg-[#e7eaf5] rounded-md flex items-center justify-center'>
                                                                    <IoBagOutline className='text-2xl text-primary' />
                                                                </div>
                                                                <h2 className='text-[18px] font-semibold text-[#222]'>{t('HandLuggage')}
                                                                    <span className='text-sm block mt-1 text-gray-500 font-normal'> Maximum 13kg per baggage</span>

                                                                </h2>
                                                            </div>
                                                        </label>
                                                        <div className='flex items-center gap-5 mt-5 justify-center'>
                                                            {/* <p>{t('AvailableWeight')}:</p> */}
                                                            <div className='flex items-center justify-start gap-3'>
                                                                {/* incress and decress button and input field  */}

                                                                <div className='w-8 h-8 cursor-pointer bg-gray-200 flex items-center justify-center rounded-full'>
                                                                    <FaMinus onClick={handleDecress} className='cursor-pointer text-xl' />
                                                                </div>
                                                                <span className='px-10 rounded-lg py-1 border-2 border-gray-200'>{luggageValue}</span>
                                                                <div className='w-8 h-8 cursor-pointer bg-gray-200 flex items-center justify-center rounded-full'>
                                                                    <FaPlus onClick={handleIncress} className='cursor-pointer text-xl' />
                                                                </div>
                                                            </div>
                                                            <p>kg</p>
                                                        </div>
                                                    </div>

                                                    <div className=' '>
                                                        <label htmlFor="handBaggage" className='flex items-center justify-between '>
                                                            <div className='flex items-center gap-3'>
                                                                <div className='w-12 h-12 hover:rotate-45 duration-300 bg-[#e7eaf5] rounded-md flex items-center justify-center'>
                                                                    <RiShoppingBag4Line className='text-2xl text-primary' />
                                                                </div>
                                                                <h2 className='text-[18px] font-semibold text-[#222]'>{t('CheckedBaggage')}
                                                                    <span className='text-sm block mt-1 text-gray-500 font-normal'>Maximum 23kg per piece of luggage</span>
                                                                </h2>
                                                            </div>
                                                        </label>
                                                        <div className='flex items-center mt-5 gap-5 justify-center'>
                                                            {/* <p>{t('AvailableWeight')}:</p> */}
                                                            <div className='flex items-center justify-start gap-3'>
                                                                {/* incress and decress button and input field  */}

                                                                <div className='w-8 h-8 cursor-pointer bg-gray-200 flex items-center justify-center rounded-full'>
                                                                    <FaMinus onClick={handleBaggageDecress} className='cursor-pointer text-xl' />
                                                                </div>
                                                                <span className='px-10 rounded-lg py-1 border-2 border-gray-200'>{baggageValue}</span>
                                                                <div className='w-8 h-8 cursor-pointer bg-gray-200 flex items-center justify-center rounded-full'>
                                                                    <FaPlus onClick={handleBaggageIncress} className='cursor-pointer text-xl' />
                                                                </div>
                                                            </div>
                                                            <p>kg</p>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className='mt-10'>
                                                    <h2 className='mb-1 text-[#444] font-semibold'>Resale price per kilo</h2>
                                                    <div className='bg-[#F9FAFB] justify-between p-5 rounded-lg flex items-center gap-5'>
                                                        <div>
                                                            <h2 className='text-2xl font-semibold text-primary mb-3'>{defaultCruuent}€/kg</h2>
                                                            <span className='text-sm '>Minimum transaction: €12</span>
                                                        </div>
                                                        <div className='flex items-center gap-3 flex-col'>
                                                            <FaAngleUp onClick={handleIncressValue} className='cursor-pointer p-1 text-2xl duration-300 hover:bg-slate-200 rounded-full' />
                                                            <FaAngleDown onClick={handleDecressValue} className='cursor-pointer p-1 text-2xl duration-300 hover:bg-slate-200 rounded-full' />
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>



                                        <div>
                                            {/* Checkbox with Label */}
                                            <label htmlFor="available" className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    onChange={handleAvailable} // Use onChange instead of onClick for checkboxes
                                                    className="w-5 h-5"
                                                    type="checkbox"
                                                    name="available"
                                                    id="available"
                                                />
                                                <span className="flex items-center gap-1 font-semibold text-[#474747]">
                                                    {t('AvailableToBeACourier')} <FaRegQuestionCircle className='font-semibold' />
                                                    {/* <MdInfo /> */}
                                                </span>
                                            </label>

                                            {/* Conditional Content */}
                                            {showAvailable && (
                                                <div className="mt-2 bg-white p-5 rounded-lg">
                                                    <p className='text-[#393939] font-medium'>{t('MaximumPurchaseAmountYouAreWillingToAdvance')}</p>
                                                    <div className="relative mt-2">
                                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                            {/* Icon */}
                                                            <BiDollar className='text-2xl text-[#737373]' />
                                                        </div>
                                                        <input
                                                            type="number"
                                                            name='availableToBeCourier'
                                                            placeholder={t('EnterTheAmount')}
                                                            className="mt-1 pl-10 block w-full border text-[#737373] border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                        />
                                                    </div>
                                                    <span className='text-[#737373] text-xs mt-1'>{t('ThisAmountWillBeVisibleToPotentialBuyers')}</span>
                                                </div>
                                            )}
                                        </div>


                                        {/* <div>
                                            <label htmlFor="available2" className="flex items-center gap-2 cursor-pointer">
                                                <input  // Use onChange instead of onClick for checkboxes
                                                    className="w-5 h-5"
                                                    type="checkbox"
                                                    name="availableReturn"
                                                    id='available2'
                                                />
                                                <span className="flex items-center gap-1 font-semibold text-[#474747]">
                                                    Also fill my return journey
                                                </span>
                                            </label>
                                        </div> */}

                                        {/* this field for  Destination airport/station  */}
                                        <div className="w-full "> {/* Container for centering */}
                                            <label className="font-semibold block text-[#474747] mb-2" htmlFor="destinationAirport">
                                                Destination airport/station *
                                            </label>
                                            <div className="relative mt-2">
                                                {/* Input field container */}
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                    {/* Map Location Icon */}
                                                    <FaMapLocationDot className="text-2xl text-[#737373]" />
                                                </div>
                                                <input
                                                    type="text"
                                                    id="destinationArea"
                                                    required
                                                    name="destinationArea"
                                                    placeholder="Destination airport/station"
                                                    className="w-full pl-12 pr-4 py-2 border  rounded-md focus:outline-none  text-[#474747] placeholder-[#737373]"
                                                />
                                            </div>
                                        </div>


                                        {/* Submit Button */}
                                        <div className="mt-6">
                                            <button
                                                type="submit"
                                                className="w-full bg-primary text-white py-3 rounded-md font-semibold transition"
                                            >
                                                {t('PublishRoute')}
                                                {isCreatePlaneLoading && <FaSpinner className="animate-spin ml-2" />}
                                            </button>
                                        </div>



                                    </form>
                                </div>
                            )}


                            {activeTab === 2 && (
                                <div>
                                    <form onSubmit={handleSubmitTrain} className="space-y-6">

                                        <div className="">
                                            <span className='font-semibold block text-[#474747] mb-2 '>{t('TransportMood')}</span>
                                            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
                                                {/* First Radio Button */}
                                                <label htmlFor="radio1" className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        className="hidden peer"
                                                        type="radio"
                                                        name="transportType"
                                                        id="radio1"
                                                        value="direct" // Set the value here
                                                        defaultChecked
                                                    />
                                                    <div className="peer-checked:bg-primary w-full text-center text-sm bg-white text-primary peer-checked:text-white  rounded-lg px-3 py-3">
                                                        <span className="font-semibold">{t("Direct")}</span>
                                                    </div>
                                                </label>

                                                {/* Second Radio Button */}
                                                <label htmlFor="radio2" className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        className="hidden peer"
                                                        type="radio"
                                                        name="transportType"
                                                        id="radio2"
                                                        value="withCorrespondence" // Set the value here
                                                    />
                                                    <div className="peer-checked:bg-primary w-full text-center text-sm peer-checked:text-white  bg-white text-primary rounded-lg px-3 py-3">
                                                        <span className="font-semibold">{t("WithCorrespondence")}</span>
                                                    </div>
                                                </label>
                                            </div>

                                        </div>



                                        {/* Departure and Arrival */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="font-semibold block text-[#474747]">
                                                    {t('DepartureCity')}</label>
                                                <div className="relative mt-1">
                                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                        {/* Icon */}
                                                        <CiLocationOn className='text-2xl text-gray-500' />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name="departureCity"
                                                        className="block w-full pl-10 border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                        placeholder="Paris"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="font-semibold block text-[#474747] ">{t('ArrivalCity')}</label>
                                                <div className="relative mt-1">
                                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                        {/* Icon */}
                                                        <CiLocationOn className='text-2xl text-gray-500' />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name='arrivalCity'
                                                        className="block w-full pl-10 border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                        placeholder="Lyon"
                                                    />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="font-semibold block text-[#474747] mb-2">{t('DepartureDate')}</label>
                                                <div className="relative mt-1">
                                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                        {/* Icon */}
                                                        <CiCalendar className='text-2xl text-[#737373]' />
                                                    </div>
                                                    <input
                                                        type="date"
                                                        name='departureDate'
                                                        className="mt-1 pl-10 block w-full border text-[#737373] border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block mb-2 font-semibold text-[#474747]">{t('ArrivalDate')}</label>
                                                <div className="relative mt-1">
                                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                        {/* Icon */}
                                                        <CiCalendar className='text-2xl text-[#737373]' />
                                                    </div>
                                                    <input
                                                        type="date"
                                                        name='arrivalDate'
                                                        className="mt-1 pl-10 block w-full border text-[#737373] border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex items-center justify-between gap-5 '>
                                            <div className='w-[50%]'>
                                                <span className='font-semibold block text-[#474747] mb-2'>{t('DepartureTime')}</span>
                                                <TimePicker name='departureTime' className='w-full py-3' use12Hours format="h:mm a" onChange={onChangeTime2} />
                                            </div>
                                            <div className='w-[50%]'>
                                                <span className='font-semibold block text-[#474747] mb-2'>{t('ArrivalTime')}</span>
                                                <TimePicker name='arrivalTime' className='w-full py-3' use12Hours format="h:mm a" onChange={onChangeTime1} />
                                            </div>
                                        </div>


                                        <div>
                                            <span className='font-semibold block text-[#474747] mb-2'>Accepted package sizes</span>
                                            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                                                <div className='p-5 bg-white rounded-md'>
                                                    <div className='flex flex-col gap-2 flex-wrap mb-5' >
                                                        <h2 className='font-semibold '>Small (s)</h2>
                                                        <div className='flex items-center gap-3'>
                                                            <div onClick={handleSmallDecress} className='text-2xl w-10  h-10 p-3  bg-[#e7eaf5] rounded-full cursor-pointer flex items-center justify-center'>
                                                                <FaMinus />
                                                            </div>
                                                            <span>{smallVlaue}</span>
                                                            <div onClick={handleSmallIncress} className='text-2xl w-10  h-10 p-3  bg-[#e7eaf5] rounded-full cursor-pointer flex items-center justify-center'>
                                                                <FaPlus />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul className='font-[500] list-disc my-3'>
                                                        <span>Examples:</span>
                                                        <li className='ml-8'>Documents</li>
                                                        <li className='ml-8'>Keys</li>
                                                        <li className='ml-8'>Books</li>
                                                        <li className='ml-8'>Small objects</li>
                                                    </ul>
                                                    <p className=''>Maximum: 5 packages</p>
                                                </div>
                                                <div className='p-5 bg-white rounded-md'>
                                                    <div className='flex flex-col gap-2 flex-wrap mb-5' >
                                                        <h2 className='font-semibold'>Medium (M)</h2>
                                                        <div className='flex items-center gap-3'>
                                                            <div onClick={handleMediumDecress} className='text-2xl w-10  h-10 p-3  bg-[#e7eaf5] rounded-full cursor-pointer flex items-center justify-center'>
                                                                <FaMinus />
                                                            </div>
                                                            <span>{mediumVlaue}</span>
                                                            <div onClick={handleMediumIncress} className='text-2xl w-10  h-10 p-3  bg-[#e7eaf5] rounded-full cursor-pointer flex items-center justify-center'>
                                                                <FaPlus />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul className='font-[500] list-disc my-3'>
                                                        <span>Examples:</span>
                                                        <li className='ml-8'>Shoe box</li>
                                                        <li className='ml-8'>Small travel bag</li>
                                                        <li className='ml-8'>BooMedium cardboardks</li>
                                                    </ul>
                                                    <p className=''>Maximum: 5 packages</p>
                                                </div>
                                                <div className='p-5 bg-white rounded-md'>
                                                    <div className='flex flex-col gap-2 flex-wrap mb-5' >
                                                        <h2 className='font-semibold'>Large (L)</h2>
                                                        <div className='flex items-center gap-3'>
                                                            <div onClick={handleLargeDecress} className='text-2xl w-10  h-10 p-3  bg-[#e7eaf5] rounded-full cursor-pointer flex items-center justify-center'>
                                                                <FaMinus />
                                                            </div>
                                                            <span>{largeVlaue}</span>
                                                            <div onClick={handleLargeIncress} className='text-2xl w-10  h-10 p-3  bg-[#e7eaf5] rounded-full cursor-pointer flex items-center justify-center'>
                                                                <FaPlus />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul className='font-[500] list-disc my-3'>
                                                        <span>Examples:</span>
                                                        <li className='ml-8'>Folding bike</li>
                                                        <li className='ml-8'>Large suitcase</li>
                                                        <li className='ml-8'>Large cardboard box</li>
                                                        <li className='ml-8'>Small objects</li>
                                                    </ul>
                                                    <p className=''>Maximum: 5 packages</p>
                                                </div>
                                            </div>

                                        </div>


                                        <div>
                                            {/* Checkbox with Label */}
                                            <label htmlFor="available" className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    onChange={handleAvailable} // Use onChange instead of onClick for checkboxes
                                                    className="w-5 h-5"
                                                    type="checkbox"
                                                    name="available"
                                                    id="available"
                                                />
                                                <span className="flex items-center gap-1 font-semibold text-[#474747]">
                                                    {t('AvailableToBeACourier')}
                                                    {/* <MdInfo /> */}
                                                </span>
                                            </label>

                                            {/* Conditional Content */}
                                            {showAvailable && (
                                                <div className="mt-2 bg-white p-5 rounded-lg">
                                                    <p className='text-[#393939] font-medium'>{t('MaximumPurchaseAmountYouAreWillingToAdvance')}</p>
                                                    <div className="relative mt-2">
                                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                            {/* Icon */}
                                                            <BiDollar className='text-2xl text-[#737373]' />
                                                        </div>
                                                        <input
                                                            type="number"
                                                            name='maxpurchAmountAdvance'
                                                            placeholder={t('EnterTheAmount')}
                                                            className="mt-1 pl-10 block w-full border text-[#737373] border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                        />
                                                    </div>
                                                    <span className='text-[#737373] text-xs mt-1'>{t('ThisAmountWillBeVisibleToPotentialBuyers')}</span>
                                                </div>
                                            )}
                                        </div>


                                        {/* <div>
                                            <span className='font-semibold  text-gray-700'>{t('MessageOptional')}</span>
                                            <div className="relative mt-2 ">
                                                <div className="absolute inset-y-0 left-0 pl-2 top-5">
                                                    
                                                    <FiMessageSquare className='text-2xl text-[#737373]' />
                                                </div>
                                                <textarea
                                                    type="number"
                                                    name='message'
                                                    placeholder='Enter the message' className="mt-1 pl-10 block w-full border text-[#737373] border-gray-300 rounded-md shadow-sm px-10 py-5 focus:outline-none focus:ring-blue-500 focus:border-blue-500 min-h-[250px]"
                                                />
                                            </div>
                                        </div> */}
                                        {/* 
                                        <div>
                                            <label htmlFor="available2" className="flex items-center gap-2 cursor-pointer">
                                                <input  // Use onChange instead of onClick for checkboxes
                                                    className="w-5 h-5"
                                                    type="checkbox"
                                                    name="availableReturn"
                                                    id='available2'
                                                />
                                                <span className="flex items-center gap-1 font-semibold  text-[#474747]">
                                                    Also fill my return journey
                                                </span>
                                            </label>
                                        </div> */}


                                        <div className="w-full "> {/* Container for centering */}
                                            <label className="font-semibold block text-[#474747] mb-2" htmlFor="destinationAirport">
                                                Destination airport/station *
                                            </label>
                                            <div className="relative mt-2">
                                                {/* Input field container */}
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                    {/* Map Location Icon */}
                                                    <FaMapLocationDot className="text-2xl text-[#737373]" />
                                                </div>
                                                <input
                                                    type="text"
                                                    id="destinationArea"
                                                    required
                                                    name="destinationArea"
                                                    placeholder="Destination airport/station"
                                                    className="w-full pl-12 pr-4 py-2 border  rounded-md focus:outline-none  text-[#474747] placeholder-[#737373]"
                                                />
                                            </div>
                                        </div>


                                        {/* Submit Button */}
                                        <div className="mt-6">
                                            <button
                                                type="submit"
                                                className="w-full bg-primary text-white py-3 rounded-md font-semibold transition"
                                            >
                                                {t('PublishRoute')}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}

                        </div>



                    </div>
                    <Link href='#courier' className='md:text-xl cursor-pointer flex items-center justify-center gap-2 font-semibold text-center text-white mt-5'>View purchase request announcements <FaArrowRightLong />   </Link>
                </div>
            </div>

            {/* form submit conditaion modal  */}
            <Modal
                className="!z-[999]"   // Custom class for modal
                open={isModalOpen}      // Tied to the modal visibility state
                onCancel={handleCloseModal} // Custom close handler to set isModalOpen to false
                footer={null}           // No footer buttons, you can add your custom footer if needed
                width={500}             // Adjust modal width as per your requirement
            >
                <div className='p-8 !text-[16px] rounded-md shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]'>
                    <div className='mb-5'>
                        <h2>Checking the contents of the package</h2>
                        <p>
                            To ensure safety and compliance, it is imperative to verify on-site that the content precisely matches the description, photos, and videos provided prior to the mission.
                        </p>
                    </div>

                    <h3 className='mb-3'>Authorized products</h3>
                    <ul className='mb-3' style={{ listStyleType: 'none', paddingLeft: 0 }}>
                        <li>&#10004; <span className='font-semibold'>Thin clothing</span> (excluding down jackets, shoes with thick soles, etc.)</li>
                        <li>&#10004; <span className='font-semibold'>Computer and telephone accessories and products</span></li>
                        <li>&#10004; <span className='font-semibold'>Books, magazines, and documents</span></li>
                        <li>&#10004; <span className='font-semibold'>Cosmetic products</span> in compliant packaging</li>
                        <li>&#10004; <span className='font-semibold'>Office supplies and stationery</span></li>
                        <li>&#10004; <span className='font-semibold'>Food and beverage products  </span>in transparent non-perishable containers</li>
                        <li>&#10004; <span className='font-semibold'>Sports and leisure goods</span></li>
                    </ul>
                    <p>Please ensure that the declared content meets these criteria and consult the guidelines or our customer service if in doubt.</p>

                    {/* Modal footer with close button */}
                    <button onClick={submitAllForm} className='w-full py-3 bg-[#161d6f] text-[#fff] rounded-lg' type="primary" size="large" style={{ marginTop: '20px' }}>
                        I accept the conditions
                    </button>
                </div>
            </Modal>

            {/* show modal after form submit  */}
            <Modal
                className="!z-[999]" // Custom class for modal
                open={isModalOpen2}    // Tied to modal visibility state
                onCancel={handleCloseModal2} // Custom close handler
                width={600}            // Adjust modal width as per your requirement
                closeIcon={null}       // Hide the close icon
                footer={null}          // No footer, as per the design
                centered               // Center the modal on the screen
            >
                {/* Modal Content */}
                <div className="bg-[#fff] rounded-lg p-6">
                    <div className='flex items-center mx-auto justify-center w-12 h-12 bg-[#8ef8ae70] rounded-full text-[#2e8b4a70]'>
                        <FiCheck className='text-3xl' />
                    </div>
                    {/* Title */}
                    <div className="text-xl my-3 font-semibold text-center text-[#161d6f]">
                        Your trip has been successfully recorded!
                    </div>

                    {/* Trip Details Section */}
                    <div className="mt-4">
                        <div className="text-sm text-gray-600">
                            <strong>Trip summary</strong>
                        </div>
                        <div className="mt-2 text-sm text-gray-800">
                            <div className='shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg flex gap-5 text-base my-3 items-center '> <PiAirplaneTilt className='text-3xl text-[#161d6f]' /><span>Flight: <br /> {allFormData?.departureCity} → {allFormData?.arrivalCity}</span></div>
                            <div className='shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg flex gap-5 text-base items-center'><MdOutlineDateRange className='text-3xl text-[#161d6f]' /> <span className=''>Departure: <br /> {allFormData?.departureDate} at {allFormData?.departureTime}</span></div>
                            <div className='shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg flex gap-5 text-base items-center'><LuBox className='text-3xl text-[#161d6f]' /> <span>Arrival: <br /> {allFormData?.arrivalDate} at {allFormData?.arrivalTime}</span></div>
                            <div className="mt-2 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg flex gap-5 text-base items-center "><MdOutlineShoppingBag className='text-3xl text-[#161d6f]' /><span>Available space:  Hand luggage: {allFormData?.handLuggage}kg, <br /> Checked baggage: {allFormData?.checkedBaggage}kg</span></div>
                            <p className='my-5 text-center'>Your trip is now visible to other CoBag users who may need your services. You will be notified as soon as a user contacts you.</p>
                        </div>
                    </div>

                    {/* Close Button */}
                    <div className="">
                        <button
                            onClick={handleCloseModal2}
                            className="w-full py-3 bg-[#161d6f] text-white rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </Modal>


            <ITravelVideoSection />
            <HalfEmptyLuggage />

            <Courier />
            <PopularProducts />


        </div>
    );
};

export default Page;
