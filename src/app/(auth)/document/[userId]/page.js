'use client';

import Dragger from 'antd/es/upload/Dragger'; // Ensure proper import of Dragger from Ant Design
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { GoInfo } from 'react-icons/go';
import { LuFileText } from 'react-icons/lu';
import toast, { Toaster } from 'react-hot-toast';
import { useParams, useRouter } from 'next/navigation'; // Assuming this is used correctly to get the userId
import { useSubmitDocumentMutation } from '@/app/redux/Features/Auth/submitDocument'; // Assuming the mutation is correctly set up

const Page = () => {
    const router = useRouter();
    const { userId } = useParams(); // Get the userId from the route params
    const [fileList, setFileList] = useState([]); // State to manage the uploaded files
    const [submitDocument] = useSubmitDocumentMutation(); // Hook for submitting document

    // Handle file upload change (upload or remove)
    const handleChange = (info) => {
        let newFileList = [...info.fileList];

        // Handle file upload success or error
        if (info.file.status === 'done') {
            toast.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            toast.error(`${info.file.name} file upload failed`);
        }

        // Update the file list in state
        setFileList(newFileList);
    };

    // Handle the document submission
    const handleDocumentSubmit = async (e) => {
        e.preventDefault();
        // Check if a file is uploaded
        if (fileList.length === 0) {
            toast.error('Please upload your ID document');
            return;
        }

        const formData = new FormData();
        formData.append("ethanDocuments", fileList[0])
       

        try {
            const response = await submitDocument({ body: formData, userId }).unwrap();
            console.log('Document upload response:', response);

            if (response.success) {
                toast.success('Document uploaded successfully');
                router.push(`/login`)
            }
        } catch (error) {
            console.error('Error submitting document:', error);
            toast.error('Error submitting document');
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
            <div className="lg:mx-10 mx-5 flex items-center h-screen">
                <div className="my-5 w-full shadow-lg p-5 rounded-lg">
                    <h2 className="text-primary font-semibold text-xl">ID Document Verification</h2>
                    <p className="my-5 bg-[#eaf0fd] p-3 rounded-md flex items-center gap-3 text-sm text-primary">
                        <GoInfo className="text-primary text-2xl" />
                        Please upload your ID document to verify your identity for Cobager's trust in you.
                    </p>

                    <form onSubmit={handleDocumentSubmit}>
                        <div className="bg-[#f6f6fb] p-5 rounded-lg my-5 flex-wrap gap-5">
                            {/* Display uploaded image details */}
                            {fileList.length > 0 && fileList.map((file, index) => (
                                <div key={index} className="flex items-center gap-5 py-2">
                                    <div className="flex items-center gap-3 w-14 h-14 bg-[#eeefff] text-[#2b8f6c] justify-center rounded-md">
                                        <LuFileText className="text-2xl text-primary" />
                                    </div>
                                    <div>
                                        <div>
                                            <strong>{file.name}</strong>
                                        </div>
                                        <span>Added on: {new Date(file.lastModifiedDate).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-5">
                            <Dragger
                                name="files"
                                accept=".jpg,.png,.pdf" // Accepted file types
                                showUploadList={{ showRemoveIcon: true }} // Show remove icon
                                beforeUpload={(file) => {
                                    const isValidType = ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type);
                                    if (!isValidType) {
                                        toast.error('Only JPG, PNG, and PDF files are allowed!');
                                    }
                                    return isValidType;
                                }}
                                onChange={handleChange} // Handle file upload
                            >
                                <p className="ant-upload-text font-semibold">Drag & Drop your files or Browse</p>
                            </Dragger>
                        </div>
                        <div className="flex items-center gap-2 justify-end">
                            <Link
                                href={'/login'}
                                className="mt-5 text-primary flex items-center gap-2 hover:scale-105 rounded-full px-10 py-3 border-[#6c7e82] cursor-pointer bg-[#eee] backdrop-blur-sm duration-300"
                            >
                                Skip
                            </Link>
                            <button
                                type="submit"
                                className="mt-5 text-white flex items-center gap-2 hover:scale-105 rounded-full px-10 py-3 border-[#6c7e82] cursor-pointer bg-primary backdrop-blur-sm duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page;
