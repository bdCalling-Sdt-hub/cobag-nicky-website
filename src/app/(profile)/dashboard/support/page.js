import React from 'react';
import { BsSend } from 'react-icons/bs';
import { CiSquareQuestion } from 'react-icons/ci';

const Page = () => {
    return (
        <div>
            <div className='p-5 bg-white lg:w-3/4 mx-auto rounded-lg'>
                <div>
                    <h2 className='text-2xl font-semibold text-primary'>Send us a message</h2>
                    <div className="mt-5">
                        <form action="" className="">
                            {/* Full Name */}
                            <div className="mb-5">
                                <label className="block text-sm font-semibold mb-2">Full Name</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="w-full py-3 px-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="mb-5">
                                <label className="block text-sm font-semibold mb-2">Email</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full py-3 px-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div className="mb-5">
                                <label className="block text-sm font-semibold mb-2">Subject</label>
                                <div className="relative">
                                    <select
                                        className="w-full py-3 px-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                                    >
                                        <option value="">Select a topic</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="support">Support</option>
                                        <option value="feedback">Feedback</option>
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="mb-5">
                                <label className="block text-sm font-semibold mb-2">Message</label>
                                <textarea
                                    placeholder="Type your question..."
                                    rows="6"
                                    className="w-full py-3 px-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="">
                                <button
                                    type="submit"
                                    className="bg-primary w-full font-semibold  text-white py-3 rounded-lg hover:bg-primary-dark transition"
                                >
                                    <BsSend className='inline mr-2' /> Send the Message
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <section className='lg:p-20 p-5 bg-[#e9edf2] lg:w-3/4 mx-auto my-10 rounded-lg' id="faq">
                <div className='text-center'>
                    <h2 className='lg:text-5xl text-3xl font-semibold text-primary'>Frequently Asked Questions</h2>
                    <p className='mt-5 text-gray-400'>Find answers to the most frequently asked questions</p>
                </div>
                <div>
                    <div className='flex items-start gap-5 bg-white p-5 rounded-lg my-5'>
                        <div className='min-w-10'>
                            <CiSquareQuestion className='text-5xl font-semibold text-primary -mt-2' />
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold text-primary mb-2'>How does the payment system work?</h2>
                            <p className='text-gray-500'>Payment is secure and blocked until delivery confirmation. Once the package is delivered,
                                payment is automatically released.</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-5 bg-white p-5 rounded-lg my-5'>
                        <div className='min-w-10'>
                            <CiSquareQuestion className='text-5xl font-semibold text-primary -mt-2' />
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold text-primary mb-2'>How does the payment system work?</h2>
                            <p className='text-gray-500'>Payment is secure and blocked until delivery confirmation. Once the package is delivered,
                                payment is automatically released.</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-5 bg-white p-5 rounded-lg my-5'>
                        <div className='min-w-10'>
                            <CiSquareQuestion className='text-5xl font-semibold text-primary ' />
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold text-primary mb-2'>How does the payment system work?</h2>
                            <p className='text-gray-500'>Payment is secure and blocked until delivery confirmation. Once the package is delivered,
                                payment is automatically released.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Page;
