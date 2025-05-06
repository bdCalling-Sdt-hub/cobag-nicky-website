'use client'
// import { useGetAllMediaQuery } from '@/app/redux/Features/allMedia/allmedia';
// import { useUserSignupMutation } from '@/app/redux/Features/Auth/signup';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AiOutlineLock, AiOutlineMail, AiOutlineUser, AiOutlinePhone } from 'react-icons/ai';
import { FaApple, FaFacebookF, FaGoogle } from 'react-icons/fa6';
import { GrMultimedia } from 'react-icons/gr';
import { useUserSignupMutation } from '../../redux/Features/Auth/signup';
import { useGetAllMediaQuery } from '../../redux/Features/allMedia/allmedia';

const Page = () => {

    const router = useRouter()

    const [userSignup, { isLoading }] = useUserSignupMutation()
    const { data: allSocialMedia } = useGetAllMediaQuery();
    const socialMedia = allSocialMedia?.data;
    console.log(socialMedia);

    const handleSignupUser = async (e) => {

        e.preventDefault()

        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const phone = e.target.phoneNumber.value;
        const howToKnow = e.target.howToKnow.value;
        const role = 'user';

        const formData = { firstName, lastName, email, password, phone, role, howToKnow }
        console.log(formData);


        try {

            const res = await userSignup(formData).unwrap();
            console.log(res);
            if (res.success) {
                localStorage.setItem('token', res.data?.token);
                toast.success('User Register successfully !!')
                console.log(res?.data?.data?._id);
                // router.push(`/document/${res.data?.data?._id}`)
                router.push(`/emailverify`)
            }

        } catch (error) {
            console.log(error);
            toast.error(error?.data?.errorSources[0]?.message);
        }


    }




    return (
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
            <Toaster />
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
                <form onSubmit={handleSignupUser} className="w-full rounded-lg">
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
                                name='firstName'
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
                                name='lastName'
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
                                name='email'
                                placeholder="Enter your email"
                                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <AiOutlineMail className="absolute left-3 top-[53px] transform -translate-y-1/2 text-gray-400 text-xl" />
                        </div>

                        {/* add a new field for how to know this flatform */}
                        <div className="relative">
                            <label htmlFor="howToKnow" className="block text-sm font-semibold mb-2">How to Know This Platform</label>
                            {/* <input
                                type="text"
                                id="howToKnow"
                                name='howToKnow'
                                placeholder="Enter your platform"
                                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            /> */}
                            <select name="howToKnow" id="howToKnow" className='w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'>
                                <option disabled selected value="Select Platform"> Select Platform</option>
                                {
                                    socialMedia?.map((item, index) => (
                                        <option className='capitalize' key={index} value={item.name}>{item.name}</option>
                                    ))
                                }
                            </select>
                            <GrMultimedia className="absolute left-3 top-[53px] transform -translate-y-1/2 text-gray-400 text-xl" />
                        </div>

                        {/* Phone Number */}
                        <div className="relative">
                            <label htmlFor="phoneNumber" className="block text-sm font-semibold mb-2">Phone Number</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name='phoneNumber'
                                placeholder="Enter your phone number"
                                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <AiOutlinePhone className="absolute rotate-90 left-3 top-[53px] transform -translate-y-1/2 text-gray-400 text-xl" />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <label htmlFor="password" className="block text-sm font-semibold mb-2">Password</label>
                            <input
                                type="password"
                                id="password"
                                name='password'
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
                            name='terms'
                            required
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
