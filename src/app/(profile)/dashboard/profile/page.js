'use client';
import { Button, Modal, Upload } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import React, { useState } from 'react';
import { CiEdit, CiLocationOn } from 'react-icons/ci';
import { FaMapMarkerAlt, FaMobileAlt, FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope, FaLock, FaRegUser, FaToggleOff, FaToggleOn, FaUser } from 'react-icons/fa6';
import { GoArrowDownRight, GoInfo } from 'react-icons/go';
import { IoMdNotifications } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';
import { LuFileText, LuWallet } from 'react-icons/lu';
import { MdOutlineArrowOutward, MdOutlineEmail, MdOutlinePhone } from 'react-icons/md';
import { UploadOutlined } from '@ant-design/icons';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsSend } from 'react-icons/bs';
import { FiAlertTriangle } from 'react-icons/fi';


const Page = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    // ============= reset Password =============

    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

    const openPasswordResetModal = () => {
        console.log("Opening password reset modal");
        setIsPasswordModalOpen(true);
    };

    const closePasswordResetModal = () => {
        console.log("Closing password reset modal");
        setIsPasswordModalOpen(false);
    };

    const submitPasswordReset = () => {
        console.log("Password reset submitted");
        // Add logic to handle password reset here
        setIsPasswordModalOpen(false);
    };

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword((prev) => !prev);

    const [showOldPassword, setShowOldPassword] = useState(false);
    const toggleOldPasswordVisibility = () => setShowOldPassword((prev) => !prev);


    return (
        <div className='scroll-smooth'>
            <section id='profile' className='grid lg:grid-cols-3 gap-5'>
                <div className='p-5 bg-white lg:col-span-2 rounded-lg'>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-semibold text-primary text-xl'>Personal Information</h2>
                        <button onClick={showModal} className='flex items-center gap-2 bg-primary text-white py-2 px-5 rounded-md'><CiEdit />Edit</button>
                    </div>
                    <div className='mt-10'>
                        <img className='w-20' src="/Images/Isend/availableRoutesUser.png" alt="" />
                        <form action="">
                            <div className='grid lg:grid-cols-2 gap-5'>
                                {/* Full Name */}
                                <div className="mt-5 relative">
                                    <label className="text-sm font-semibold">Full Name</label>
                                    <div className="relative flex items-center">
                                        <span className="absolute left-3 top-6 text-gray-400">
                                            <FaUser />
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Enter full name"
                                            className="w-full border border-slate-200 rounded-lg p-3 pl-10 mt-2 focus:outline-none focus:ring-0 bg-gray-100"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="mt-5 relative">
                                    <label className="text-sm font-semibold">Email</label>
                                    <div className="relative flex items-center">
                                        <span className="absolute left-3 top-6 text-gray-400">
                                            <FaEnvelope />
                                        </span>
                                        <input
                                            type="email"
                                            placeholder="Enter email"
                                            className="w-full border border-slate-200 rounded-lg p-3 pl-10 mt-2 focus:outline-none focus:ring-0 bg-gray-100"
                                        />
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="mt-5 relative">
                                    <label className="text-sm font-semibold">Address</label>
                                    <div className="relative flex items-center">
                                        <span className="absolute left-3  top-6 text-gray-400">
                                            <FaMapMarkerAlt />
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Enter address"
                                            className="w-full border border-slate-200 rounded-lg p-3 pl-10 mt-2 focus:outline-none focus:ring-0 bg-gray-100"
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="mt-5 relative">
                                    <label className="text-sm font-semibold">Phone</label>
                                    <div className="relative flex items-center">
                                        <span className="absolute left-3 top-6 text-gray-400">
                                            <FaPhoneAlt />
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Enter phone"
                                            className="w-full border border-slate-200 rounded-lg p-3 pl-10 mt-2 focus:outline-none focus:ring-0 bg-gray-100"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type='button'
                                        onClick={openPasswordResetModal}
                                        className="gap-2 text-primary border-b-2 border-primary font-semibold mt-10"
                                    >
                                        Reset Password
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='lg:col-span-1 bg-white  rounded-lg p-5'>
                    <h2 className='text-2xl font-semibold text-primary py-5'>Wallet</h2>
                    <div className='bg-primary rounded-lg p-5 flex items-center gap-5 my-5'>
                        <div className='flex items-center gap-2 w-14 h-14 bg-[#383f8a] text-white justify-center rounded-full'>
                            <LuWallet className='text-2xl' />
                        </div>
                        <div className='text-white'>
                            <p>Balance available</p>
                            <h2 className='text-3xl font-semibold mt-2'>125.50€ </h2>
                        </div>
                    </div>
                    <div>
                        <h2 className='font-semibold text-primary'>Recent Transactions</h2>
                        <div className='flex items-center justify-between gap-5 flex-wrap bg-[#f6f6fb] my-5 p-5 rounded-md'>
                            <div className='flex items-center flex-wrap gap-3 '>
                                <div className='flex items-center gap-2 w-14 h-14 bg-[#e0eee9] text-[#2b8f6c] justify-center rounded-full '>
                                    <GoArrowDownRight className='text-2xl' />
                                </div>
                                <div>
                                    <p className='font-semibold mb-2'>Payment received from Marie D.</p>
                                    <span>2024-03-14</span>
                                </div>
                            </div>
                            <div className='text-right'>
                                <h3 className='text-[#2b8f6c] font-semibold text-xl mb-2'>+ 125.50€</h3>
                                <p className='text-[#2b8f6c]'>Completed</p>
                            </div>
                        </div>

                        <div className='flex items-center flex-wrap justify-between gap-5 bg-[#f6f6fb] my-5 p-5 rounded-md'>
                            <div className='flex items-center flex-wrap gap-3 '>
                                <div className='flex items-center gap-2 w-14 h-14 bg-[#f4e2e6] text-[#ff2353] justify-center rounded-full '>
                                    <MdOutlineArrowOutward className='text-2xl' />
                                </div>
                                <div>
                                    <p className='font-semibold mb-2'>Payment received from Marie D.</p>
                                    <span>2024-03-14</span>
                                </div>
                            </div>
                            <div className='text-right'>
                                <h3 className='text-[#ff2353] font-semibold text-xl mb-2'>+ 125.50€</h3>
                                <p className='text-[#ffcc23]'>On hold</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* edit profile modal  */}
            <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null} // Remove default footer
                closable={false} // Remove the cancel icon (close button)
                className='!min-w-[40vw] my-20'
            >
                <form>
                    <div className='mb-5 flex justify-between items-center'>
                        <h2 className="font-semibold text-primary text-xl">Personal Information</h2>
                        <div className="">
                            <button
                                type="button"
                                onClick={handleOk}
                                className="bg-primary text-white px-10 py-3 rounded-md"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                    <div className='my-10 flex items-center gap-3'>
                        <img className='min-w-20' src="/Images/Isend/availableRoutesUser.png" alt="" />
                        <div>
                            <Upload>
                                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                            </Upload>
                            <h2 className='mt-3'>Upload your profile picture</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        {/* Full Name */}
                        <div className="relative">
                            <label className="block text-sm font-semibold mb-2">Full Name</label>
                            <div className="relative flex items-center">
                                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <FaRegUser className='text-xl' />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Enter full name"
                                    className="w-full border border-slate-200 rounded-lg p-2 pl-10"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <label className="block text-sm font-semibold mb-2">Email</label>
                            <div className="relative flex items-center">
                                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <MdOutlineEmail className='text-xl' />
                                </span>
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    className="w-full border border-slate-200 rounded-lg p-2 pl-10"
                                />
                            </div>
                        </div>

                        {/* Address */}
                        <div className="relative">
                            <label className="block text-sm font-semibold mb-2">Address</label>
                            <div className="relative flex items-center">
                                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <CiLocationOn className='text-xl' />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Enter address"
                                    className="w-full border border-slate-200 rounded-lg p-2 pl-10"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="relative">
                            <label className="block text-sm font-semibold mb-2">Phone</label>
                            <div className="relative flex items-center">
                                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <MdOutlinePhone className='text-xl' />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Enter phone"
                                    className="w-full border border-slate-200 rounded-lg p-2 pl-10"
                                />
                            </div>
                        </div>
                    </div>

                </form>

            </Modal>

            {/* reset Password modal */}
            <Modal
                open={isPasswordModalOpen}
                onCancel={closePasswordResetModal}
                footer={null}
                closable={false}
                className='my-20 !min-w-[20vw]'
            >
                <div className='mb-5'>
                    <h2 className="text-xl font-semibold text-primary mb-2">
                        Reset Password
                    </h2>
                    <p>Your password must be 8-10 character long.</p>
                </div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        submitPasswordReset();
                    }}
                >
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">Old Password</label>
                        <div className="relative">
                            <span className="absolute left-3 top-3 text-gray-400">
                                <FaLock className="text-lg" />
                            </span>
                            <input
                                type={showOldPassword ? 'text' : 'password'}
                                placeholder="Enter old password"
                                className="w-full border border-slate-200 rounded-lg p-2 pl-10 focus:outline-none focus:ring-0"
                            />
                            <span
                                className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                                onClick={toggleOldPasswordVisibility}
                            >
                                {showOldPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">New Password</label>
                        <div className="relative">
                            <span className="absolute left-3 top-3 text-gray-400">
                                <FaLock className="text-lg" />
                            </span>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter new password"
                                className="w-full border border-slate-200 rounded-lg p-2 pl-10 focus:outline-none focus:ring-0"
                            />
                            <span
                                className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">Confirm Password</label>
                        <div className="relative">
                            <span className="absolute left-3 top-3 text-gray-400">
                                <FaLock className="text-lg" />
                            </span>
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                placeholder="Confirm new password"
                                className="w-full border border-slate-200 rounded-lg p-2 pl-10 focus:outline-none focus:ring-0"
                            />
                            <span
                                className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-end gap-3 mt-5">
                        <button
                            type="button"
                            onClick={closePasswordResetModal}
                            className="bg-gray-300 text-gray-700 px-5 py-2 rounded-md"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-primary text-white px-5 py-2 rounded-md"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </Modal>


            <section id='documents' className='my-10 p-5 bg-white rounded-lg'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-2xl font-semibold text-primary mb-5'>Ethan documents</h2>
                    <div className='flex items-center gap-2'>
                        <span className='text-[#2b8f6c] bg-[#2b8f6c1f] font-semibold py-1 px-6 rounded-full'>Verified</span>
                        <button className='bg-primary text-white py-2 px-5 rounded-lg flex items-center gap-3'>Send <BsSend /> </button>
                    </div>
                </div>


                <div className='my-5'>
                    <h2 className='font-medium'>Identity document</h2>
                    <div className='bg-[#f6f6fb] p-5 rounded-lg my-5 flex items-center justify-between flex-wrap gap-5'>
                        <div className=' flex items-center gap-5'>
                            <div className='flex items-center gap-3 w-14 h-14 bg-[#eeefff] text-[#2b8f6c] justify-center rounded-md'>
                                <LuFileText className='text-2xl text-primary' />
                            </div>
                            <div>
                                <h2 className='font-semibold'>Identity card.pdf</h2>
                                <span>Added on: 2024-03-14</span>
                            </div>
                        </div>
                        {/* <div>
                            <span className='text-[#2b8f6c] bg-[#2b8f6c1f] font-semibold py-2 px-5 rounded-full'>Vefiry</span>
                        </div> */}
                    </div>
                    <div className='mt-5'>
                        <Dragger name="files" action="https://www.mocky.io/v2/5cc8019d300000980a055e76">

                            <p className="ant-upload-text font-semibold">Drag & Drop your files or Browse</p>
                        </Dragger>
                    </div>
                </div>

                <div className='my-5'>
                    <h2 className='font-medium'>Proof of address</h2>
                    <div className='bg-[#f6f6fb] p-5 rounded-lg my-5 flex items-center justify-between flex-wrap gap-5'>
                        <div className=' flex items-center gap-5'>
                            <div className='flex items-center gap-3 w-14 h-14 bg-[#eeefff] text-[#2b8f6c] justify-center rounded-md'>
                                <LuFileText className='text-2xl text-primary' />
                            </div>
                            <div>
                                <h2 className='font-semibold'>Facture EDF.pdf</h2>
                                <span>Added on: 2024-03-14</span>
                            </div>
                        </div>
                        {/* <div>
                            <span className='text-[#ffd344] bg-[#ffd34431] font-semibold py-2 px-5 rounded-full'>On hold</span>
                        </div> */}
                    </div>
                    <div className='mt-5'>
                        <Dragger name="files" action="https://www.mocky.io/v2/5cc8019d300000980a055e76">

                            <p className="ant-upload-text font-semibold">Drag & Drop your files or Browse</p>
                        </Dragger>
                    </div>
                </div>

                <div className='my-5'>
                    <h2 className='font-medium'>RIB</h2>
                    <div className='bg-[#f6f6fb] p-5 rounded-lg my-5 flex items-center justify-between flex-wrap gap-5'>
                        <div className=' flex items-center gap-5'>
                            <div className='flex items-center gap-3 w-14 h-14 bg-[#eeefff] text-[#2b8f6c] justify-center rounded-md'>
                                <LuFileText className='text-2xl text-primary' />
                            </div>
                            <div>
                                <h2 className='font-semibold'>Facture EDF.pdf</h2>
                                <span>Added on: 2024-03-14</span>
                            </div>
                        </div>
                        {/* <div>
                            <span className='text-[#2b8f6c] bg-[#2b8f6c1f] font-semibold py-2 px-5 rounded-full'>Vefiry</span>
                        </div> */}
                    </div>
                    <div className='mt-5'>
                        <Dragger name="files" action="https://www.mocky.io/v2/5cc8019d300000980a055e76">

                            <p className="ant-upload-text font-semibold">Drag & Drop your files or Browse</p>
                        </Dragger>
                    </div>
                </div>

                <div className='p-5 bg-[#e0e0ff86] text-[#3030b9] flex items-center gap-2 rounded-md'>
                    <div className='min-w-10'>
                        <GoInfo className='text-2xl min-w-10' />
                    </div> To be able to use all CoBag services you must provide these documents. They will be verified within 24-48 hours.
                </div>

                <div className='p-5 mt-5 bg-[#F989251A] text-[#F98925] flex items-center gap-2 rounded-md'>
                    <div className='min-w-10'>
                        <FiAlertTriangle className='text-2xl min-w-10' />
                    </div> <span className='font-semibold'>Why Not Approve Your Document</span> : your id document not valid please submit again , will be verified within 24-48 hours .
                </div>


            </section>

            <section id='preferences' className='my-5 p-5 bg-white rounded-lg'>
                <h2 className='font-semibold text-2xl text-primary'>Preferences</h2>
                <div>
                    <div className='rounded-lg my-10 flex items-center justify-between'>
                        <div className=' flex items-center gap-5'>
                            <div className='flex items-center gap-3 w-14 h-14 bg-[#eeefff] text-[#2b8f6c] justify-center rounded-md'>
                                <IoMdNotifications className='text-2xl text-primary' />
                            </div>
                            <div>
                                <h2 className='font-semibold mb-1'>Notifications SMS</h2>
                                <span className='text-sm'>Receive SMS notifications</span>
                            </div>
                        </div>
                        <div>
                            <FaToggleOn className='text-5xl font-semibold text-primary' />
                        </div>
                    </div>
                    <div className='rounded-lg my-10 flex items-center justify-between'>
                        <div className=' flex items-center gap-5'>
                            <div className='flex items-center gap-3 w-14 h-14 bg-[#eeefff] text-[#2b8f6c] justify-center rounded-md'>
                                <MdOutlineEmail className='text-2xl text-primary' />
                            </div>
                            <div>
                                <h2 className='font-semibold mb-1'>Notifications email</h2>
                                <span className='text-sm'>Receive email notifications</span>
                            </div>
                        </div>
                        <div>
                            <FaToggleOn className='text-5xl font-semibold text-primary' />
                        </div>
                    </div>
                    <div className='rounded-lg my-10 flex items-center justify-between'>
                        <div className=' flex items-center gap-5'>
                            <div className='flex items-center gap-3 w-14 h-14 bg-[#eeefff] text-[#2b8f6c] justify-center rounded-md'>
                                <IoEyeOutline className='text-2xl text-primary' />
                            </div>
                            <div>
                                <h2 className='font-semibold mb-1'>Public profile</h2>
                                <span className='text-sm'>Make your profile publicly visible</span>
                            </div>
                        </div>
                        <div>
                            <FaToggleOff className='text-5xl font-semibold text-primary' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Page;
