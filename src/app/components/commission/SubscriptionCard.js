import React from 'react';
import { FaArrowRightLong, FaCheck } from 'react-icons/fa6';

const SubscriptionCard = () => {
    return (
        <div className="py-20 bg-gray-100 px-5 md:px-0">
            <div className="max-w-[500px]  w-full mx-auto shadow-xl rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-primary text-white px-6 md:px-10 py-5 text-center">
                    <h3 className="text-xl md:text-2xl mb-5">One subscription, unique benefits</h3>
                    <h2 className="text-5xl md:text-7xl font-semibold">
                        10€ <span className="text-sm">/month</span>
                    </h2>
                </div>

                {/* Content */}
                <div className="p-6 md:p-10">
                    <ul>
                        <li className="flex items-center gap-3 my-4">
                            <div className="bg-[#EEEFF8] text-primary w-6 h-6 flex items-center justify-center rounded-full">
                                <FaCheck />
                            </div>
                            <span>0% commission on all transactions</span>
                        </li>
                        <li className="flex items-center gap-3 my-4">
                            <div className="bg-[#EEEFF8] text-primary w-6 h-6 flex items-center justify-center rounded-full">
                                <FaCheck />
                            </div>
                            <span>No commitment: total freedom</span>
                        </li>
                        <li className="flex items-center gap-3 my-4">
                            <div className="bg-[#EEEFF8] text-primary w-6 h-6 flex items-center justify-center rounded-full">
                                <FaCheck />
                            </div>
                            <span>Immediate savings for buyers and sellers</span>
                        </li>
                        <li className="flex items-center gap-3 my-4">
                            <div className="bg-[#EEEFF8] text-primary w-6 h-6 flex items-center justify-center rounded-full">
                                <FaCheck />
                            </div>
                            <span>Plus Insurance included up to €500</span>
                        </li>
                        <li className="flex items-center gap-3 my-4">
                            <div className="bg-[#EEEFF8] text-primary w-6 h-6 flex items-center justify-center rounded-full">
                                <FaCheck />
                            </div>
                            <span>CoBag Sky badge on your profile</span>
                        </li>
                    </ul>

                    {/* Subscribe Button */}
                    <button className="w-full bg-gradient-to-l mt-10 from-[#C7FFD8] to-[#98DED9] text-primary font-semibold py-3 rounded-lg flex items-center gap-3 justify-center">
                        Subscribe now <FaArrowRightLong />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionCard;
