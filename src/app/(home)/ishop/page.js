'use client';

import VideoAndCard from '@/app/components/Isend/VideoAndCard';
import CouriersAvailable from '@/app/components/Ishop/CouriersAvailable';
import HowDoesWork from '../../components/Ishop/HowDoesWork';
import React, { useState } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiCalendar, CiDollar, CiLocationOn, CiUser } from 'react-icons/ci';
import { IoSearchOutline } from 'react-icons/io5'; // Corrected import for IoSearchOutline
import PopularProducts from '@/app/components/Ishop/PopularProducts';
import i18n from '@/app/utils/i18';
import { useSearchIShopMutation } from '@/app/redux/Features/Search/searchItravel';
import toast, { Toaster } from 'react-hot-toast';

const Page = () => {

    const { t } = i18n;

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

    const [searchIshop, { isLoading }] = useSearchIShopMutation();
    const [searchTerm, setSearchTerm] = useState([]);

    // console.log(searchTerm);




    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formValues);
        // Add your form submission logic here

        const form = e.target;
        const departureCity = form?.departureCity?.value || '';
        const arrivalCity = form?.arrivalCity?.value || '';
        const departureDate = form?.desiredDate?.value || '';
        const arrivalDate = form?.alternateDate?.value || ''; // Add this line
        const maxpurchAmountAdvance = form?.desiredPrice?.value || 0; // Add this line

        const formData = {
            departureCity,
            arrivalCity,
            departureDate,
            arrivalDate,
            maxpurchAmountAdvance,
        };

        try {

            const response = await searchIshop(formData).unwrap();
            console.log(response);
            if(response?.success){
                setSearchTerm(response?.data)
                toast.success(`Search successfully !! See ${response?.data?.length} Item` );
            }

        } catch (error) {
            console.log(error);
        }



    };

    return (
        <div>
            <Toaster position="top-center" toastOptions={{ duration: 3000 }} containerStyle={{ zIndex: 999999 }} />
            <div className='bg-[url("/Images/Ishop/banner.png")] w-full min-h-[80vh] bg-cover bg-center'>
                <div>
                    <div className='bg-[#000d1a8a] min-h-[80vh] py-20'>
                        <div className='lg:w-2/4 mx-auto text-center'>
                            <h1 className='md:text-4xl text-3xl font-semibold text-white'>
                                {t('worldPurchasesInYourBasket5454')}
                            </h1>
                            <p className='text-white lg:text-xl lg:mt-5 mt-3'>
                                {t('whatYouCantFindAtHome5454')}
                            </p>
                        </div>

                        <form className="lg:w-2/4 w-11/12 mx-auto mt-10 bg-[#ffffffab] backdrop-blur-lg lg:p-10 p-5 rounded-lg" onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <div className="grid lg:grid-cols-2 gap-4">
                                    {/* Departure City */}
                                    <div>
                                        <label className="block mb-2 font-semibold">{t('cityOfPurchase5454')}</label>
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
                                        <label className="block mb-2 font-semibold">{t('deliveryCity5454')}</label>
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
                                        <label className="block mb-2 font-semibold">{t('desiredDate5454')}</label>
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
                                        <label className="flex items-center gap-2 mb-2 justify-end">
                                            <input
                                                type="checkbox"
                                                checked={showFlexibleDate}
                                                onChange={handleCheckboxChange}
                                                className="w-4 h-4 text-primary focus:ring-0"
                                            />
                                            {t('flexibleDates454')}
                                        </label>
                                        {showFlexibleDate && (
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
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label className="block mb-2 font-semibold">{t('Estimatedpurchaseprice')}</label>
                                    <div className="relative flex items-center">
                                        <input
                                            type="number"
                                            name='desiredPrice'
                                            className="w-full py-2 px-10 border rounded bg-gray-100 focus:outline-none focus:ring-0"
                                        />
                                        <span className="absolute left-3 text-gray-400">
                                            <BsCurrencyDollar className="text-2xl" />
                                        </span>
                                    </div>

                                </div>
                            </div>

                            <button
                                type="submit"
                                className="bg-gradient-to-r from-[#98DED9] to-[#C7FFD8] text-primary px-4 py-2 rounded-md mt-4 font-semibold flex items-center justify-center gap-3 w-full"
                            >
                                <IoSearchOutline /> {t('searchForRoute454')}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <CouriersAvailable searchIshopItem={searchTerm} />
            <VideoAndCard />
            <HowDoesWork />
            <PopularProducts />

        </div>
    );
};

export default Page;
