'use client';
import { useGetLanguageQuery } from '@/app/redux/Features/language/getLanguage';
import { useSetLanguageMutation } from '@/app/redux/Features/language/setLanguage';
import i18n from '@/app/utils/i18';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa6';
import { IoMdNotifications } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';

const Page = () => {
    const { t } = i18n;

    const [setLanguage, { isLoading, isError, error }] = useSetLanguageMutation();
    const { data } = useGetLanguageQuery();
    const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default to 'en'

    // Update selectedLanguage when query data changes
    useEffect(() => {
        if (data) {
            setSelectedLanguage(data === 'en' ? 'en' : 'fn');
        }
    }, [data]);

    const handleChangeLanguage = async (lan) => {
        try {
            await setLanguage(lan);
            setSelectedLanguage(lan);
            i18n.changeLanguage(lan); // Change i18n language dynamically


            window.location.reload();

        } catch (err) {
            console.error('Error setting language:', err);
        }
    };


    const [currency, setCurrency] = useState('usd');

    useEffect(() => {
        const getCurrency = localStorage.getItem('currency');
        setCurrency(getCurrency || 'usd');

    }, []);

    const handleChangeCurrency = async (currency) => {
        try {

            localStorage.setItem('currency', currency);
            await window.location.reload();
        } catch (err) {
            console.error('Error setting currency:', err);
        }
    };

    return (
        <div>
            <div className="bg-white p-5 lg:w-3/4 mx-auto rounded-lg">
                <div>
                    <h2 className="text-2xl font-semibold text-primary mb-2">{t('accountSettings')}</h2>
                    <p>{t('manageYourBookingsAsASenderOrTraveler')}</p>
                    <br />

                    {/* Language Selector sdf */}
                    <div className="relative w-full">
                        <span className="font-semibold text-sm text-gray-400 block mb-2">{t('language')}</span>
                        <div className="relative">
                            <select
                                onChange={(e) => handleChangeLanguage(e.target.value)}
                                name="language"
                                value={selectedLanguage}
                                id="language"
                                className="w-full py-2 px-3 border border-gray-300 rounded-lg bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="en">English</option>
                                <option value="fn">French</option>
                            </select>
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                                ▼
                            </span>
                        </div>
                    </div>

                    {/* Time Zone Selector */}
                    {/* <div className="relative w-full my-5">
                        <span className="font-semibold text-sm text-gray-400 block mb-2">{t('timeZone')}</span>
                        <div className="relative">
                            <select
                                name="timezone"
                                id="timezone"
                                className="w-full py-2 px-3 border border-gray-300 rounded-lg bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="USA">USA</option>
                                <option value="French">French</option>
                            </select>
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                                ▼
                            </span>
                        </div>
                    </div> */}

                    {/* Currency Selector */}
                    <div className="relative w-full my-5">
                        <span className="font-semibold text-sm text-gray-400 block mb-2">{t('currency')}</span>
                        <div className="relative">
                            <select
                                onChange={(e) => handleChangeCurrency(e.target.value)}
                                name="currency"
                                id="currency"
                                value={currency}
                                className="w-full py-2 px-3 border border-gray-300 rounded-lg bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="Dollar">Dollar $</option>
                                <option value="Euro">Euro €</option>
                            </select>
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                                ▼
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
