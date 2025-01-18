'use client';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { LuBookCheck, LuPlane, LuShoppingBag } from 'react-icons/lu';
import { AiOutlineMail, AiOutlineShoppingCart } from 'react-icons/ai';
import { FiPackage } from 'react-icons/fi';
import { FaUsers } from 'react-icons/fa6';

const Page = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "I want to sell my unused kilos: how do I do it?",
            answer: "To sell your unused kilos, list your available space on CoBag by specifying your destination and weight capacity. Interested buyers can then book your service.",
            icon: <LuPlane className="text-3xl text-primary" />,
        },
        {
            question: "I want to buy kilos for my excess baggage: how do I do it?",
            answer: "Search for travelers heading to your destination on CoBag. Once you find a match, book the service and coordinate the drop-off with the traveler.",
            icon: <FaUsers className="text-3xl text-primary" />,
        },
        {
            question: "I want to send a parcel: how do I do it?",
            answer: "To send a parcel, browse available travelers on CoBag, choose a reliable traveler, and book their service to handle your delivery securely.",
            icon: <FiPackage className="text-3xl text-primary" />,
        },
        {
            question: "I want to buy a product abroad: what should I do?",
            answer: "Find travelers returning from the location of your desired product. Request assistance through CoBag and finalize the transaction securely.",
            icon: <LuShoppingBag className="text-3xl text-primary" />,
        },
    ];

    return (
        <div className="lg:py-20 py-10 bg-[#f2f3ff]">
            {/* Tutorial Section */}
            <div data-aos="fade-up" data-aos-duration="900" className="w-3/4 mx-auto lg:mb-20 mb-10 text-center">
                <div className="flex flex-col justify-center items-center">
                    <LuBookCheck className="text-4xl text-primary block" />
                    <h2 className="lg:text-5xl text-3xl font-semibold text-primary my-5">
                        Tutorial: How to use CoBag?
                    </h2>
                    <p className="text-gray-600">Detailed guide for each user of the platform</p>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="lg:w-2/4 lg:mx-auto mx-5">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className="mb-5 bg-white px-5 py-8 rounded-lg shadow-md cursor-pointer"
                        onClick={() => toggleFaq(index)}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#f2f3ff] rounded-lg flex items-center justify-center">
                                    {faq.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                            </div>
                            {activeIndex === index ? (
                                <FaChevronUp className="text-gray-500" />
                            ) : (
                                <FaChevronDown className="text-gray-500" />
                            )}
                        </div>
                        {activeIndex === index && (
                            <p className="mt-3 text-gray-600 text-left">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;