'use client';
import i18n from '@/app/utils/i18';
import React, { useEffect, useState } from 'react';
import Aos from 'aos';

const YourTravial = () => {

    const { t } = i18n;

    useEffect(() => {
        Aos.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Animations trigger only once
        });
    }, [])


    const [showfirstFAQ, setShowfirstFAQ] = useState(false);
    const handleShowfirstFAQ = () => {
        setShowfirstFAQ(!showfirstFAQ);
    }

    const [showsecondFAQ, setShowsecondFAQ] = useState(false);
    const handleShowsecondFAQ = () => {
        setShowsecondFAQ(!showsecondFAQ);
    }

    const [showthirdFAQ, setShowthirdFAQ] = useState(false);
    const handleShowthirdFAQ = () => {
        setShowthirdFAQ(!showthirdFAQ
        );
    }

    const [showfourthFAQ, setShowfourthFAQ] = useState(false);
    const handleShowfourthFAQ = () => {
        setShowfourthFAQ(!showfourthFAQ);
    }


    return (
        <div className='lg:w-[50%] w-[90%] mx-auto mb-10'>


            <div onClick={() => {
                handleShowfirstFAQ();
                setShowfourthFAQ(false);
                setShowsecondFAQ(false);
                setShowthirdFAQ(false);
            }}
                className='flex items-center gap-5 justify-between border border-gray-300 shadow p-5 rounded-lg cursor-pointer'>
                <div>
                    <h2 className='text-xl font-semibold text-primary'>How do I resell my unused kilos?
                    </h2>
                    <p className='mt-2 font-semibold text-green-700'>On average €50-200 in winnings!</p>
                </div>
                <div className={`${showfirstFAQ && 'rotate-[180deg]'}`}>
                    ▼
                </div>
            </div>
            {
                showfirstFAQ && (
                    <div data-aos="fade-left" data-aos-duration="800" className='my-5'>
                        <div className='flex items-center gap-5 my-5'>
                            <img className='w-20' src="/Images/NewSection/ourconsept/11.png" alt="" />
                            <p>1.  Complete the online <span className='underline cursor-pointer text-blue-500'>form indicating your journey and available weight.</span></p>
                        </div>
                        <div className='flex items-center gap-5 my-5'>
                            <img className='w-20' src="/Images/NewSection/ourconsept/12.png" alt="" />
                            <p>2. In the form, check the 'Available to be a courier' option if you also want to transport a purchase for one or more people (minimum earnings of €27 per purchase mission). You can either wait to be contacted by buyers or directly consult the purchase announcements available on your route.</p>
                        </div>
                        <div className='flex items-center gap-5 my-5'>
                            <img className='w-20' src="/Images/NewSection/ourconsept/13.png" alt="" />
                            <p>3. Wait for a user to purchase your available baggage space.</p>
                        </div>
                        <div className='flex items-center gap-5 my-5'>
                            <img className='w-20' src="/Images/NewSection/ourconsept/14.png" alt="" />
                            <p>4. Chat with the buyer via messaging to adjust the shipping details.</p>
                        </div>
                        <div className='flex items-center gap-5 my-5'>
                            <img className='w-20' src="/Images/NewSection/ourconsept/15.png" alt="" />
                            <p>5. Meet the sender and check the package to be transported together.</p>
                        </div>
                        <div className='flex items-center gap-5 my-5'>
                            <img className='w-20' src="/Images/NewSection/ourconsept/161.png" alt="" />
                            <p>6. Confirm the package collection on the platform to formalize the transaction.</p>
                        </div>
                        <div className='flex items-center gap-5 my-5'>
                            <img className='w-20' src="/Images/NewSection/ourconsept/15.png" alt="" />
                            <p>7. At the destination, meet the recipient or use a secure locker to deliver the package.
                            </p>
                        </div>
                        <div className='flex items-center gap-5 my-5'>
                            <img className='w-20' src="/Images/NewSection/ourconsept/16.png" alt="" />
                            <p>8. Confirm delivery with the 4-digit confirmation code provided by the recipient.
                            </p>
                        </div>
                        <div className='flex items-center gap-5 my-5'>
                            <img className='w-20' src="/Images/NewSection/ourconsept/17.png" alt="" />
                            <p>9. Receive your payment automatically and transfer your winnings to your bank account.
                            </p>
                        </div>
                    </div>
                )
            }

            <div
                onClick={
                    () => {
                        handleShowsecondFAQ();
                        setShowfirstFAQ(false);
                        setShowfourthFAQ(false);
                        setShowthirdFAQ(false);
                    }
                }
                className='flex items-center gap-5 justify-between border border-gray-300 shadow p-5 rounded-lg cursor-pointer mt-5'>
                <div>
                    <h2 className='text-xl font-semibold text-primary'>How do I get my excess baggage transported?
                    </h2>
                    <p className='mt-2 font-semibold text-green-700'>Minimum 50% savings!</p>
                </div>
                <div className={`${showsecondFAQ && 'rotate-[180deg]'}`}>
                    ▼
                </div>
            </div>
            {
                showsecondFAQ && (
                    <div data-aos="fade-left" data-aos-duration="800" className='my-5'>
                        <div className='flex items-center gap-5 my-5'>
                            <img className='w-20' src="/Images/NewSection/ourconsept/11.png" alt="" />
                            <p>1. Complete the route search<span className='underline cursor-pointer text-blue-500'> form , indicating your route and the weight of your excess baggage.</span></p>
                        </div>
                        <div className='flex items-center gap-5 my-5'>
                            <img className='w-20' src="/Images/NewSection/ourconsept/22.png" alt="" />
                            <p>2. A list of passengers matching your criteria will appear. Check their flight times to confirm they are traveling on the same flight as you. Select and contact the passenger that best suits your needs.</p>
                        </div>
                        <div className='flex items-center gap-5 my-5'>
                            <img className='w-20' src="/Images/NewSection/ourconsept/14.png" alt="" />
                            <p>3. Pay €5 to unlock the connection – this amount will be deducted from your final payment – ​​and chat with the passenger via the in-app messaging to arrange delivery of your package.</p>
                        </div>
                        <div className='flex items-center gap-5 my-5'>
                            <img className='w-20' src="/Images/NewSection/ourconsept/15.png" alt="" />
                            <p>4. Meet your travel companion at the airport. You should stay with them until their luggage is checked in to ensure everything goes smoothly.</p>
                        </div>
                        <div className='flex items-center gap-5 my-5'>
                            <img className='w-20' src="/Images/NewSection/ourconsept/16.png" alt="" />
                            <p>5. Once you arrive at your destination, collect your luggage and confirm the end of the mission.</p>
                        </div>
                    </div>
                )
            }

            <div onClick={
                () => {
                    handleShowthirdFAQ();
                    setShowfirstFAQ(false);
                    setShowsecondFAQ(false);
                    setShowfourthFAQ(false);
                }
            } className='flex items-center gap-5 justify-between border border-gray-300 shadow p-5 rounded-lg cursor-pointer mt-5'>
                <div>
                    <h2 className='text-xl font-semibold text-primary'>How do I transport a purchase for someone?
                    </h2>
                    <p className='mt-2 font-semibold text-green-700'>Minimum earnings of €27!</p>
                </div>
                <div className={`${showthirdFAQ && 'rotate-[180deg]'}`}>
                    ▼
                </div>
            </div>
            {
                showthirdFAQ && (
                    <div data-aos="fade-left" data-aos-duration="800" className='my-5'>
                        <div className='flex items-center gap-5 my-5'>
                            <img className='w-20' src="/Images/NewSection/ourconsept/11.png" alt="" />
                            <p>1. You have two options:<span className='underline cursor-pointer text-blue-500'>  search for an available travel courier </span>or place a purchase ad and wait to be contacted by an interested travel courier.</p>
                        </div>
                        <div className='flex items-center gap-5 my-5'>
                            <img className='w-20' src="/Images/NewSection/ourconsept/22.png" alt="" />
                            <p>2. If you're looking for a courier, you'll see a list of travelers who might be interested in making your purchase. Compare their flight (and therefore delivery) times, then select the courier that best suits your needs. If you're posting an ad, wait until you're contacted by an interested courier.</p>
                        </div>
                        <div className='flex items-center gap-5 my-5'>
                            <img className='w-20' src="/Images/NewSection/ourconsept/12.png" alt="" />
                            <p>3. Proceed to the payment of €5 to unlock the connection – this amount will be deducted from your final payment, and discuss the details of the purchase with the traveler-courier, including the exact purchase amount, the cost of the purchase mission (€27). You will also have to pay the advance for your purchase, which will be blocked on the platform until the final delivery.</p>
                        </div>
                        <div className='flex items-center gap-5 my-5'>
                            <img className='w-20' src="/Images/NewSection/ourconsept/14.png" alt="" />
                            <p>4. The traveler-courier advances the purchase and picks it up abroad. The payment remains blocked to ensure the security of the transaction.</p>
                        </div>
                        <div className='flex items-center gap-5 my-5'>
                            <img className='w-20' src="/Images/NewSection/ourconsept/15.png" alt="" />
                            <p>5. Upon arrival, meet your courier to collect your purchase. The courier will be refunded the advance payment as soon as you confirm delivery.</p>
                        </div>
                        <div className='flex items-center gap-5 my-5'>
                            <img className='w-20' src="/Images/NewSection/ourconsept/16.png" alt="" />
                            <p>6. Provide the courier with the 4-digit delivery code to release the payment. You will then receive your purchase, and the full amount paid will be refunded to the courier.</p>
                        </div>
                    </div>
                )
            }




            <div onClick={
                () => {
                    handleShowfourthFAQ();
                    setShowfirstFAQ(false);
                    setShowsecondFAQ(false);
                    setShowthirdFAQ(false);
                }

            } className='flex z-10 items-center gap-5 justify-between border border-gray-300 shadow p-5 rounded-lg cursor-pointer mt-5'>
                <div>
                    <h2 className='text-xl font-semibold text-primary'>How do I buy a product abroad?
                    </h2>
                    <p className='mt-2 font-semibold text-green-700'>The fastest delivery on the planet is 99% cheaper</p>
                </div>
                <div className={`${showfourthFAQ && 'rotate-[180deg]'}`}>
                    ▼
                </div>
            </div>

            {
                showfourthFAQ && (
                    <div data-aos="fade-left" data-aos-duration="800" className='my-5 duration-300 z-0'>
                        <div className='flex items-center gap-5 my-5'>
                            <img className='w-20' src="/Images/NewSection/ourconsept/11.png" alt="" />
                            <p>1. Fill out the <span className='underline cursor-pointer text-blue-500'> form </span>, indicating the destination of your package and its weight. </p>
                        </div>
                        <div className='flex items-center gap-5 my-5'>
                            <img className='w-20' src="/Images/NewSection/ourconsept/22.png" alt="" />
                            <p>2. A list of travelers going to this destination with sufficient available kilos appears. Select the traveler who best matches your needs.</p>
                        </div>
                        <div className='flex items-center gap-5 my-5'>
                            <img className='w-20' src="/Images/NewSection/ourconsept/14.png" alt="" />
                            <p>3. Pay €5 to unlock the connection – this amount will be deducted from your final payment, and chat with the traveler via the integrated messaging to define the delivery terms of your package.</p>
                        </div>
                        <div className='flex items-center gap-5 my-5'>
                            <img className='w-20' src="/Images/NewSection/ourconsept/15.png" alt="" />
                            <p>4. Meet at the airport or train station: present your opened package and seal it there with the pre-printed Cobag label. The site will send you a code that you will need to share with your trusted person.</p>
                        </div>
                        <div className='flex items-center gap-5 my-5'>
                            <img className='w-20' src="/Images/NewSection/ourconsept/16.png" alt="" />
                            <p>5. Upon arrival, the traveler will ask your trusted person for this code before handing over the package and being paid.</p>
                        </div>
                    </div>
                )
            }





        </div >
    );
}

export default YourTravial;
