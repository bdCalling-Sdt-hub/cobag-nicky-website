'use client';
import baseUrl from '@/app/redux/api/baseUrl';
import { useGetAllIshopQuery } from '@/app/redux/Features/Ishop/ishop';
import { usePaymentMutation } from '@/app/redux/Features/payment/createPayment';
import i18n from '@/app/utils/i18';
import useUser from '@/hooks/useUser';

import Aos from 'aos';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { FiMessageSquare } from 'react-icons/fi';

const Courier = () => {
    const { t } = i18n;

    // Fetching data
    const { data: getAllData } = useGetAllIshopQuery();
    const postData = getAllData?.data?.filter(item => item.uploadImage?.length > 0);

    const router = useRouter();
    const user = useUser();
    const [payment20Persent] = usePaymentMutation();

    const handleContact = async (request) => {
        const data = {
            amount: Number(request?.PurchasePrice / 100 * 20) * 100,
            cobagProfit: 10,
            currency: "eur",
            paymentMethodId: "pm_card_visa",
            isEightyPercent: true,
            senderId: user?._id,
            sellKgId: request?._id,
            travellerId: request?.userId?._id
        }

        if (user?.subscription === false) {
            toast.error('Please login to get subscription or pay 20%');

            const res = await payment20Persent(data).unwrap();
            if (res) {
                return router.push(res?.url);
            }
        }
    };

    // Pagination settings
    const itemsPerPage = 4;  // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);

    // Filter settings
    const [cityPurchase, setCityPurchase] = useState('');
    const [cityDelivery, setCityDelivery] = useState('');
    const [minRating, setMinRating] = useState(4.5);
    const [untilDate, setUntilDate] = useState('');
    const [maxAmount, setMaxAmount] = useState('');

    // Filtered data state
    const [filteredData, setFilteredData] = useState(postData);

    useEffect(() => {
        Aos.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Animations trigger only once
        });
    }, []);

    const applyFilter = () => {
        const filterResults = postData?.filter(item => {
            const meetsCityPurchase = cityPurchase ? item?.departureCity.toLowerCase().includes(cityPurchase.toLowerCase()) : true;
            const meetsCityDelivery = cityDelivery ? item?.arrivalCity.toLowerCase().includes(cityDelivery.toLowerCase()) : true;
            const meetsMinRating = item?.userId?.travellerSuccessRate >= minRating;
            const meetsUntilDate = untilDate ? new Date(item?.departureDate) <= new Date(untilDate) : true;
            const meetsMaxAmount = maxAmount ? item?.PurchasePrice <= maxAmount : true;

            return meetsCityPurchase && meetsCityDelivery;
        });

        setFilteredData(filterResults);  // Update filtered data
        console.log(filterResults);
        setCurrentPage(1);  // Reset to page 1 after filter is applied
    };

    // If no filter is applied, use all items
    const displayData = filteredData?.length > 0 ? filteredData : postData;

    // Calculate the start and end index based on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = displayData?.slice(startIndex, endIndex);
    const totalPages = Math?.ceil(displayData?.length / itemsPerPage);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Filter handlers
    const handleRatingChange = (e) => setMinRating(e.target.value);
    const handleDateChange = (e) => setUntilDate(e.target.value);
    const handleAmountChange = (e) => setMaxAmount(e.target.value);

    return (
        <div className='bg-[#f6f6fb]'>
            <div className='lg:w-[80%] w-[90%] mx-auto py-10 md:py-20'>
                <h2 className='text-center md:text-4xl text-3xl font-semibold text-primary'>
                    What is it like to be a courier with Cobag?
                </h2>

                <h3 className='text-center md:w-2/4 mx-auto mb-10 mt-3 md:text-xl'>
                    As <span className='font-semibold text-primary'>a courier</span> , earn even more: use your travels to make purchases abroad for other CoBag users. Earn{' '}
                    <span className='font-semibold text-primary'>at least €27 in earnings for each purchase mission.</span>
                </h3>

                <div data-aos="fade-up" className='my-20'>
                    <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-10 text-center'>
                        {/* Sections for each step */}
                        <div className='hover:-mt-2 duration-500'>
                            <img className='w-full mx-auto' src="/Images/NewSection/form-1.png" alt="" />
                            <h2 className='mt-5 flex items-center gap-2 justify-center font-semibold text-xl text-primary mb-3'>
                                Add your journey
                            </h2>
                            <p>Enter your destination and travel dates to discover purchase requests and be contacted by buyers interested in your trip.</p>
                        </div>
                        <div className='hover:-mt-2 duration-500'>
                            <img className='w-full mx-auto' src="/Images/NewSection/waiting.png" alt="" />
                            <h2 className='mt-5 flex items-center gap-2 justify-center font-semibold text-xl text-primary mb-3'>
                                Choose ads
                            </h2>
                            <p>Select the purchases you are interested in or simply wait to be approached by buyers.</p>
                        </div>
                        <div className='hover:-mt-2 duration-500'>
                            <img className='w-full mx-auto' src="/Images/NewSection/shop.png" alt="" />
                            <h2 className='mt-5 flex items-center gap-2 justify-center font-semibold text-xl text-primary mb-3'>
                                Buy the product
                            </h2>
                            <p>Once agreed upon, the buyer will pay via CoBag, and the payment will be retained. Purchase the item with your own money.</p>
                        </div>
                        <div className='hover:-mt-2 duration-500'>
                            <img className='w-full mx-auto' src="/Images/NewSection/money.png" alt="" />
                            <h2 className='mt-5 flex items-center gap-2 justify-center font-semibold text-xl text-primary mb-3'>
                                Deliver and get paid
                            </h2>
                            <p>Return the item upon your return to the airport or train station and enter the 4-digit delivery code: you will then receive your refund and your mission earnings immediately.</p>
                        </div>
                    </div>
                    <button className='flex items-center justify-center gap-2 bg-primary text-white hover:scale-[1.1] duration-300 py-3 px-8 rounded-xl mx-auto mt-10'>
                        Suggest my route
                    </button>
                </div>
            </div>

            {/* Filter Section */}
            <section id='courier' className='lg:w-[80%] w-[90%] mx-auto'>
                <div className="bg-white shadow-lg rounded-lg p-8 border text-left mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">Filter ads</h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                        <div className="space-y-2">
                            <span className="text-gray-600 block">City of purchase</span>
                            <input
                                type="text"
                                placeholder="Ex: New York"
                                value={cityPurchase}
                                onChange={(e) => setCityPurchase(e.target.value)}
                                className="w-full px-4 py-2 border rounded-md text-gray-700"
                            />
                        </div>

                        <div className="space-y-2">
                            <span className="text-gray-600 block">Delivery city</span>
                            <input
                                type="text"
                                placeholder="Ex: Paris"
                                value={cityDelivery}
                                onChange={(e) => setCityDelivery(e.target.value)}
                                className="w-full px-4 py-2 border rounded-md text-gray-700"
                            />
                        </div>

                        <div className="space-y-2">
                            <span className="text-gray-600 block">Until</span>
                            <input
                                type="date"
                                value={untilDate}
                                onChange={handleDateChange}
                                className="w-full px-4 py-2 border rounded-md text-gray-700"
                            />
                        </div>

                        <div className="space-y-2">
                            <span className="text-gray-600 block">Maximum amount to advance</span>
                            <input
                                type="number"
                                value={maxAmount}
                                onChange={handleAmountChange}
                                placeholder="Maximum amount"
                                className="w-full px-4 py-2 border rounded-md text-gray-700"
                            />
                        </div>

                        <div className="items-center">
                            <span className="text-gray-600 block">Minimum traveler rating</span>
                            <div className='flex items-center gap-3'>
                                <input
                                    type="range"
                                    min="1"
                                    max="5"
                                    step="0.1"
                                    value={minRating}
                                    onChange={handleRatingChange}
                                    className="w-full"
                                />
                                <span className="text-gray-700 min-w-16">{minRating} <span className='text-2xl text-[#f3d423]'>★</span></span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button onClick={applyFilter} className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">
                            Apply Filter
                        </button>
                    </div>
                </div>

                {/* Items Display */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10'>
                    {currentItems?.map((request, index) => (
                        <div key={index} className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-60">
                                <img src={baseUrl + request?.uploadImage} alt={request.title} className="w-full h-60 object-cover" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                    <h3 className="text-lg font-semibold mb-5 text-white">{request.title}</h3>
                                    <div className="flex items-center gap-3 justify-between">
                                        <p className="text-3xl text-white">{request.PurchasePrice}€</p>
                                        <p className="text-sm text-gray-100 bg-green-600 px-3 py-2 rounded-full">
                                            Earnings: {request.PurchasePrice / 10}€ or more
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between ">
                                    <div className="text-left mt-2">
                                        <p className="text-sm text-gray-600">Purchase in: {request.departureCity}</p>
                                        <p className="text-sm text-gray-600">Delivery to: {request.arrivalCity}</p>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-600">Deadline: {request.arrivalDate}</p>
                                </div>
                                <div className="mt-3 flex items-center gap-2">
                                    <img className="w-10 h-10 rounded-full" src={baseUrl + request?.userId?.profileImage} alt="" />
                                    <div className="text-left">
                                        <span className="mr-2">
                                            {request?.userId?.firstName + ' ' + request?.userId?.lastName}
                                        </span>
                                        <br />
                                        <span className="text-yellow-400">★</span>
                                        <span className="ml-2 text-gray-500 text-xs">
                                            {request?.userId?.travellerSuccessRate}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleContact(request)}
                                    className="mt-4 px-6 w-full py-3 text-xl bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center justify-center gap-2 ">
                                    <FiMessageSquare />Contact
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className='flex justify-center mt-8'>
                    <button onClick={() => goToPage(currentPage - 1)} className='px-4 py-2 text-primary rounded-l-lg hover:bg-primary-dark' disabled={currentPage === 1}>
                        <FaChevronLeft className='text-2xl' />
                    </button>
                    <span className='px-4 py-2 text-lg text-gray-700'>{`${currentPage} / ${totalPages}`}</span>
                    <button onClick={() => goToPage(currentPage + 1)} className='px-4 py-2 text-primary rounded-r-lg hover:bg-primary-dark' disabled={currentPage === totalPages}>
                        <FaChevronRight className='text-2xl' />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Courier;
