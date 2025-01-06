'use client' ;
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "How does the CoBag Sky subscription work?",
            answer: "CoBag Sky is a monthly subscription without commitment that offers you 0% commissions and Plus insurance, covering your packages up to €500 on all your missions. You can cancel it at any time.",
        },
        {
            question: "When am I charged?",
            answer: "The €10 deduction is made each month on the anniversary date of your subscription.",
        },
        {
            question: "How do I calculate my savings?",
            answer: "Without CoBag Sky, each transaction is subject to a 20% commission. With CoBag Sky, commissions are €0. In addition, Plus Insurance is included for members, giving you additional coverage and a saving of €8 on each mission.",
        },
    ];

    return (
        <div className="py-20 text-center bg-[#f2f3ff]">
            <h2 className="text-4xl font-semibold text-primary mb-10">Frequently Asked Questions</h2>
            <div className="lg:w-2/4 lg:mx-auto mx-5">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className="mb-5 bg-white px-5 py-8 rounded-lg shadow-md cursor-pointer"
                        onClick={() => toggleFaq(index)}
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
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

export default Faq;
