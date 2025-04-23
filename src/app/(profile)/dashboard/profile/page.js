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
import i18n from '@/app/utils/i18';
import { useResetPasswordMutation } from '@/app/redux/Features/Auth/resetpassword';
import toast, { Toaster } from 'react-hot-toast';
import { useGetUserQuery } from '@/app/redux/Features/Auth/getUser';
import baseUrl from '@/app/redux/api/baseUrl';
import { useUpdateProfileMutation } from '@/app/redux/Features/Profile/updateProfile';
import { useGetAllTransactionQuery, useGetAllwidthrawQuery } from '@/app/redux/Features/payment/widthraw';
import moment from 'moment';


const Page = () => {


    const date = new Date().toLocaleDateString();

    const { data } = useGetUserQuery();

    const userId = data?.user?._id;

    const user = data?.user;

    // console.log(user);



    const [passwordChangePassword] = useResetPasswordMutation()

    const handleResetPasswordSubmit = async (e) => {

        e.preventDefault();
        const form = e.target;
        const oldPassword = form.oldPassword.value;
        const newPassword = form.newPassword.value;
        const confirmNewPassword = form.confirmNewPassword.value;
        const body = {
            oldPassword,
            newPassword,
            confirmNewPassword,
        };

        if (newPassword !== confirmNewPassword) {
            return toast.error('New Passwords and Confirm Password do not match');
        }

        try {
            const res = await passwordChangePassword({ body, userId }).unwrap();
            if (res.success) {
                toast.success(res.message)
                form.reset();
                setIsPasswordModalOpen(false);
            }
            else {
                toast.error(res.message)
            }
        } catch (error) {
            toast.error(error?.data?.message);
            console.log(error?.data);
        }
    };



    //====================== profile update  ======================== 


    const [updateProfile] = useUpdateProfileMutation();




    const [profileImage, setProfileImage] = useState(null);
    const [imageAll, setImageAll] = useState(null);
    const handleImageUpload = (file) => {
        const imageUrl = URL.createObjectURL(file); // Generate URL for preview
        setProfileImage(imageUrl);
        setImageAll(file);
    };

    const handleSubmitUserProfileUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData();

        if (profileImage) {
            formData.append("profileImage", imageAll);
        }
        formData.append("firstName", form.firstName.value);
        formData.append("email", form.email.value);
        formData.append("phone", form.phone.value);
        formData.append("address", form.address.value);


        try {
            const res = await updateProfile(formData).unwrap();

            if (res.success) {
                console.log(res?.data);

                localStorage.setItem('user', JSON.stringify(res?.data));

                toast.success(res.message)
                form.reset();
                setIsModalOpen(false);
            }
            else {
                toast.error(res.message)
            }
        } catch (error) {
            toast.error(error?.data?.message);
            console.log(error?.data);
        }



    };


    // document verificaton 


    const [identityFile, setIdentityFile] = useState(null);
    const [proofOfAddressFile, setProofOfAddressFile] = useState(null);
    const [ribFile, setRibFile] = useState(null);

    const handleIdentityFileChange = (info) => {
        if (info.file.status === "done" || info.file.status === "uploading") {
            setIdentityFile(info.file.originFileObj);
            console.log("Identity File Uploaded:", info.file.originFileObj);
        }
    };

    const handleProofOfAddressChange = (info) => {
        if (info.file.status === "done" || info.file.status === "uploading") {
            setProofOfAddressFile(info.file.originFileObj);
            console.log("Proof of Address File Uploaded:", info.file.originFileObj);
        }
    };

    const handleRibFileChange = (info) => {
        if (info.file.status === "done" || info.file.status === "uploading") {
            setRibFile(info.file.originFileObj);
            console.log("RIB File Uploaded:", info.file.originFileObj);
        }
    };

    const handleDocumentSubmit = async (e) => {
        e.preventDefault();

        if (!identityFile || !proofOfAddressFile || !ribFile) {
            toast.error("Please upload all documents");
            return;
        }

        const formData = new FormData();
        formData.append("ethanDocuments", identityFile);
        formData.append("proofOfAddress", proofOfAddressFile);
        formData.append("RIB", ribFile);

        try {
            const res = await updateProfile(formData).unwrap(); // Assumes `updateProfile` is a Redux Toolkit Query API
            if (res.success) {
                console.log("API Response:", res);
                localStorage.setItem("user", JSON.stringify(res.data));
                toast.success(res.message);
                setIsModalOpen(false);
            } else {
                toast.error(res.message);
            }
        } catch (error) {
            console.error("Error in API Call:", error);
            toast.error(error?.data?.message || "An error occurred while uploading documents.");
        }
    };




    const { t } = i18n;

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


    const { data: allWidthrawData } = useGetAllwidthrawQuery();
    const myAllWidthrawData = allWidthrawData?.data[0];

    const { data: transition } = useGetAllTransactionQuery();
    const myWidthrawData = transition?.data;






    return (
        <div className='scroll-smooth'>
            <Toaster />
            <section id='profile' className='grid lg:grid-cols-3 gap-5'>
                <div className='p-5 bg-white lg:col-span-2 rounded-lg'>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-semibold text-primary text-xl'>{t('personalInformation')}</h2>
                        <button onClick={showModal} className='flex items-center gap-2 bg-primary text-white py-2 px-5 rounded-md'><CiEdit />{t('edit')}</button>
                    </div>
                    <div className='mt-10'>
                        <img className='w-16 h-16 rounded-full' src={user?.profileImage ? baseUrl + user?.profileImage : 'https://res.cloudinary.com/nerob/image/upload/v1736698546/ForBdcolling/uuovt73ylqcnaizimunk.png'} alt="" />
                        <form action="">
                            <div className='grid lg:grid-cols-2 gap-5'>
                                {/* Full Name */}
                                <div className="mt-5 relative">
                                    <label className="text-sm font-semibold">{t('fullName')}</label>
                                    <div className="relative flex items-center">
                                        <span className="absolute left-3 top-6 text-gray-400">
                                            <FaUser />
                                        </span>
                                        <input
                                            type="text"
                                            disabled
                                            title='Full Name'
                                            placeholder={user?.firstName ? (user?.firstName + ' ' + user?.lastName) : 'N/A'}
                                            className="w-full border border-slate-200 rounded-lg p-3 pl-10 mt-2 focus:outline-none focus:ring-0 bg-gray-100"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="mt-5 relative">
                                    <label className="text-sm font-semibold">{t('email')}</label>
                                    <div className="relative flex items-center">
                                        <span className="absolute left-3 top-6 text-gray-400">
                                            <FaEnvelope />
                                        </span>
                                        <input
                                            type="email"
                                            disabled
                                            title='Email'
                                            placeholder={user?.email ? user?.email : 'N/A'}
                                            className="w-full border border-slate-200 rounded-lg p-3 pl-10 mt-2 focus:outline-none focus:ring-0 bg-gray-100"
                                        />
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="mt-5 relative">
                                    <label className="text-sm font-semibold">{t('address')}</label>
                                    <div className="relative flex items-center">
                                        <span className="absolute left-3  top-6 text-gray-400">
                                            <FaMapMarkerAlt />
                                        </span>
                                        <input
                                            type="text"
                                            placeholder={user?.address ? user?.address : 'N/A'}
                                            disabled
                                            title='Address'
                                            className="w-full border border-slate-200 rounded-lg p-3 pl-10 mt-2 focus:outline-none focus:ring-0 bg-gray-100"
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="mt-5 relative">
                                    <label className="text-sm font-semibold">{t('phone')}</label>
                                    <div className="relative flex items-center">
                                        <span className="absolute left-3 top-6 text-gray-400">
                                            <FaPhoneAlt />
                                        </span>
                                        <input
                                            type="text"
                                            placeholder={user?.phone ? user?.phone : 'N/A'}
                                            disabled
                                            title='Phone number'
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
                                        {t('resetPassword')}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='lg:col-span-1 bg-white  rounded-lg p-5'>
                    <h2 className='text-2xl font-semibold text-primary py-5'>{t('wallet')}</h2>
                    <div className='bg-primary rounded-lg p-5 flex items-center gap-5 my-5'>
                        <div className='flex items-center gap-2 w-14 h-14 bg-[#383f8a] text-white justify-center rounded-full'>
                            <LuWallet className='text-2xl' />
                        </div>
                        <div className='text-white'>
                            <p>{t('balanceAvailable')}</p>
                            <h2 className='text-3xl font-semibold mt-2'>{myAllWidthrawData?.withdrawAbleAmount || 0} € </h2>
                        </div>
                    </div>


                    {myWidthrawData?.slice(0, 3)?.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between bg-[#f6f6fb] my-5 p-5 rounded-md"
                        >
                            <div className="flex items-center gap-3">
                                <div className={`${item?.status == 'completed' ? "bg-green-100" : "bg-red-100"} flex items-center justify-center w-14 h-14 rounded-full`}>
                                    {
                                        item?.sellKgId?._id == user?.id ?
                                            <GoArrowDownRight className={`${item?.status == 'completed' ? "text-green-500" : "text-red-500"} text-2xl`} /> :
                                            <MdOutlineArrowOutward className={`${item?.status == 'completed' ? "text-green-500" : "text-red-500"} text-2xl`} />

                                    }
                                </div>
                                <div>
                                    <p className="font-semibold mb-2"> {item?.sellKgId?._id == user?.id ? 'Payment received successfully' : 'Payment sent successfully'} </p>
                                    <span>{moment(item?.createdAt).format("YYYY-MM-DD")}</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <h3 className={`${item?.status == 'completed' ? "text-green-600 text-xl font-semibold" : "text-red-600 text-xl font-semibold"}`}>+ {item?.amount}€</h3>
                                <p className={`${item?.status == 'completed' ? "text-green-600" : "text-red-600"}`}>{item?.status}</p>
                            </div>
                        </div>
                    ))}

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
                <form onSubmit={handleSubmitUserProfileUpdate}>
                    <div className="mb-5 flex justify-between items-center">
                        <h2 className="font-semibold text-primary text-xl">Personal Information</h2>
                        <button type="submit" className="bg-primary text-white px-10 py-3 rounded-md">
                            Save
                        </button>
                    </div>

                    <div className="my-10 flex items-center gap-3">
                        <img
                            className="min-w-20 w-20 h-20 rounded-full object-cover"
                            src={profileImage || baseUrl + user?.profileImage}
                            alt="Profile"
                        />
                        <div>
                            <Upload
                                showUploadList={false}
                                beforeUpload={(file) => {
                                    handleImageUpload(file);
                                    return false; // Prevent auto-upload
                                }}
                            >
                                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                            </Upload>
                            <h2 className="mt-3">Upload your profile picture</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        {/* Full Name */}
                        <div className="relative">
                            <label className="block text-sm font-semibold mb-2">Full Name</label>
                            <div className="relative flex items-center">
                                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <FaRegUser className="text-xl" />
                                </span>
                                <input
                                    type="text"
                                    name="firstName"
                                    defaultValue={user?.firstName}
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
                                    <MdOutlineEmail className="text-xl" />
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={user?.email}
                                    disabled
                                    placeholder="Enter email"
                                    className="w-full border text-gray-400 border-slate-200 rounded-lg p-2 pl-10"
                                />
                            </div>
                        </div>

                        {/* Address */}
                        <div className="relative">
                            <label className="block text-sm font-semibold mb-2">Address</label>
                            <div className="relative flex items-center">
                                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <CiLocationOn className="text-xl" />
                                </span>
                                <input
                                    type="text"
                                    name="address"
                                    defaultValue={user?.address}
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
                                    <MdOutlinePhone className="text-xl" />
                                </span>
                                <input
                                    type="text"
                                    name="phone"
                                    defaultValue={user?.phone}
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
                    onSubmit={handleResetPasswordSubmit}
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
                                name='oldPassword'
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
                                name='newPassword'
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
                                name='confirmNewPassword'
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


            <form onSubmit={handleDocumentSubmit} id='documents' className='my-10 p-5 bg-white rounded-lg'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-2xl font-semibold text-primary mb-5'>{t('ethanDocuments')}</h2>
                    <div className='flex items-center gap-2'>
                        <span className={`${!user?.isverified ? 'text-[#f0d53d] bg-[#f0d53d2f] font-semibold py-1 px-6 rounded-full' : 'text-[#35ce0f] bg-[#35ce0f52] font-semibold py-1 px-6 rounded-full'}`} >
                            {/* {t('verified')} */}
                            {
                                user?.isverified ? 'Verified' : 'Not verified'
                            }
                        </span>
                        <button type='submit' className='bg-primary text-white py-2 px-5 rounded-lg flex items-center gap-3'>{t('send')} <BsSend /> </button>
                    </div>
                </div>


                <div className="my-5">
                    <h2 className="font-medium">Identity Document</h2>
                    <div className="bg-[#f6f6fb] p-5 rounded-lg my-5 flex items-center justify-between flex-wrap gap-5">
                        {identityFile ? (
                            <div className="flex items-center gap-5">
                                <div className="flex items-center gap-3 w-14 h-14 bg-[#eeefff] text-[#2b8f6c] justify-center rounded-md">
                                    <LuFileText className="text-2xl text-primary" />
                                </div>
                                <div>
                                    <h2 className="font-semibold">{identityFile.name}</h2> {/* Display uploaded file name */}
                                    <span>
                                        Added on: {new Date().toISOString().split('T')[0]}
                                    </span> {/* Display the current date */}
                                </div>
                            </div>
                        ) : (
                            <span className="text-gray-500">No file uploaded</span>
                        )}
                    </div>
                    <div className="mt-5">
                        <Dragger
                            onChange={handleIdentityFileChange}
                            name="Identityfiles"
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        >
                            <p className="ant-upload-text font-semibold">
                                Drag and drop your files or browse
                            </p>
                        </Dragger>
                    </div>
                </div>

                <div className="my-5">
                    <h2 className="font-medium">Proof of Address</h2>
                    <div className="bg-[#f6f6fb] p-5 rounded-lg my-5 flex items-center justify-between flex-wrap gap-5">
                        {proofOfAddressFile ? (
                            <div className="flex items-center gap-5">
                                <div className="flex items-center gap-3 w-14 h-14 bg-[#eeefff] text-[#2b8f6c] justify-center rounded-md">
                                    <LuFileText className="text-2xl text-primary" />
                                </div>
                                <div>
                                    <h2 className="font-semibold">{proofOfAddressFile.name}</h2> {/* File name */}
                                    <span>
                                        Added on: {new Date().toISOString().split('T')[0]}
                                    </span> {/* Current date */}
                                </div>
                            </div>
                        ) : (
                            <span className="text-gray-500">No file uploaded</span>
                        )}
                    </div>
                    <div className="mt-5">
                        <Dragger
                            onChange={handleProofOfAddressChange}
                            name="files"
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        >
                            <p className="ant-upload-text font-semibold">
                                Drag and drop your files or browse
                            </p>
                        </Dragger>
                    </div>
                </div>

                <div className="my-5">
                    <h2 className="font-medium">RIB</h2>
                    <div className="bg-[#f6f6fb] p-5 rounded-lg my-5 flex items-center justify-between flex-wrap gap-5">
                        {ribFile ? (
                            <div className="flex items-center gap-5">
                                <div className="flex items-center gap-3 w-14 h-14 bg-[#eeefff] text-[#2b8f6c] justify-center rounded-md">
                                    <LuFileText className="text-2xl text-primary" />
                                </div>
                                <div>
                                    <h2 className="font-semibold">{ribFile.name}</h2> {/* File name */}
                                    <span>
                                        Added on: {new Date().toISOString().split('T')[0]}
                                    </span> {/* Current date */}
                                </div>
                            </div>
                        ) : (
                            <span className="text-gray-500">No file uploaded</span>
                        )}
                    </div>
                    <div className="mt-5">
                        <Dragger
                            onChange={handleRibFileChange}
                            name="files"
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        >
                            <p className="ant-upload-text font-semibold">
                                Drag and drop your files or browse
                            </p>
                        </Dragger>
                    </div>
                </div>

                <div className='p-5 bg-[#e0e0ff86] text-[#3030b9] flex items-center gap-2 rounded-md'>
                    <div className='min-w-10'>
                        <GoInfo className='text-2xl min-w-10' />
                    </div>{t('ToBeAbletouseAllCobag')}
                </div>

                <div className='p-5 mt-5 bg-[#F989251A] text-[#F98925] flex items-center gap-2 rounded-md'>
                    <div className='min-w-10'>
                        <FiAlertTriangle className='text-2xl min-w-10' />
                    </div> <span className='font-semibold'>{t('WhyNotApproveYourDocument')}</span> : {t('yourIdDocumentNotValidPleaseSubmitAgain')}
                </div>


            </form >

            {/* <section id='preferences' className='my-5 p-5 bg-white rounded-lg'>
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
            </section> */}
        </div >
    );
}

export default Page;
