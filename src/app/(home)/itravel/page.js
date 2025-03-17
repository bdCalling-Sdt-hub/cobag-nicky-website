'use client';
import React, { useState } from 'react';
import { CiCalendar, CiLocationOn } from 'react-icons/ci';
import { FaMinus, FaPlus, FaSpinner } from 'react-icons/fa6';
import { IoBagOutline } from 'react-icons/io5';
import { MdInfo, MdOutlineFileUpload } from "react-icons/md";
import { RiShoppingBag4Line } from "react-icons/ri";
import { BiDollar } from "react-icons/bi";
import { FiMessageSquare } from 'react-icons/fi';
import { Space, TimePicker } from 'antd';
import { LuPlane } from 'react-icons/lu';
import { PiTrainLight } from "react-icons/pi";
import HalfEmptyLuggage from '@/app/components/ITravel/HalfEmptyLuggage';
import Courier from '@/app/components/ITravel/Courier';
import ITravelVideoSection from '@/app/components/ITravel/ITravelVideoSection';
import i18n from '@/app/utils/i18';
import { useGetUserQuery } from '@/app/redux/Features/Auth/getUser';
import { useCreatePlaneMutation } from '@/app/redux/Features/Itravel/createPlane';
import toast, { Toaster } from 'react-hot-toast';
import { useGetAllCalculationDataQuery } from '@/app/redux/Features/calculation/getCalculationData';



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
    console.log(calculet?.minimumPricePerTransaction, calculet?.purchaseKilosAirplane);





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

    // ============================

    const [smallVlaue, setSmallVlaue] = useState(0);
    const handleSmallIncress = () => {
        setSmallVlaue(smallVlaue + 1)
    }
    const handleSmallDecress = () => {
        if (smallVlaue === 0) {
            return alert('You have no small Vlaue')
        }
        setSmallVlaue(smallVlaue - 1)
    }

    const [mediumVlaue, setMediumVlaue] = useState(0);
    const handleMediumIncress = () => {
        setMediumVlaue(mediumVlaue + 1)
    }
    const handleMediumDecress = () => {
        if (mediumVlaue === 0) {
            return alert('You have no medium Vlaue')
        }
        setMediumVlaue(mediumVlaue - 1)
    }

    const [largeVlaue, setLargeVlaue] = useState(0);
    const handleLargeIncress = () => {
        setLargeVlaue(largeVlaue + 1)
    }
    const handleLargeDecress = () => {
        if (largeVlaue === 0) {
            return alert('You have no large Vlaue')
        }
        setLargeVlaue(largeVlaue - 1)
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

    // console.log(data?.user);

    const [createPlane, { isLoading: isCreatePlaneLoading }] = useCreatePlaneMutation();



    const handleSubmitTravel = async (e) => {

        e.preventDefault();
        const form = e.target;

        // if(userId)

        if (!fileList1) {
            return toast.error('Please upload your ticket')
        }
        if (form.flightNumber.value.length < 3) {
            return toast.error('Please enter a valid flight number')
        }
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

        // console.log(fileList1);

        const formData = new FormData();
        formData.append("userId", userId);
        formData.append("transportMode", 'plane');
        // const transportType = form.transportType.value; 
        formData.append("transportType", form.transportType.value);
        formData.append("ticket", fileList1);
        formData.append("flightNumber", form.flightNumber.value);
        formData.append("departureCity", form.departureCity.value);
        formData.append("arrivalCity", form.arrivalCity.value);
        formData.append("departureDate", form.departureDate.value);
        formData.append("arrivalDate", form.arrivalDate.value);
        formData.append("departureTime", form.departureTime.value);
        formData.append("arrivalTime", form.arrivalTime.value);
        formData.append("handLuggage", luggageValue || 0);
        formData.append("checkedBaggage", baggageValue || 0);

        if (form?.availableToBeCourier?.value) {
            formData.append("availableToBeCourier", form.availableToBeCourier.value == true ? true : false);
            formData.append("maxpurchAmountAdvance", form.availableToBeCourier.value);
        }


        console.log(Number(calculet?.minimumPricePerTransaction * (luggageValue + baggageValue)));
        formData.append("courierOptions.maxPurchaseAmount", calculet?.minimumPricePerTransaction);
        formData.append("price", calculet?.minimumPricePerTransaction * (luggageValue + baggageValue)) || 0;
        formData.append("courierOptions.message", form.message.value);
        // formData.append("price", 1200);


        try {
            const res = await createPlane(formData).unwrap();
            console.log(res);
            if (res?.success) {
                // alert(res?.data)
                toast.success('Travel created successfully !!')
                //    alert('Travel created successfully !!')
                console.log(res?.data)
                // form.reset();
                fileList1 = null;
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


    const handleSubmitTrain = async (e) => {
        e.preventDefault();
        const form = e.target;

        if (!fileList2) {
            return toast.error('Please upload your ticket')
        }
        if (form.flightNumber.value.length < 3) {
            return toast.error('Please enter a valid train number')
        }
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


        const formData = new FormData();
        formData.append("userId", userId);
        formData.append("transportMode", 'train');
        // const transportType = form.transportType.value; 
        formData.append("transportType", form.transportType.value);
        formData.append("ticket", fileList1);
        formData.append("flightNumber", form.flightNumber.value);
        formData.append("departureCity", form.departureCity.value);
        formData.append("arrivalCity", form.arrivalCity.value);
        formData.append("departureDate", form.departureDate.value);
        formData.append("arrivalDate", form.arrivalDate.value);
        formData.append("departureTime", form.departureTime.value);
        formData.append("arrivalTime", form.arrivalTime.value);
        formData.append("handLuggage", luggageValue || 0);
        formData.append("checkedBaggage", baggageValue || 0);
        formData.append("availableToBeCourier", form.maxpurchAmountAdvance.value == true ? true : false);
        formData.append("courierOptions.maxPurchaseAmount", 0);
        formData.append("courierOptions.message", form.message.value);
        formData.append("maxpurchAmountAdvance", form.maxpurchAmountAdvance.value);




        try {
            const res = await createPlane(formData).unwrap();
            console.log(res);

            if (res?.success) {
                // alert(res?.data)
                toast.success('Travel created successfully !!')
                //    alert('Travel created successfully !!')
                console.log(res?.data)
                form.reset();
                // fileList2 = null;
                setFileList2(null);
            }
            else {
                // alert(res?.data?.message)
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
                <div className='w-full h-full bg-[#0000008e] lg:py-10 py-5 '>

                    <div className='flex flex-col items-center justify-center lg:py-10 py-5 lg:px-0 px-5 text-center text-white'>
                        <h2 className='lg:text-5xl text-3xl font-semibold mb-3'>
                            {t('OfferYourJourney')}
                        </h2>
                        <p className='lg:text-xl'>
                            {t('ResellUnusedKilos')}
                        </p>
                    </div>

                    <div className='max-w-5xl mx-auto backdrop-blur-lg bg-[#ffffff85] p-10 rounded-md'>
                        {/* Tab Navigation */}
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
                        <div>
                            {activeTab === 1 && (
                                <div>
                                    <form onSubmit={handleSubmitTravel} className="space-y-6">

                                        <div className="">
                                            <span className='font-semibold text-gray-700 mb-2 block'>{t('TransportMood')}</span>
                                            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
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
                                                    <div className="peer-checked:bg-primary w-full text-center bg-white text-primary peer-checked:text-white border border-gray-300 rounded-lg px-4 py-3">
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
                                                    <div className="peer-checked:bg-primary w-full text-center peer-checked:text-white border border-gray-300 bg-white text-primary rounded-lg px-4 py-3">
                                                        <span className="font-semibold">{t("WithCorrespondence")}</span>
                                                    </div>
                                                </label>
                                            </div>

                                        </div>

                                        {/* Transport Mood */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                                            <div className="">
                                                <span className='text-sm text-gray-700 font-semibold mb-3 block'>{t('TransportMood')}</span>
                                                <div className='flex gap-5'>
                                                    {/*  Hidden File Input */}
                                                    <div className='border-2 w-[50%] border-dashed flex items-center justify-center h-full border-gray-300 bg-white rounded-lg p-4 cursor-pointer'>
                                                        <label htmlFor="ticket-upload" className='flex w-full min-h-[80px] items-center justify-center'>

                                                            {imagePreview ? (
                                                                <img src={imagePreview} alt="Uploaded" className="w-full h-auto rounded-lg" />
                                                            ) : (
                                                                <label htmlFor="ticket-upload" className='flex w-full min-h-[80px] items-center justify-center'>
                                                                    <input
                                                                        type="file"
                                                                        id="ticket-upload"
                                                                        name='ticketImage'
                                                                        accept=".png, .jpg, .jpeg"
                                                                        className="hidden"
                                                                        onChange={handleFile1Change} // Handle the file change
                                                                    />
                                                                    <span><MdOutlineFileUpload className='text-3xl text-gray-500' /></span>
                                                                </label>
                                                            )}

                                                            {/* Show the file name when the file is uploaded */}
                                                            {/* <span><MdOutlineFileUpload className='text-3xl text-gray-500' /></span> */}
                                                        </label>
                                                    </div>

                                                    {/* Label and Button */}
                                                    <label
                                                        htmlFor="ticket-upload"
                                                        className="flex flex-col justify-center cursor-pointer w-[50%]"
                                                    >
                                                        <span
                                                            className="border-gray-100 block text-center border-[1px] text-gray-700 px-4 py-2 rounded-md   transition"
                                                        >
                                                            Add your ticket
                                                        </span>
                                                        <p className="text-xs mt-2 text-gray-500">{t('AddYourTicket')}</p>
                                                    </label>

                                                </div>

                                            </div>

                                            <div>
                                                <label className="block text-sm text-gray-700 font-semibold mb-3 ">{t('FlightNumber')}</label>
                                                <input
                                                    type="text"
                                                    name="flightNumber"
                                                    className=" block w-full border border-gray-300 rounded-md shadow-sm px-4 py-3 focus:outline-none text-sm focus:ring-blue-500 focus:border-blue-500"
                                                    placeholder="E-5648"
                                                />
                                            </div>
                                        </div>

                                        {/* Departure and Arrival */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700">
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
                                                <label className="block text-sm font-semibold text-gray-700">{t('ArrivalCity')}</label>
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
                                                <label className="block text-sm  text-gray-700 mb-2 font-semibold">{t('DepartureDate')}</label>
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
                                                <label className="block text-sm mb-2 font-semibold text-gray-700">{t('ArrivalDate')}</label>
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
                                                <span className='font-semibold  text-gray-700 block mb-2'>{t('DepartureTime')}</span>
                                                <TimePicker name='departureTime' className='w-full py-3' use12Hours format="h:mm a" onChange={onChangeTime2} />
                                            </div>
                                            <div className='w-[50%]'>
                                                <span className='font-semibold  text-gray-700 block mb-2'>{t('ArrivalTime')}</span>
                                                <TimePicker name='arrivalTime' className='w-full py-3' use12Hours format="h:mm a" onChange={onChangeTime1} />
                                            </div>
                                        </div>

                                        <div>
                                            <span className="block font-semibold text-gray-700 mb-3">{t('AvailableWeight')}</span>
                                            <div className='bg-white p-5 rounded-lg '>
                                                <label htmlFor="handLuggage" className='flex items-center justify-between '>
                                                    <div className='flex items-center gap-3'>
                                                        <div className='w-16 h-16 bg-[#e7eaf5] rounded-full flex items-center justify-center'>
                                                            <IoBagOutline className='text-3xl text-primary' />
                                                        </div>
                                                        <h2 className='text-2xl font-semibold text-primary'>{t('HandLuggage')}</h2>
                                                    </div>
                                                    <div>
                                                        <input onClick={handleShowCheckLuggage} className='w-5 h-5' type="checkbox" name="handLuggage" id="handLuggage" />
                                                    </div>
                                                </label>
                                                {
                                                    showLuggage && (

                                                        <div className='flex items-center gap-5 justify-center'>
                                                            <p>{t('AvailableWeight')}:</p>
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
                                                    )
                                                }
                                            </div>

                                        </div>


                                        <div>
                                            <div className='bg-white p-5 rounded-lg '>
                                                <label htmlFor="handBaggage" className='flex items-center justify-between '>
                                                    <div className='flex items-center gap-3'>
                                                        <div className='w-16 h-16 bg-[#e7eaf5] rounded-full flex items-center justify-center'>
                                                            <RiShoppingBag4Line className='text-3xl text-primary' />
                                                        </div>
                                                        <h2 className='text-2xl font-semibold text-primary'>{t('CheckedBaggage')}</h2>
                                                    </div>
                                                    <div>
                                                        <input onClick={handleShowCheckBaggage} className='w-5 h-5' type="checkbox" name="handBaggage" id="handBaggage" />
                                                    </div>
                                                </label>
                                                {
                                                    showBaggage && (

                                                        <div className='flex items-center gap-5 justify-center'>
                                                            <p>{t('AvailableWeight')}:</p>
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
                                                    )
                                                }
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
                                                <span className="flex items-center gap-1 font-semibold  text-gray-700">
                                                    {t('AvailableToBeACourier')} <MdInfo />
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


                                        <div>
                                            <span className='font-semibold  text-gray-700'>{t('MessageOptional')}</span>
                                            <div className="relative mt-2 ">
                                                <div className="absolute inset-y-0 left-0 pl-2 top-5">
                                                    {/* Icon */}
                                                    <FiMessageSquare className='text-2xl text-[#737373]' />
                                                </div>
                                                <textarea
                                                    type="number"
                                                    name='message'
                                                    placeholder='Enter the message' className="mt-1 pl-10 block w-full border text-[#737373] border-gray-300 rounded-md shadow-sm px-10 py-5 focus:outline-none focus:ring-blue-500 focus:border-blue-500 min-h-[250px]"
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
                                            <span className='font-semibold text-gray-700 mb-2 block'>{t('TransportMood')}</span>
                                            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
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
                                                    <div className="peer-checked:bg-primary w-full text-center bg-white text-primary peer-checked:text-white border border-gray-300 rounded-lg px-4 py-3">
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
                                                    <div className="peer-checked:bg-primary w-full text-center peer-checked:text-white border border-gray-300 bg-white text-primary rounded-lg px-4 py-3">
                                                        <span className="font-semibold">{t("WithCorrespondence")}</span>
                                                    </div>
                                                </label>
                                            </div>

                                        </div>

                                        {/* Transport Mood */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                                            <div className="">
                                                <span className='text-sm text-gray-700 font-semibold mb-3 block'>{t('TransportMood')}</span>
                                                <div className='flex gap-5'>
                                                    {/*  Hidden File Input */}
                                                    <div className='border-2 w-[50%] border-dashed flex items-center justify-center h-full border-gray-300 bg-white rounded-lg p-4 cursor-pointer'>
                                                        <label htmlFor="ticket-upload" className='flex w-full min-h-[80px] items-center justify-center'>

                                                            {imagePreview2 ? (
                                                                <img src={imagePreview2} alt="Uploaded" className="w-full h-auto rounded-lg" />
                                                            ) : (
                                                                <label htmlFor="ticket-upload" className='flex w-full min-h-[80px] items-center justify-center'>
                                                                    <input
                                                                        type="file"
                                                                        id="ticket-upload"
                                                                        name='ticketImage'
                                                                        accept=".png, .jpg, .jpeg"
                                                                        className="hidden"
                                                                        onChange={handleFile2Change} // Handle the file change
                                                                    />
                                                                    <span><MdOutlineFileUpload className='text-3xl text-gray-500' /></span>
                                                                </label>
                                                            )}

                                                            {/* Show the file name when the file is uploaded */}
                                                            {/* <span><MdOutlineFileUpload className='text-3xl text-gray-500' /></span> */}
                                                        </label>
                                                    </div>

                                                    {/* Label and Button */}
                                                    <label
                                                        htmlFor="ticket-upload"
                                                        className="flex flex-col justify-center cursor-pointer w-[50%]"
                                                    >
                                                        <span
                                                            className="border-gray-100 block text-center border-[1px] text-gray-700 px-4 py-2 rounded-md   transition"
                                                        >
                                                            Add your ticket
                                                        </span>
                                                        <p className="text-xs mt-2 text-gray-500">{t('AddYourTicket')}</p>
                                                    </label>

                                                </div>

                                            </div>

                                            <div>
                                                <label className="block text-sm text-gray-700 font-semibold mb-3 ">Train Number</label>
                                                <input
                                                    type="text"
                                                    name="flightNumber"
                                                    className=" block w-full border border-gray-300 rounded-md shadow-sm px-4 py-3 focus:outline-none text-sm focus:ring-blue-500 focus:border-blue-500"
                                                    placeholder="E-5648"
                                                />
                                            </div>
                                        </div>

                                        {/* Departure and Arrival */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700">
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
                                                <label className="block text-sm font-semibold text-gray-700">{t('ArrivalCity')}</label>
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
                                                <label className="block text-sm  text-gray-700 mb-2 font-semibold">{t('DepartureDate')}</label>
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
                                                <label className="block text-sm mb-2 font-semibold text-gray-700">{t('ArrivalDate')}</label>
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
                                                <span className='font-semibold  text-gray-700 block mb-2'>{t('DepartureTime')}</span>
                                                <TimePicker name='departureTime' className='w-full py-3' use12Hours format="h:mm a" onChange={onChangeTime2} />
                                            </div>
                                            <div className='w-[50%]'>
                                                <span className='font-semibold  text-gray-700 block mb-2'>{t('ArrivalTime')}</span>
                                                <TimePicker name='arrivalTime' className='w-full py-3' use12Hours format="h:mm a" onChange={onChangeTime1} />
                                            </div>
                                        </div>


                                        <div>
                                            <span className='font-semibold  text-gray-700 block mb-2'>Accepted package sizes</span>
                                            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                                                <div className='p-5 bg-white rounded-md'>
                                                    <div className='flex items-center justify-between flex-wrap mb-5' >
                                                        <h2 className='font-semibold'>Small (s)</h2>
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
                                                    <div className='flex items-center justify-between flex-wrap mb-5' >
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
                                                    <div className='flex items-center justify-between flex-wrap mb-5' >
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
                                                <span className="flex items-center gap-1 font-semibold  text-gray-700">
                                                    {t('AvailableToBeACourier')} <MdInfo />
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


                                        <div>
                                            <span className='font-semibold  text-gray-700'>{t('MessageOptional')}</span>
                                            <div className="relative mt-2 ">
                                                <div className="absolute inset-y-0 left-0 pl-2 top-5">
                                                    {/* Icon */}
                                                    <FiMessageSquare className='text-2xl text-[#737373]' />
                                                </div>
                                                <textarea
                                                    type="number"
                                                    name='message'
                                                    placeholder='Enter the message' className="mt-1 pl-10 block w-full border text-[#737373] border-gray-300 rounded-md shadow-sm px-10 py-5 focus:outline-none focus:ring-blue-500 focus:border-blue-500 min-h-[250px]"
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
                </div>
            </div>

            <ITravelVideoSection />
            <HalfEmptyLuggage />
            <Courier />

        </div>
    );
};

export default Page;
