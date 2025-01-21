'use client';

import { useOtpVerifyMutation } from '@/app/redux/Features/Auth/verifyotp';
import { useRouter } from 'next/navigation';
import React, { useState, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Page = () => {

    const router = useRouter();
    const [verifyOTP, { isLoading }] = useOtpVerifyMutation()
    const [otp, setOtp] = useState(new Array(6).fill("")); // Initialize OTP state with 6 empty strings
    const inputRefs = useRef([]); // Create refs for input fields


    const handleOtpChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value.slice(-1); // Allow only the last typed digit
        setOtp(newOtp);

        // Move focus to the next input field
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        const otpCode = otp.join(""); // Combine OTP digits
        console.log("Submitted OTP:", otpCode);
        // Number(otpCode)
        const body = {
            verificationCode: otpCode
        }


        const res = await verifyOTP(body).unwrap()
        console.log(res.data?.email);

        if (res.success) {
            toast.success('OTP Verified Successfully !!')
            router.push(`/resetpassword/${res.data?.email}`)
        } else {
            toast.error(res?.error?.message || 'Something went wrong')
        }
    }




    return (
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
            <Toaster />
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
                    <div className="my-6">
                        <label className="block text-sm font-semibold">Enter OTP</label>
                        <div className="flex justify-between gap-5">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleOtpChange(e.target.value, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    className="w-1/6 h-10 border-b border-gray-300 text-center text-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    ref={(el) => (inputRefs.current[index] = el)} // Assign ref to each input
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
