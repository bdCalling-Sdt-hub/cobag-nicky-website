'use client';
import React from 'react';

const Page = () => {
    const handleOtpSubmit = (e) => {
        e.preventDefault();
        console.log("OTP Verified"); // Add OTP verification logic here
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
            {/* Left Side Image */}
            <div className="hidden md:block">
                <img
                    className="h-screen w-full object-cover"
                    src="/Images/auth/Affiche_cobag.png"
                    alt="Background"
                />
            </div>

            {/* Right Side Form */}
            <div className="md:w-3/4 px-5 md:px-0 mx-auto my-20 flex items-center justify-center">
                <form className="w-full" onSubmit={handleOtpSubmit}>
                    <img className="w-48" src="/Images/Profile/black_logo.png" alt="Logo" />
                    <div className="my-8">
                        <h2 className="text-3xl md:text-5xl font-semibold mb-2">Verify OTP</h2>
                        <p className="text-gray-600">Enter the 6-digit code sent to your email.</p>
                    </div>

                    {/* OTP Fields */}
                    <div className="my-6 ">
                        <label className="block text-sm font-semibold">Enter OTP</label>
                        <div className="flex justify-between gap-5">
                            {[...Array(6)].map((_, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    className="w-1/6 h-10 border-b border-gray-300 text-center text-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
                    >
                        Verify OTP
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Page;
