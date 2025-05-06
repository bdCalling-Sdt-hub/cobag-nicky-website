'use client'
// import { useForgotpasswordMutation } from '@/app/redux/Features/Auth/forgetpassword';
import { useRouter } from 'next/navigation';


import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AiOutlineMail } from 'react-icons/ai';
import { useForgotpasswordMutation } from '../../redux/Features/Auth/forgetpassword';

const Page = () => {

    const router = useRouter();

    const [forgetPass] = useForgotpasswordMutation();

    const handleForgetPassword = async (e) => {
        e.preventDefault();  // Prevent the default form submit behavior
        const email = e.target.email.value; // Get the email from the form input

        // Use the mutation hook to call the API
        const res = await forgetPass({ email }).unwrap();  // Unwrap the response to access raw data directly
        console.log(res);

        if (!res.error) {
            toast.success("OTP sent successfully!");  // Display a success toast
            router.push(`/verifyotp`)
        } else {
            toast.error(res.error.message || "An error occurred"); // Display error toast
        }
    };

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
            <div className="md:w-3/4 mx-auto my-20 flex items-center justify-center">
                <form onSubmit={handleForgetPassword} className="w-full">
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
                            name='email'
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
