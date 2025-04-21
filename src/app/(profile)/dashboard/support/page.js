'use client';
import { useReportMessageMutation } from '@/app/redux/Features/ReportMessage/reportMessage';
import i18n from '@/app/utils/i18';
import useUser from '@/hooks/useUser';
import { message } from 'antd';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { BsSend } from 'react-icons/bs';
import { CiSquareQuestion } from 'react-icons/ci';

const Page = () => {
    const { t } = i18n;


    const user = useUser();
    console.log(user);
    const [supportMessage] = useReportMessageMutation();


    const handleSupport = async (e) => {
        e.preventDefault();

        // Accessing form data using the 'name' attribute of form elements
        const form = e.target;

        const formData = {
            userId: user?._id,
            description: form.message.value,
            status: 'In progress',
            reportType: form.subject.value,
        };

        console.log(formData);

        try {
            const res = await supportMessage(formData).unwrap();
            console.log(res);

            if (res.success) {
                toast.success(res?.message);
                form.reset();
            }
            else {
                toast.error(res.message);
            }

        } catch (error) {
            console.error('Error in API Call:', error);
            message.error(error?.data?.message || 'An error occurred while sending the message.');
        }

    }

    return (
        <div>
            <Toaster />
            <div className='p-5 bg-white lg:w-3/4 mx-auto rounded-lg'>
                <div>
                    <h2 className='text-2xl font-semibold text-primary'>{t('sendAMessage')}</h2>
                    <div className="mt-5">
                        <form onSubmit={handleSupport} className="">
                            {/* Full Name */}
                            <div className="mb-5">
                                <label className="block text-sm font-semibold mb-2">{t('fullName')}</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="fullName"  // Added name attribute
                                        placeholder={t('enterFullName')}
                                        className="w-full py-3 px-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="mb-5">
                                <label className="block text-sm font-semibold mb-2">{t('email')}</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"  // Added name attribute
                                        placeholder={t('enterYourEmail')}
                                        className="w-full py-3 px-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div className="mb-5">
                                <label className="block text-sm font-semibold mb-2">{t('submit')}</label>
                                <div className="relative">
                                    <select
                                        name="subject"  // Added name attribute
                                        className="w-full py-3 px-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                                    >
                                        <option value="" disabled defaultValue={true}>{t('selectATopic')}</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="support">Support</option>
                                        <option value="feedback">Feedback</option>
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="mb-5">
                                <label className="block text-sm font-semibold mb-2">{t('message')}</label>
                                <textarea
                                    name="message"  // Added name attribute
                                    placeholder={t('typeYourQuestion')}
                                    rows="6"
                                    className="w-full py-3 px-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="">
                                <button
                                    type="submit"
                                    className="bg-primary w-full font-semibold text-white py-3 rounded-lg hover:bg-primary-dark transition"
                                >
                                    <BsSend className='inline mr-2' /> {t('sendTheMessage')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <section className='lg:p-20 p-5 bg-[#e9edf2] lg:w-3/4 mx-auto my-10 rounded-lg' id="faq">
                <div className='text-center'>
                    <h2 className='lg:text-5xl text-3xl font-semibold text-primary'>{t('frequentlyAskedQuestions')}</h2>
                    <p className='mt-5 text-gray-400'>{t('findAnswersToTheMostFrequentlyAskedQuestions')}</p>
                </div>
                <div>
                    {/* FAQ Items */}
                    <div className='flex items-start gap-5 bg-white p-5 rounded-lg my-5'>
                        <div className='min-w-10'>
                            <CiSquareQuestion className='text-5xl font-semibold text-primary -mt-2' />
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold text-primary mb-2'>{t('howDoesThePaymentSystemWork')}</h2>
                            <p className='text-gray-500'>{t('paymentIsSecureAndBlockedUntilDeliveryConfirmation')}</p>
                        </div>
                    </div>
                    {/* Add more FAQ items if needed */}
                </div>
            </section>
        </div>
    );
}

export default Page;
