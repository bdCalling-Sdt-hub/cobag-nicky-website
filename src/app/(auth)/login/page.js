'use client';
import { useGetUserQuery } from '@/app/redux/Features/Auth/getUser';
import { useUserloginMutation } from '@/app/redux/Features/Auth/login';
import { message } from 'antd';
import React, { useState } from 'react';
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai';
import { FaApple, FaFacebookF, FaGoogle } from 'react-icons/fa6';
import { FiEye, FiEyeOff } from 'react-icons/fi';  // Import eye icons for show/hide password
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Page = () => {

    const router = useRouter();
    const { data, isLoading: userLoading } = useGetUserQuery();

    // console.log(data?.token);
    if (data?.token) {
        router.push('/');
    }


    const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
    const [email, setEmail] = useState(''); // State for email input
    const [password, setPassword] = useState(''); // State for password input
    const [isLoading, setIsLoading] = useState(false); // State to track loading status
    const [login] = useUserloginMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const body = {
            email,
            password
        };

        console.log(body);



        const res = await login(body).unwrap();
        console.log('User data:', res?.data);
        console.log(res.data.token);

        if (res.data && res.token) {
            toast.success('user Login Successfully !!')
            localStorage.setItem('token', res.token);
            localStorage.setItem('user', JSON.stringify(res.data[0]));
            router.push('/');

        } else {
            console.error('Token missing in response:', res);
        }

    };



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
            <Toaster />
            {/* Left Side Image */}
            <div className="hidden md:block">
                <img className="h-screen w-full object-cover" src="/Images/auth/login_bg-Image.png" alt="Background" />
            </div>

            {/* Right Side Form */}
            <div className="md:w-3/4 mx-auto my-20 flex items-center justify-center">
                <form onSubmit={handleSubmit} className="w-full rounded-lg">
                    <img className="w-48" src="/Images/Profile/black_logo.png" alt="Logo" />
                    <div className="my-8">
                        <h2 className="text-3xl md:text-5xl font-semibold mb-2">Welcome back!</h2>
                        <p className="text-gray-600">Please enter your details</p>
                    </div>

                    <div className="space-y-5">
                        {/* Email Field */}
                        <div className="relative">
                            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                            <input
                                type="text"
                                id="email"
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Update email state
                                placeholder="Enter your email"
                                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <AiOutlineMail className="absolute left-3 top-[53px] transform -translate-y-1/2 text-gray-400 text-xl" />
                        </div>

                        {/* Password Field */}
                        <div className="relative">
                            <label htmlFor="password" className="block text-sm font-semibold mb-2">Password</label>
                            <input
                                type={passwordVisible ? "text" : "password"} // Toggle password visibility
                                id="password"
                                name='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Update password state
                                placeholder="Enter your password"
                                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <AiOutlineLock className="absolute left-3 top-[53px] transform -translate-y-1/2 text-gray-400 text-xl" />
                            <span
                                className="absolute right-3 top-[53px] transform -translate-y-1/2 cursor-pointer"
                                onClick={() => setPasswordVisible(!passwordVisible)} // Toggle visibility on click
                            >
                                {!passwordVisible ? <FiEyeOff className="text-gray-400 text-xl" /> : <FiEye className="text-gray-400 text-xl" />}
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center my-4">
                        {/* Remember Me */}
                        <label htmlFor="remember" className="flex items-center text-gray-600">
                            <input
                                type="checkbox"
                                id="remember"
                                className="w-4 h-4 mr-2 accent-primary focus:outline-none"
                            />
                            Remember me
                        </label>

                        {/* Forgot Password */}
                        <a href="/forgotpassword" className="text-primary text-sm font-semibold">
                            Forgot password?
                        </a>
                    </div>



                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
                        disabled={isLoading} // Disable button when loading
                    >
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>

                    {/* Divider */}
                    <div className="text-center my-5">
                        <span className="text-gray-600">Or login with</span>
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
                        <span className="text-gray-600">Don’t have an account? </span>
                        <a href="/signup" className="text-primary font-semibold">Sign up</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Page;
