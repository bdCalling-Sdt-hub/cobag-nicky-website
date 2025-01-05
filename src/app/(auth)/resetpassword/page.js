'use client';
import React from 'react';
import { AiOutlineLock } from 'react-icons/ai';

const ResetPasswordPage = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Password Reset Successful"); // Add your reset password logic here
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
            <div className="md:w-3/4 w-full px-5 md:px-0 mx-auto my-20 flex items-center justify-center">
                <form className="w-full rounded-lg" onSubmit={handleSubmit} >
                    <img className="w-48 " src="/Images/Profile/black_logo.png" alt="Logo" />
                    <div className="my-8 ">
                        <h2 className="text-3xl md:text-5xl font-semibold mb-2">Reset Password</h2>
                        <p className="text-gray-600">Set your new password below.</p>
                    </div>

                    {/* New Password */}
                    <div className="relative my-6">
                        <label htmlFor="newPassword" className="block text-sm font-semibold mb-2">
                            New Password
                        </label>
                        <input
                            type="password"
                            id="newPassword"
                            placeholder="Enter your new password"
                            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <AiOutlineLock className="absolute left-3 top-[53px] transform -translate-y-1/2 text-gray-400 text-xl" />
                    </div>

                    {/* Confirm Password */}
                    <div className="relative my-6">
                        <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm your new password"
                            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <AiOutlineLock className="absolute left-3 top-[53px] transform -translate-y-1/2 text-gray-400 text-xl" />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPasswordPage;
