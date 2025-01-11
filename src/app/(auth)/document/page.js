import Dragger from 'antd/es/upload/Dragger';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { GoInfo } from 'react-icons/go';
import { LuFileText } from 'react-icons/lu';

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
            <div className="lg:mx-10 flex items-center h-screen">
                <div className='my-5 w-full shadow-lg p-5 rounded-lg'>
                    <h2 className=' text-primary font-semibold text-xl'> ID document verification</h2>
                    <p className='my-5 bg-[#eaf0fd] p-3 rounded-md flex items-center gap-3 text-sm text-primary'> <GoInfo className='text-primary text-2xl' /> Please upload your ID document to verify your identity for Cobager's trust in you .</p>
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
                    </div>
                    <div className='mt-5'>
                        <Dragger name="files" action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
                            <p className="ant-upload-text font-semibold">Drag & Drop your files or Browse</p>
                        </Dragger>
                    </div>
                    <div className='flex items-center gap-2 justify-end'>
                        <Link href={'/emailverify'} className='mt-5 text-primary flex items-center gap-2 hover:scale-105  rounded-full px-10 py-3 border-[#6c7e82] cursor-pointer bg-[#eee] backdrop-blur-sm duration-300'>skip</Link>
                        <button className='mt-5 text-white flex items-center gap-2 hover:scale-105  rounded-full px-10 py-3 border-[#6c7e82] cursor-pointer bg-primary backdrop-blur-sm duration-300'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
