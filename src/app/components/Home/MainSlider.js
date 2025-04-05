'use client';
import React, { useState, useEffect } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { CiStar } from 'react-icons/ci';
import 'animate.css';
import { FaArrowUp } from 'react-icons/fa6';

const MainSlider = () => {
    const data = [
        {
            id: 1,
            userImage: '/Images/NewSection/usreImgae.avif',
            userName: 'Jhon Doe',
            rating: 4.8,
            missions: 12,
            packageWeight: '5kg',
            destination: 'Miami',
            price: '€25',
            deliveryTime: '3 hours 50 minutes',
            origin: 'Montreal',
        },
        {
            id: 2,
            userImage: '/Images/NewSection/usreImgae.avif',
            userName: 'Jane Smith',
            rating: 4.7,
            missions: 15,
            packageWeight: '3kg',
            destination: 'London',
            price: '€20',
            deliveryTime: '2 hours 45 minutes',
            origin: 'Paris',
        },
        {
            id: 3,
            userImage: '/Images/NewSection/usreImgae.avif',
            userName: 'Robert Brown',
            rating: 4.9,
            missions: 20,
            packageWeight: '7kg',
            destination: 'Tokyo',
            price: '€35',
            deliveryTime: '5 hours 10 minutes',
            origin: 'New York',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState('animate__fadeInRight');
    const [visible, setVisible] = useState(true);
    const [showSideModal, setShowSideModal] = useState(true);

    useEffect(() => {
        if (!visible) return null;
        const interval = setInterval(() => {
            // 1. Start fade out
            setAnimationClass('animate__fadeOutRight');

            // 2. After fade out completes (1s), hide and switch slide
            setTimeout(() => {
                setVisible(false);
                setCurrentIndex((prev) => (prev + 1) % data.length);

                // 3. After small delay, fade in next slide
                setTimeout(() => {
                    setAnimationClass('animate__fadeInRight');
                    setVisible(true);
                }, 200); // tiny delay before showing new
            }, 1000); // fade out duration
        }, 5000); // total stay time: 2s visible + 1s fade

        return () => clearInterval(interval);
    }, []);

    const item = data[currentIndex];


    const handleGoWindowTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="relative py-12 md:mr-5">
            <div className='block'>
                {showSideModal && (
                    <div className={`animate__animated !backdrop-blur-3xl w-[380px] mx-auto  md:w-[400px] shadow-lg rounded-lg overflow-hidden ${animationClass} ${animationClass === 'animate__fadeOutRight ' ? 'animate__slow' : ''}`}>
                        <div className="relative bg-opacity-50 bg-black p-5 w-[380px] mx-auto  md:w-[400px]  rounded-lg  bg-white/50">
                            <div className="flex justify-end">
                                <RxCross2 onClick={() => setShowSideModal(false)} className="text-2xl cursor-pointer" />
                            </div>
                            <div className="flex items-center space-x-3">
                                <img className="w-12 rounded-full" src={item.userImage} alt="" />
                                <div>
                                    <h2>{item.userName}</h2>
                                    <h3 className="flex items-center gap-2">
                                        <CiStar className="text-orange-400" /> {item.rating} ({item.missions}) • missions
                                    </h3>
                                </div>
                            </div>
                            <hr className="my-5 bg-black h-[1px] border-none" />
                            <h2 className="flex items-center gap-1 font-semibold">
                                <img className="w-5" src="/Images/NewSection/package_1f4e6.png" alt="" />
                                Sent a {item.packageWeight} package to {item.destination} for only :
                            </h2>
                            <div className="my-5 p-3 bg-gradient-to-l text-xl font-semibold to-[#99DFD9] from-[#C7FFD8] rounded-lg">
                                <h2>{item.price} and Delivered in {item.deliveryTime} ✈️</h2>
                            </div>
                            <p className="italic">The Fastest delivery on the planet and 99% cheaper with CoBag</p>
                            <hr className="my-5 bg-black h-[1px] border-none" />
                            <div className="flex justify-between items-center">
                                <h2 className="font-semibold">{item.origin}</h2>
                                <div>✈️<p>{item.deliveryTime}</p></div>
                                <h2 className="font-semibold">{item.destination}</h2>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className='w-10 h-10 bg-primary rounded-full flex items-center justify-center absolute md:bottom-1 bottom-2 md:right-1 right-2 cursor-pointer' onClick={handleGoWindowTop}>
                <FaArrowUp className='text-2xl text-white' />
            </div>
 {/* sfsdf */}
        </div>
    );
};

export default MainSlider;
