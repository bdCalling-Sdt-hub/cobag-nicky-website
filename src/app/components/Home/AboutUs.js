import i18n from '@/app/utils/i18';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa6";


const AboutUs = () => {


    const { t } = i18n;

    return (
        <div className="py-20 bg-[#f7f7fc]">
            <h2
                data-aos="fade-up"
                data-aos-duration="300"
                className="text-center md:text-5xl text-3xl text-primary font-semibold"
            >
                {t('WhoCanISellMyUnusedKilosTo1001')}
            </h2>
            <div className="flex justify-center items-center flex-wrap mt-10 gap-10 md:px-0 px-5">
                <div
                    data-aos="fade-up"
                    data-aos-duration="700"
                    className="w-[100%] md:w-[500px] relative overflow-hidden rounded-xl bg-white"
                >
                    {/* Image with Overlay */}
                    <div className="relative overflow-hidden">
                        <img
                            className="w-full max-h-[280px] object-cover"
                            src="/Images/Landingpage/home_about2.png"
                            alt={t('DeliveryImageAltText1002')}
                        />
                        <div className="absolute inset-0 bg-[#0000004f]"></div>
                        <p className="bg-gradient-to-r from-[#98DED9] to-[#C7FFD8] p-2 text-primary font-semibold absolute top-0 right-0 text-xs md:text-sm">
                            {t('FastestInternationalDelivery1003')}
                        </p>
                    </div>
                    <div className="p-5">
                        <h3 className="text-primary font-semibold text-xl">
                            {t('SendParcelsWorldwide1004')}
                        </h3>
                        <p className="my-10 text-gray-500">
                            {t('SellUnusedKilosDescription1005')}
                        </p>
                        <Link href={'/ourconcept'}>
                            <button className="bg-[#e7e8f0] py-3 px-8 rounded-xl text-primary flex items-center justify-center gap-2">
                                {t('LearnMore1006')} <FaArrowRight />
                            </button>
                        </Link>
                    </div>
                </div>

                <div
                    data-aos="fade-up"
                    data-aos-duration="900"
                    className="w-[100%] md:w-[500px] relative overflow-hidden rounded-xl bg-white"
                >
                    {/* Image with Overlay */}
                    <div className="relative overflow-hidden">
                        <img
                            className="w-full max-h-[280px] object-cover"
                            src="/Images/Landingpage/home_about.jpg"
                            alt={t('DeliveryImageAltText1007')}
                        />
                        <div className="absolute inset-0 bg-[#0000004f]"></div>
                        <p className="bg-gradient-to-r from-[#98DED9] to-[#C7FFD8] p-2 text-primary font-semibold absolute top-0 right-0 text-xs md:text-sm">
                            {t('UniqueRevolutionaryWorldwide1008')}
                        </p>
                    </div>
                    <div className="p-5">
                        <h3 className="text-primary font-semibold text-xl">
                            {t('PurchaseRareProductsAbroad1009')}
                        </h3>
                        <p className="my-10 text-gray-500">
                            {t('UnobtainableProductsDescription1010')}
                        </p>
                        <Link href={'/ourconcept'}>
                            <button className="bg-[#e7e8f0] py-3 px-8 rounded-xl text-primary flex items-center justify-center gap-2">
                                {t('LearnMore1011')} <FaArrowRight />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AboutUs;
