'use client';

import VideoAndCard from '@/app/components/Isend/VideoAndCard';
import CouriersAvailable from '@/app/components/Ishop/CouriersAvailable';
import HowDoesWork from '../../components/Ishop/HowDoesWork';
import React, { useState } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiCalendar, CiDollar, CiLocationOn, CiUser } from 'react-icons/ci';
import { IoSearchOutline } from 'react-icons/io5'; // Corrected import for IoSearchOutline
import PopularProducts from '@/app/components/Ishop/PopularProducts';

const Page = () => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formValues);
        // Add your form submission logic here
    };

    return (
        <div>
            <div className='bg-[url("/Images/Ishop/banner.png")] w-full min-h-[80vh] bg-cover bg-center'>
                <div>
                    <div className='bg-[#000d1a8a] min-h-[80vh] py-20'>
                        <div className='w-2/4 mx-auto text-center'>
                            <h1 className='md:text-4xl text-3xl font-semibold text-white'>
                                World purchases in your basket
                            </h1>
                            <p className='text-white text-xl mt-5'>
                                What you can't find at home, our travel couriers bring it to you thanks to Cobag!
                                Access the world.
                            </p>
                        </div>

                        <form className="w-2/4 mx-auto mt-10 bg-[#ffffffab] backdrop-blur-lg p-10 rounded-lg" onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Departure City */}
                                    <div>
                                        <label className="block mb-2 font-semibold">City of purchase</label>
                                        <div className="relative flex items-center">
                                            <input
                                                type="text"
                                                value={formValues.departureCity}
                                                onChange={(e) => handleInputChange('departureCity', e.target.value)}
                                                placeholder="Enter departure city"
                                                className="w-full py-2 px-10 border rounded bg-gray-100 focus:outline-none focus:ring-0"
                                            />
                                            <span className="absolute left-3 text-gray-400">
                                                <CiLocationOn className="text-2xl" />
                                            </span>
                                        </div>
                                    </div>

                                    {/* Arrival City */}
                                    <div>
                                        <label className="block mb-2 font-semibold">Delivery city</label>
                                        <div className="relative flex items-center">
                                            <input
                                                type="text"
                                                value={formValues.arrivalCity}
                                                onChange={(e) => handleInputChange('arrivalCity', e.target.value)}
                                                placeholder="Enter arrival city"
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
                                        <label className="block mb-2 font-semibold">Desired date</label>
                                        <div className="relative flex items-center">
                                            <input
                                                type="date"
                                                value={formValues.desiredDate}
                                                onChange={(e) => handleInputChange('desiredDate', e.target.value)}
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
                                            Flexible dates
                                        </label>
                                        {showFlexibleDate && (
                                            <div className="">
                                                <div className="relative flex items-center">
                                                    <input
                                                        type="date"
                                                        value={formValues.alternateDate}
                                                        onChange={(e) =>
                                                            handleInputChange('alternateDate', e.target.value)
                                                        }
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
                                    <label className="block mb-2 font-semibold">Estimated purchase price</label>
                                    <div className="relative flex items-center">
                                        <input
                                            type="number"
                                            value={formValues.estimatedPrice ? formValues.estimatedPrice : 0}
                                            onChange={(e) => handleInputChange('estimatedPrice', e.target.value)}
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
                                <IoSearchOutline /> Search for a route
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <CouriersAvailable />
            <HowDoesWork />
            <PopularProducts />
            <VideoAndCard />

        </div>
    );
};

export default Page;
