'use client';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { LuBookCheck, LuPlane, LuShoppingBag, LuUserCheck, LuPackageCheck, LuShoppingCart, LuInfo } from 'react-icons/lu';
import { FiPackage } from 'react-icons/fi';

const Page = () => {
    const [activeCategory, setActiveCategory] = useState(null);

    const faqData = {
        Travelers: [
            {
                question: "How do I create a trip as a traveler?",
                answer: "To create a trip, log in to your account, navigate to 'Create Trip', and provide the required details such as destination and available weight.",
                icon: <LuPlane className="text-primary text-xl" />,
            },
            {
                question: "What are the benefits of being a traveler?",
                answer: "Travelers can earn money by selling unused luggage space and helping others transport their goods.",
                icon: <LuPlane className="text-primary text-xl" />,
            },
        ],
        "Co-luggage officers": [
            {
                question: "What is a co-luggage officer?",
                answer: "A co-luggage officer facilitates the safe transport of goods between senders and travelers.",
                icon: <LuUserCheck className="text-primary text-2xl" />,
            },
            {
                question: "How can I become a co-luggage officer?",
                answer: "Sign up on the platform and complete the verification process to become a certified co-luggage officer.",
                icon: <LuUserCheck className="text-primary text-2xl" />,
            },
        ],
        Senders: [
            {
                question: "How do I send a parcel?",
                answer: "Choose a verified traveler heading to your destination and book their service for your parcel.",
                icon: <LuPackageCheck className="text-primary text-2xl" />,
            },
            {
                question: "Are my parcels insured?",
                answer: "Yes, CoBag provides insurance for parcels up to €500 for verified transactions.",
                icon: <LuPackageCheck className="text-primary text-2xl" />,
            },
        ],
        Buyers: [
            {
                question: "How do I purchase a product from another country?",
                answer: "Find a traveler heading back from the desired location, request their service, and finalize the transaction securely.",
                icon: <LuShoppingCart className="text-primary text-2xl" />,
            },
            {
                question: "What fees are involved in buying a product?",
                answer: "Fees vary based on the traveler and the weight of the product. You can view the details on the service page.",
                icon: <LuShoppingCart className="text-primary text-2xl" />,
            },
        ],
        "General questions": [
            {
                question: "What is CoBag?",
                answer: "CoBag is a platform that connects travelers, senders, and buyers for seamless parcel and product delivery.",
                icon: <LuInfo className="text-primary text-2xl" />,
            },
            {
                question: "Is CoBag secure?",
                answer: "Yes, CoBag verifies its users and offers insurance for transactions to ensure safety and reliability.",
                icon: <LuInfo className="text-primary text-2xl" />,
            },
        ],
    };

    const toggleCategory = (category) => {
        setActiveCategory(activeCategory === category ? null : category);
    };

    return (
        <div className="lg:py-20 py-10 px-5 bg-[#f2f3ff]">
            {/* Header */}
            <div className="w-3/4 mx-auto lg:mb-20 mb-10 text-center">
                <div className="flex flex-col justify-center items-center">
                    <LuBookCheck className="text-4xl text-primary block" />
                    <h2 className="lg:text-5xl text-3xl font-semibold text-primary my-5">
                        Frequently Asked Questions (FAQ)
                    </h2>
                    <p className="text-gray-600">
                        Find the answers to your questions based on your profile and your needs.
                    </p>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto space-y-5">
                {Object.keys(faqData).map((category, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md">
                        {/* Category Header */}
                        <div
                            className="flex items-center justify-between  px-5 py-5 cursor-pointer"
                            onClick={() => toggleCategory(category)}
                        >
                            <div className='flex items-center gap-2'>
                                <div className="w-10 h-10 bg-[#f2f3ff] rounded-lg flex items-center justify-center">{faqData[category][0].icon}</div>
                                <h2 className="text-lg font-semibold text-gray-800">{category}</h2>
                            </div>
                            {activeCategory === category ? (
                                <FaChevronUp className="text-gray-500" />
                            ) : (
                                <FaChevronDown className="text-gray-500" />
                            )}
                        </div>

                        {/* FAQ Questions */}
                        {activeCategory === category && (
                            <div className="px-5 py-4 space-y-3">
                                {faqData[category].map((faq, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        {/* <div>{faq.icon}</div> */}
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-700">
                                                {faq.question}
                                            </h3>
                                            <p className="text-sm text-gray-600 mt-1">{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
