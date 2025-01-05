import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';

const Page = () => {
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
            <div className="md:w-3/4 mx-auto my-20 flex items-center justify-center">
                <form className="w-full">
                    <img className="w-48" src="/Images/Profile/black_logo.png" alt="Logo" />
                    <div className="my-8">
                        <h2 className="text-3xl md:text-5xl font-semibold mb-2">Forgot Password?</h2>
                        <p className="text-gray-600">
                            Enter your email address to reset your password.
                        </p>
                    </div>

                    {/* Email Field */}
                    <div className="relative my-6">
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <AiOutlineMail className="absolute left-3 top-[53px] transform -translate-y-1/2 text-gray-400 text-xl" />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
                    >
                        Get OTP
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Page;
