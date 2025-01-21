// 'use client';
// import baseUrl from '@/app/redux/api/baseUrl';
// import { useResetPasswordMutation } from '@/app/redux/Features/Auth/resetpassword';
// import { useParams, useRouter } from 'next/navigation';
//   // Use useRouter from 'next/router' for query access
// import React, { useState, useEffect } from 'react';
// import toast, { Toaster } from 'react-hot-toast';
// import { AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

// const ResetPasswordPage = () => {

//     const router = useRouter();

//     const { email } = useParams();  // Access email from query parameter using useRouter
//     const [decodedEmail, setDecodedEmail] = useState(null);

//     useEffect(() => {
//         if (email) {
//             setDecodedEmail(decodeURIComponent(email));  // Ensure email is decoded once available
//         }
//     }, [email]);

//     const [passwordChangePassword] = useResetPasswordMutation();
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const newPassword = e.target.newPassword.value;
//         const confirmPassword = e.target.confirmPassword.value;

//         if (newPassword !== confirmPassword) {
//             return alert('Passwords do not match');
//         }

//         const body = {
//             newPassword,
//             confirmNewPassword: confirmPassword
//         };

//         console.log(body);

//         fetch(`${baseUrl}/auth/change-passs/${decodedEmail}`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(body),
//         })
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//                 if (data.success) {
//                     router.push('/login') // Redirect to login after successful password reset
//                     toast.success('Password changed successfully');
//                 }
//             })
//             .catch(error => {
//                 console.error('Error:', error);  // Log any error for debugging
//             });
//     };

//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
//             <Toaster />
//             {/* Left Side Image */}
//             <div className="hidden md:block">
//                 <img
//                     className="h-screen w-full object-cover"
//                     src="/Images/auth/Affiche_cobag.png"
//                     alt="Background"
//                 />
//             </div>

//             {/* Right Side Form */}
//             <div className="md:w-3/4 w-full px-5 md:px-0 mx-auto my-20 flex items-center justify-center">
//                 <form className="w-full rounded-lg" onSubmit={handleSubmit}>
//                     <img className="w-48 " src="/Images/Profile/black_logo.png" alt="Logo" />
//                     <div className="my-8">
//                         <h2 className="text-3xl md:text-5xl font-semibold mb-2">Reset Password</h2>
//                         <p className="text-gray-600">Set your new password below.</p>
//                     </div>

//                     {/* New Password */}
//                     <div className="relative my-6">
//                         <label htmlFor="newPassword" className="block text-sm font-semibold mb-2">
//                             New Password
//                         </label>
//                         <input
//                             type={showPassword ? "text" : "password"}
//                             id="newPassword"
//                             placeholder="Enter your new password"
//                             className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//                         />
//                         <AiOutlineLock className="absolute left-3 top-[53px] transform -translate-y-1/2 text-gray-400 text-xl" />

//                         {/* Toggle Show/Hide Password Icon */}
//                         <button
//                             type="button"
//                             className="absolute right-3 top-[53px] transform -translate-y-1/2 text-gray-400 text-xl"
//                             onClick={() => setShowPassword(!showPassword)}
//                         >
//                             {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//                         </button>
//                     </div>

//                     {/* Confirm Password */}
//                     <div className="relative my-6">
//                         <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-2">
//                             Confirm Password
//                         </label>
//                         <input
//                             type={showConfirmPassword ? "text" : "password"}
//                             id="confirmPassword"
//                             placeholder="Confirm your new password"
//                             className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//                         />
//                         <AiOutlineLock className="absolute left-3 top-[53px] transform -translate-y-1/2 text-gray-400 text-xl" />

//                         {/* Toggle Show/Hide Confirm Password Icon */}
//                         <button
//                             type="button"
//                             className="absolute right-3 top-[53px] transform -translate-y-1/2 text-gray-800 text-xl"
//                             onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                         >
//                             {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//                         </button>
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                         type="submit"
//                         className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
//                     >
//                         Reset Password
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default ResetPasswordPage;

'use client';
import baseUrl from '@/app/redux/api/baseUrl';
import { useResetPasswordMutation } from '@/app/redux/Features/Auth/resetpassword';
import { useParams, useRouter } from 'next/navigation';  // Correct import for App Directory
import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const ResetPasswordPage = () => {
    const router = useRouter();
    const [decodedEmail, setDecodedEmail] = useState(null);
    const {email } = useParams();

    // Check if email is available in router.query (this is for client-side rendering)
    useEffect(() => {
        // Ensure the email is only accessed after the component has mounted and router.query is available
        if (email) {
            setDecodedEmail(decodeURIComponent(email));  // Decode the email query param
        }
    }, [email]);  // This effect depends on router.query.email

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPassword = e.target.newPassword.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (newPassword !== confirmPassword) {
            return alert('Passwords do not match');
        }

        const body = {
            newPassword,
            confirmNewPassword: confirmPassword,
        };

        console.log(body);

        // Make sure decodedEmail is available before making the fetch request
        if (decodedEmail) {
            try {
                const response = await fetch(`${baseUrl}/auth/change-passs/${decodedEmail}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body),
                });
                const data = await response.json();
                console.log(data);
                if (data.success) {
                    toast.success('Password changed successfully');
                    router.push('/login');  // Navigate to login after successful reset
                } else {
                    toast.error('Error changing password');
                }
            } catch (error) {
                toast.error('Failed to change password');
                console.error('Error:', error);  // Log any error for debugging
            }
        } else {
            toast.error('Email parameter is missing');
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
            <Toaster />
            {/* Left Side Image */}
            <div className="hidden md:block">
                <img className="h-screen w-full object-cover" src="/Images/auth/Affiche_cobag.png" alt="Background" />
            </div>

            {/* Right Side Form */}
            <div className="md:w-3/4 w-full px-5 md:px-0 mx-auto my-20 flex items-center justify-center">
                <form className="w-full rounded-lg" onSubmit={handleSubmit}>
                    <img className="w-48" src="/Images/Profile/black_logo.png" alt="Logo" />
                    <div className="my-8">
                        <h2 className="text-3xl md:text-5xl font-semibold mb-2">Reset Password</h2>
                        <p className="text-gray-600">Set your new password below.</p>
                    </div>

                    {/* New Password */}
                    <div className="relative my-6">
                        <label htmlFor="newPassword" className="block text-sm font-semibold mb-2">New Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="newPassword"
                            placeholder="Enter your new password"
                            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <AiOutlineLock className="absolute left-3 top-[53px] transform -translate-y-1/2 text-gray-400 text-xl" />
                        <button
                            type="button"
                            className="absolute right-3 top-[53px] transform -translate-y-1/2 text-gray-400 text-xl"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </button>
                    </div>

                    {/* Confirm Password */}
                    <div className="relative my-6">
                        <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-2">Confirm Password</label>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            placeholder="Confirm your new password"
                            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <AiOutlineLock className="absolute left-3 top-[53px] transform -translate-y-1/2 text-gray-400 text-xl" />
                        <button
                            type="button"
                            className="absolute right-3 top-[53px] transform -translate-y-1/2 text-gray-800 text-xl"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </button>
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
