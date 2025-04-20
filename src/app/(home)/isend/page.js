'use client';
import AvailableRoutes from '@/app/components/Isend/AvailableRoutes';
import ExcessBaggage from '@/app/components/Isend/ExcessBaggage';
import Shipments from '@/app/components/Isend/Shipments';
import VideoAndCard from '@/app/components/Isend/VideoAndCard';
import PopularProducts from '@/app/components/Ishop/PopularProducts';
import ITravelVideoSection from '@/app/components/ITravel/ITravelVideoSection';
import { useGetAllVideoQuery } from '@/app/redux/Features/AllVideos/getAllVideos'; 
import { useSearchItravelMutation } from '@/app/redux/Features/Search/searchItravel';
import i18n from '@/app/utils/i18';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiCalendar, CiLocationOn } from 'react-icons/ci';
import { FaTrain } from 'react-icons/fa';
import { FaMinus, FaP, FaPlus, FaSackDollar } from 'react-icons/fa6';
import { IoSearchOutline } from 'react-icons/io5';
import { LuBox, LuPlane } from 'react-icons/lu';



const Page = () => {

    const { t } = i18n;

    const [activeTab, setActiveTab] = useState(0); // Track the active tab
    const [packages, setPackages] = useState([
        { departureCity: '', arrivalCity: '', desiredDate: '', weight: '' },
    ]); // Track package data

    const { data: allVideo } = useGetAllVideoQuery()



    // console.log(allVideo?.data[0]);


    const handlePackageChange = (index, field, value) => {
        const updatedPackages = [...packages];
        updatedPackages[index][field] = value;
        setPackages(updatedPackages);
    };
    const handleAddPackage = () => {
        setPackages([
            ...packages,
            { departureCity: '', arrivalCity: '', desiredDate: '', weight: '' },
        ]);
    };


    const [showFlexibleDate, setShowFlexibleDate] = useState(false); // Manage checkbox state

    const handleCheckboxChange = (e) => {
        setShowFlexibleDate(e.target.checked);
    };

    const [showNewPackage, setShowNewPackage] = useState(false);

    const addNewPackageField = () => {
        setShowNewPackage(!showNewPackage);
    };


    // ============== Train ========================

    const [isTrainFlexible, setIsTrainFlexible] = useState(false); // State to manage checkbox

    const handleTrainCheckboxChange = (e) => {
        setIsTrainFlexible(e.target.checked); // Update state when checkbox is toggled
    };

    const [trainSmall, setTrainSmall] = useState(0);

    const handleMinusTrainSmall = () => {
        if (trainSmall === 0) {
            return alert('You have no small Vlaue')
        }
        setTrainSmall(trainSmall - 1)
    }
    const handlePlusTrainSmall = () => {
        setTrainSmall(trainSmall + 1)
    }

    const [trainMedium, setTrainMedium] = useState(0);

    const handleMinusTrainMedium = () => {
        if (trainMedium === 0) {
            return alert('You have no medium Vlaue')
        }
        setTrainMedium(trainMedium - 1)
    }
    const handlePlusTrainMedium = () => {
        setTrainMedium(trainMedium + 1)
    }

    const [trainLarge, setTrainLarge] = useState(0);

    const handleMinusTrainLarge = () => {
        if (trainLarge === 0) {
            return alert('You have no large Vlaue')
        }
        setTrainLarge(trainLarge - 1)
    }
    const handlePlusTrainLarge = () => {
        setTrainLarge(trainLarge + 1)
    }

    //====================== all ========================

    const [addNewAllPackageField, setAddNewAllPackageField] = useState(0);

    const handleAddNewAllPackageField = () => {
        setAddNewAllPackageField(addNewAllPackageField + 1)
    }

    const [allSmall, setAllSmall] = useState(0);

    const handleMinusAllSmall = () => {
        if (allSmall === 0) {
            return alert('You have no small Vlaue')
        }
        setAllSmall(allSmall - 1)
    }
    const handlePlusAllSmall = () => {
        setAllSmall(allSmall + 1)
    }

    const [allMedium, setAllMedium] = useState(0);

    const handleMinusAllMedium = () => {
        if (allMedium === 0) {
            return alert('You have no medium Vlaue')
        }
        setAllMedium(allMedium - 1)
    }
    const handlePlusAllMedium = () => {
        setAllMedium(allMedium + 1)
    }

    const [allLarge, setAllLarge] = useState(0);

    const handleMinusAllLarge = () => {
        if (allLarge === 0) {
            return alert('You have no large Vlaue')
        }
        setAllLarge(allLarge - 1)
    }
    const handlePlusAllLarge = () => {
        setAllLarge(allLarge + 1)
    }



    const [allSearchResutl, setAllSearchResutl] = useState([]);


    // console.log('my Search Result', allSearchResutl);

    // ==================== Plane ========================

    const [searchItravelWithData, { isLoading }] = useSearchItravelMutation();
    const router = useRouter();

    const handleSearchPlane = async (e) => {
        e.preventDefault();

        // Perform search logic here
        const form = e.target;

        const formData = {
            transportMode: 'plane',
            departureCity: form?.departureCity?.value || '',
            arrivalCity: form?.arrivalCity?.value || '',
            departureDate: form?.desiredDate?.value || '',
            totalSpace: Number(form?.packageWeight?.value) || 0,
            arrivalDate: form?.flexibleDate?.value || '',
        };

        try {

            const response = await searchItravelWithData(formData).unwrap();
            // console.log(response);

            if (response?.success) {
                router.push(`/isend#showall`);
                // console.log(response);
                setAllSearchResutl(response?.data)
                toast.success(`Search successfully !! See ${response?.data?.length} Item`);
                // router.push(`/itravel/${response?.data[0]?.id}`);
            }
        } catch (error) {
            console.log(error);
            toast.error('Search failed !!');
        }

        console.log(formData);



    };

    // ==================== Train ========================


    const handleSearchTrain = async (e) => {
        e.preventDefault();

        // Perform search logic here
        const form = e.target;

        const formData = {
            transportMode: 'train',
            departureCity: form?.departureCity?.value || '',
            arrivalCity: form?.arrivalCity?.value || '',
            departureDate: form?.desiredDate?.value || '',
            arrivalDate: form?.flexibleDate?.value || '',
        };

        try {

            const response = await searchItravelWithData(formData).unwrap();
            console.log(response);

            if (response?.success) {
                console.log(response);
                setAllSearchResutl(response?.data)
                toast.success(`Search successfully !! See ${response?.data?.length} Item`);
                // router.push(`/itravel/${response?.data[0]?.id}`);
            }
        } catch (error) {
            console.log(error);
            toast.error('Search failed !!');
        }




    }

    // ==================== All ========================

    const handleSearchAll = async (e) => {
        e.preventDefault();

        // Perform search logic here
        const form = e.target;

        const formData = {
            transportMode: 'all',
            departureCity: form?.departureCity?.value || '',
            arrivalCity: form?.arrivalCity?.value || '',
            departureDate: form?.desiredDate?.value || '',
            arrivalDate: form?.flexibleDate?.value || '',
        };

        try {

            const response = await searchItravelWithData(formData).unwrap();


            if (response?.success) {
                // go to this section #showall show can i go here 

                const showAllSection = document.getElementById('showall');
                if (showAllSection) {
                    // Smooth scroll to the section
                    showAllSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }

                setAllSearchResutl(response?.data)
                toast.success(`Search successfully !! See ${response?.data?.length} Item`);
                // router.push(`/itravel/${response?.data[0]?.id}`);
            }
        } catch (error) {
            console.log(error);
            toast.error('Search failed !!');
        }

    }




    const tabs = [
        {
            title: 'Plane',
            icon: <LuPlane className="text-lg mr-2" />,
            content: (
                <div>

                    <form onSubmit={handleSearchPlane}>
                        {packages.map((pkg, index) => (
                            <div key={index} className="mb-5">
                                <div className="">
                                    <div className='grid grid-cols-2 gap-4'>
                                        {/* Departure City */}
                                        <div>
                                            <label className="block mb-2 font-semibold  text-[#474747]">{t('departureCityLabel45454')}</label>
                                            <div className="relative flex items-center">
                                                <input
                                                    type="text"
                                                    name="departureCity"
                                                    placeholder={t('departureCityPlaceholder45454')}
                                                    className="w-full py-2 px-10 border rounded bg-gray-100 focus:outline-none focus:ring-0"
                                                />
                                                <span className="absolute left-3 text-gray-400">
                                                    <CiLocationOn className="text-2xl" />
                                                </span>
                                            </div>
                                        </div>

                                        {/* Arrival City */}
                                        <div>
                                            <label className="block mb-2 font-semibold  text-[#474747]">{t('arrivalCityLabel45454')}</label>
                                            <div className="relative flex items-center">
                                                <input
                                                    type="text"
                                                    name="arrivalCity"
                                                    placeholder={t('arrivalCityPlaceholder45454')}
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
                                            <label className="block mb-2 font-semibold  text-[#474747]">{t('desiredDateLabel45454')}</label>
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
                                            <div>
                                                <label htmlFor={`flexible-${index}`} className="flex items-center gap-2 mb-2 justify-end">
                                                    <input
                                                        type="checkbox"
                                                        name="flexible"
                                                        id={`flexible-${index}`}
                                                        checked={showFlexibleDate}
                                                        onChange={handleCheckboxChange}
                                                    />
                                                    <span>{t('flexibleDates454')}</span>
                                                </label>
                                                {showFlexibleDate && (
                                                    <div className="col-span-2">
                                                        <div className="relative flex items-center">
                                                            <input
                                                                type="date"
                                                                name='flexibleDate'
                                                                className="w-full py-2 px-10 border rounded bg-gray-100 focus:outline-none focus:ring-0"
                                                            />
                                                            <span className="absolute left-3 text-gray-400">
                                                                <CiCalendar className="text-2xl" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Additional Date Field */}

                                    </div>

                                    {/* checkbox  with : I would like to have my excess baggage transported*/}
                                    <div>
                                        <label htmlFor={`flexible`} className="flex font-semibold  text-[#474747] text-sm items-center gap-2 my-5 ">
                                            <input
                                                type="checkbox"
                                                name="flexible"
                                                id={`flexible`}
                                            />
                                            <span>I would like to have my excess baggage transported</span>
                                        </label>
                                    </div>

                                    {/* Package Weight */}
                                    <div>
                                        <label className="mb-2 font-semibold  text-[#474747] flex justify-between">{t('packageWeightLabel454')}
                                            {/* <button type="button" onClick={addNewPackageField} className='flex items-center gap-2 text-primary'><FaPlus /> {t('addPackageButton454')}</button> */}
                                        </label>
                                        <div className="relative flex items-center">
                                            <input
                                                type="number"
                                                name='packageWeight'
                                                placeholder={t('enterWeightPlaceholder454')}
                                                className="w-full py-2 px-10 border rounded bg-gray-100 focus:outline-none focus:ring-0"
                                            />
                                            <span className="absolute left-3 text-gray-400">
                                                <BsCurrencyDollar />
                                            </span>
                                        </div>
                                    </div>

                                    {/* {
                                        showNewPackage &&
                                        <div>
                                            <div className="relative flex items-center mt-5">
                                                <input
                                                    type="number"
                                                    onChange={(e) =>
                                                        handlePackageChange(index, 'weight', e.target.value)
                                                    }
                                                    placeholder="Enter weight"
                                                    className="w-full py-2 px-10 border rounded bg-gray-100 focus:outline-none focus:ring-0"
                                                />
                                                <span className="absolute left-3 text-gray-400">
                                                    <BsCurrencyDollar />
                                                </span>
                                            </div>
                                        </div>
                                    } */}

                                </div>

                            </div>
                        ))}
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-[#98DED9] to-[#C7FFD8] text-primary px-4 py-2 rounded-md mt-4 flex items-center justify-center gap-3 w-full"
                        >
                            <IoSearchOutline /> {t('searchForRoute454')}
                        </button>
                    </form>

                </div>
            ),
        },
        {
            title: 'Train',
            icon: <FaTrain className="text-lg mr-2" />,
            content: (
                <form onSubmit={handleSearchTrain}>
                    <div className="grid grid-cols-2 gap-4 mb-5">
                        {/* Departure City */}
                        <div>
                            <label className="block mb-2 font-semibold  text-[#474747]">{t('departureCityLabel45454')}</label>
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    name='departureCity'
                                    placeholder={t('departureCityPlaceholder45454')}
                                    className="w-full py-2 px-10 border rounded bg-gray-100 focus:outline-none focus:ring-0"
                                />
                                <span className="absolute left-3 text-gray-400">
                                    <CiLocationOn />
                                </span>
                            </div>
                        </div>

                        {/* Arrival City */}
                        <div>
                            <label className="block mb-2 font-semibold  text-[#474747]">{t('arrivalCityLabel45454')}</label>
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    name='arrivalCity'
                                    placeholder={t('arrivalCityPlaceholder45454')}
                                    className="w-full py-2 px-10 border rounded bg-gray-100 focus:outline-none focus:ring-0"
                                />
                                <span className="absolute left-3 text-gray-400">
                                    <CiLocationOn />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-5">
                        {/* Desired Date */}
                        <div>
                            <label className="block mb-2 font-semibold  text-[#474747]">{t('desiredDateLabel45454')}</label>
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

                        <div className="">
                            <label className="mb-2 font-semibold  text-[#474747] flex items-center justify-end gap-2">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-primary focus:ring-0"
                                    onChange={handleTrainCheckboxChange} // Updated handler name
                                />
                                {t('flexibleDates454')}
                            </label>

                            {/* Conditionally Render Additional Field */}
                            {isTrainFlexible && (
                                <div className="">
                                    <div className="relative flex items-center">
                                        <input
                                            type="date"
                                            name='flexibleDate'
                                            className="w-full py-2 px-10 border rounded bg-gray-100 focus:outline-none focus:ring-0"
                                        />
                                        <span className="absolute left-3 text-gray-400">
                                            <CiCalendar className="text-2xl" />
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <label htmlFor={`flexible`} className="flex font-semibold  text-[#474747] text-sm items-center gap-2 my-5 ">
                            <input
                                type="checkbox"
                                name="flexible"
                                id={`flexible`}
                            />
                            <span>I would like to have my excess baggage transported</span>
                        </label>
                    </div>


                    <div className='mb-5'>
                        <h2 className="block mb-2 font-semibold">  Package size   </h2>

                        <div className='grid lg:grid-cols-3 gap-5'>
                            <div className='bg-[#d5d4d4] p-5 rounded-lg text-center'>
                                <h3 className='text-xl font-semibold'>Little</h3>
                                <p className='mb-3 mt-1 text-xs '>Documents, small packages</p>
                                <div className='flex items-center justify-center gap-3'>
                                    <div onClick={handleMinusTrainSmall} className='w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer'>
                                        <FaMinus />
                                    </div>
                                    <span>{trainSmall}</span>
                                    <div onClick={handlePlusTrainSmall} className='w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer'>
                                        <FaPlus />
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#d5d4d4] p-5 rounded-lg text-center'>
                                <h3 className='text-xl font-semibold'>AVERAGE</h3>
                                <p className='mb-3 mt-1 text-xs '>Standard boxes</p>
                                <div className='flex items-center justify-center gap-3'>
                                    <div onClick={handleMinusTrainMedium} className='w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer'>
                                        <FaMinus />
                                    </div>
                                    <span>{trainMedium}</span>
                                    <div onClick={handlePlusTrainMedium} className='w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer'>
                                        <FaPlus />
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#d5d4d4] p-5 rounded-lg text-center'>
                                <h3 className='text-xl font-semibold'>Grand</h3>
                                <p className='mb-3 mt-1 text-xs '>Lightweight suitcases</p>
                                <div className='flex items-center justify-center gap-3'>
                                    <div onClick={handleMinusTrainLarge} className='w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer'>
                                        <FaMinus />
                                    </div>
                                    <span>{trainLarge}</span>
                                    <div onClick={handlePlusTrainLarge} className='w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer'>
                                        <FaPlus />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <button
                        type="submit"
                        className="bg-gradient-to-r from-[#98DED9] to-[#C7FFD8] text-primary px-4 py-2 rounded-md mt-4 flex items-center justify-center gap-3 w-full font-semibold"
                    >
                        <IoSearchOutline /> {t('searchForRoute454')}
                    </button>

                </form>

            ),
        },
        {
            title: 'All',
            icon: <LuBox className="text-lg mr-2" />,
            content: (
                <form onSubmit={handleSearchAll} action="">
                    <div className='grid grid-cols-2 gap-4'>
                        {/* Departure City */}
                        <div>
                            <label className="block mb-2 font-semibold  text-[#474747]">{t('departureCityLabel45454')}</label>
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    name='departureCity'
                                    placeholder={t('departureCityPlaceholder45454')}
                                    className="w-full py-2 px-10 border rounded bg-gray-100 focus:outline-none focus:ring-0"
                                />
                                <span className="absolute left-3 text-gray-400">
                                    <CiLocationOn className="text-2xl" />
                                </span>
                            </div>
                        </div>

                        {/* Arrival City */}
                        <div>
                            <label className="block mb-2 font-semibold  text-[#474747]">{t('arrivalCityLabel45454')}</label>
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    name='arrivalCity'
                                    placeholder={t('arrivalCityPlaceholder45454')}
                                    className="w-full py-2 px-10 border rounded bg-gray-100 focus:outline-none focus:ring-0"
                                />
                                <span className="absolute left-3 text-gray-400">
                                    <CiLocationOn className="text-2xl" />
                                </span>
                            </div>
                        </div>

                    </div>


                    <div className="grid grid-cols-2 gap-4 my-5">
                        {/* Desired Date */}
                        <div>
                            <label className="block mb-2 font-semibold  text-[#474747]">{t('desiredDateLabel45454')}</label>
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

                        <div className="">
                            <label className="mb-2 font-semibold  text-[#474747] flex items-center justify-end gap-2">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-primary focus:ring-0"
                                    onChange={handleTrainCheckboxChange} // Updated handler name
                                />
                                {t('flexibleDates454')}
                            </label>

                            {/* Conditionally Render Additional Field */}
                            {isTrainFlexible && (
                                <div className="">
                                    <div className="relative flex items-center">
                                        <input
                                            type="date"
                                            name='flexibleDate'
                                            className="w-full py-2 px-10 border rounded bg-gray-100 focus:outline-none focus:ring-0"
                                        />
                                        <span className="absolute left-3 text-gray-400">
                                            <CiCalendar className="text-2xl" />
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <label htmlFor={`flexible`} className="flex font-semibold  text-[#474747] text-sm items-center gap-2 my-5 ">
                            <input
                                type="checkbox"
                                name="flexible"
                                id={`flexible`}
                            />
                            <span>I would like to have my excess baggage transported</span>
                        </label>
                    </div>


                    <div className="my-5">
                        {/* Departure City */}
                        <div>
                            <label className="flex items-center justify-between mb-2 font-semibold  text-[#474747]">
                                {t('packageWeightLabel454')}
                                {/* <button onClick={handleAddNewAllPackageField} type='button' className='flex items-center gap-2 text-primary'><FaPlus />
                                    {t('addPackageButton454')}
                                </button> */}
                            </label>
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    name='packageWeight'
                                    placeholder={t('enterWeightPlaceholder454')}
                                    className="w-full py-2 px-10 border rounded bg-gray-100 focus:outline-none focus:ring-0"
                                />
                                <span className="absolute left-3 text-gray-400">
                                    <BsCurrencyDollar className="text-2xl" />
                                </span>
                            </div>
                        </div>
                        {/* {
                            addNewAllPackageField > 0 && (
                                [...Array(addNewAllPackageField)].map((_, index) => (
                                    <div key={index} className="relative flex items-center mt-5">
                                        <input
                                            type="text"
                                            placeholder="0"
                                            className="w-full py-2 px-10 border rounded bg-gray-100 focus:outline-none focus:ring-0"
                                        />
                                        <span className="absolute left-3 text-gray-400">
                                            <BsCurrencyDollar className="text-2xl" />
                                        </span>
                                    </div>
                                ))
                            )
                        } */}
                    </div>



                    <div>
                        <h2>Package size</h2>

                        <div className='grid lg:grid-cols-3 gap-5'>
                            <div className='bg-[#d5d4d4] p-5 rounded-lg text-center'>
                                <h3 className='text-xl font-semibold'>Little</h3>
                                <p className='mb-3 mt-1 text-xs '>Documents, small packages</p>
                                <div className='flex items-center justify-center gap-3'>
                                    <div onClick={handleMinusAllSmall} className='w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer'>
                                        <FaMinus />
                                    </div>
                                    <span>{allSmall}</span>
                                    <div onClick={handlePlusAllSmall} className='w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer'>
                                        <FaPlus />
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#d5d4d4] p-5 rounded-lg text-center'>
                                <h3 className='text-xl font-semibold'>AVERAGE</h3>
                                <p className='mb-3 mt-1 text-xs '>Standard boxes</p>
                                <div className='flex items-center justify-center gap-3'>
                                    <div onClick={handleMinusAllMedium} className='w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer'>
                                        <FaMinus />
                                    </div>
                                    <span>{allMedium}</span>
                                    <div onClick={handlePlusAllMedium} className='w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer'>
                                        <FaPlus />
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#d5d4d4] p-5 rounded-lg text-center'>
                                <h3 className='text-xl font-semibold'>Grand</h3>
                                <p className='mb-3 mt-1 text-xs '>Lightweight suitcases</p>
                                <div className='flex items-center justify-center gap-3'>
                                    <div onClick={handleMinusAllLarge} className='w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer'>
                                        <FaMinus />
                                    </div>
                                    <span>{allLarge}</span>
                                    <div onClick={handlePlusAllLarge} className='w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer'>
                                        <FaPlus />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Arrival City */}


                    <button
                        type="submit"
                        className="bg-gradient-to-r from-[#98DED9] to-[#C7FFD8] text-primary px-4 py-2 rounded-md mt-4 flex items-center justify-center gap-3 w-full font-semibold"
                    >
                        <IoSearchOutline /> {t('searchForRoute454')}
                    </button>

                </form>
            ),
        },
    ];

    return (
        <div>
            <Toaster position="top-center" containerStyle={{ zIndex: 99999999 }} />
            <div
                className={`min-h-[100vh] duration-300 ease-in-out ${activeTab === 0
                    ? 'bg-[url("/Images/Ishop/travel-plane-1.png")]'
                    : activeTab === 1
                        ? 'bg-[url("/Images/Ishop/travel-tran-1.png")]'
                        : 'bg-[url("/Images/Ishop/form-bg-3.png")]'
                    } bg-cover bg-center`}
            >
                {/* Tabs Navigation */}
                <div className="bg-[#0505055e] min-h-[100vh] p-5">
                    <div className="lg:w-2/4 mx-auto text-center my-10">
                        <h2 className="lg:text-4xl text-2xl font-semibold text-white">
                            {/* {t('packageDeliveredTitle45454')} */}
                            The fastest delivery on the planet

                        </h2>
                        <p className="mt-3 font-normal text-[#ffffff] lg:text-xl">
                            {/* {t('packageDeliveredDescription45454')} */}
                            In just a few hours, your package will cross the globe. The world has never been so close.
                        </p>
                    </div>

                    <div className="lg:w-2/4 mx-auto bg-[#ffffff91] backdrop-blur-lg rounded-xl p-5">
                        <h2 className="font-semibold  text-[#474747] mb-3">{t('transportModeTitle45454')}</h2>
                        <div className="flex justify-center mb-5 gap-5">
                            {tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    className={`flex items-center justify-center w-1/3 py-2 text-lg font-semibold rounded-md transition-colors ${activeTab === index
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-200 text-gray-700'
                                        }`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {tab.icon} {/* Icon */}
                                    {tab.title}
                                </button>
                            ))}
                        </div>
                        {/* Active Tab Content */}
                        <div className="rounded-md">{tabs[activeTab].content}</div>


                    </div>
                </div>

            </div>


            <AvailableRoutes searchData={allSearchResutl} />
            <ITravelVideoSection />

            <ExcessBaggage />
            <PopularProducts />



            {/* <Shipments /> */}
            {/* <VideoAndCard /> */}

        </div>

    );
};

export default Page;


// AvailableRoutes