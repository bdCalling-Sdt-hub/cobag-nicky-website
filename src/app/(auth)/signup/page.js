import React from 'react';
import { AiOutlineLock, AiOutlineMail, AiOutlineUser, AiOutlinePhone } from 'react-icons/ai';
import { FaApple, FaFacebookF, FaGoogle } from 'react-icons/fa6';

const Page = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
            {/* Left Side Image */}
            <div className="hidden md:block">
                <img
                    className="h-full w-full object-cover"
                    src="/Images/auth/Affiche_cobag.png"
                    alt="Background"
                />
            </div>

            {/* Right Side Form */}
            <div className="md:w-3/4 mx-auto my-10 flex items-center justify-center">
                <form className="w-full rounded-lg">
                    <img className="w-48" src="/Images/Profile/black_logo.png" alt="Logo" />
                    <div className="my-8">
                        <h2 className="text-3xl md:text-5xl font-semibold mb-2">Create an Account</h2>
                        <p className="text-gray-600">Hello there, Let’s start your journey with us.</p>
                    </div>

                    <div className="space-y-5">
                        {/* First Name */}
                        <div className="relative">
                            <label htmlFor="firstName" className="block text-sm font-semibold mb-2">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                placeholder="Enter your first name"
                                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <AiOutlineUser className="absolute left-3 top-[53px] transform -translate-y-1/2 text-gray-400 text-xl" />
                        </div>

                        {/* Last Name */}
                        <div className="relative">
                            <label htmlFor="lastName" className="block text-sm font-semibold mb-2">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Enter your last name"
                                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <AiOutlineUser className="absolute left-3 top-[53px] transform -translate-y-1/2 text-gray-400 text-xl" />
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <AiOutlineMail className="absolute left-3 top-[53px] transform -translate-y-1/2 text-gray-400 text-xl" />
                        </div>

                        {/* Phone Number */}
                        <div className="relative">
                            <label htmlFor="phoneNumber" className="block text-sm font-semibold mb-2">Phone Number</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                placeholder="Enter your phone number"
                                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <AiOutlinePhone className="absolute left-3 top-[53px] transform -translate-y-1/2 text-gray-400 text-xl" />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <label htmlFor="password" className="block text-sm font-semibold mb-2">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <AiOutlineLock className="absolute left-3 top-[53px] transform -translate-y-1/2 text-gray-400 text-xl" />
                        </div>
                    </div>

                    {/* Terms and Privacy Policy */}
                    <div className="flex items-center my-4">
                        <input
                            type="checkbox"
                            id="terms"
                            className="w-4 h-4 mr-2 accent-primary focus:outline-none"
                        />
                        <label htmlFor="terms" className="text-gray-600 text-sm">
                            I accept the <a href="/terms" className="text-primary font-semibold">Terms of Service</a> and <a href="/privacy" className="text-primary font-semibold">Privacy Policy</a>.
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
                    >
                        Register
                    </button>

                    {/* Divider */}
                    <div className="text-center my-5">
                        <span className="text-gray-600">Or sign up with</span>
                    </div>

                    {/* Social Logins */}
                    <div className="flex justify-center gap-4">
                        <button className="flex items-center gap-2 bg-gray-100 border border-gray-300 py-2 px-4 rounded-lg">
                            <FaGoogle className="text-red-500" /> Google
                        </button>
                        <button className="flex items-center gap-2 bg-gray-100 border border-gray-300 py-2 px-4 rounded-lg">
                            <FaFacebookF className="text-blue-500" /> Facebook
                        </button>
                        <button className="flex items-center gap-2 bg-gray-100 border border-gray-300 py-2 px-4 rounded-lg">
                            <FaApple className="text-black" /> Apple
                        </button>
                    </div>

                    {/* Already Have an Account */}
                    <div className="text-center mt-6">
                        <span className="text-gray-600">Already have an account? </span>
                        <a href="/login" className="text-primary font-semibold">Log in</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;
