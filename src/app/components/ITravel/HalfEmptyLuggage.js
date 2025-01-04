import React from 'react';
import { BsCurrencyDollar } from "react-icons/bs";
import { GoAlert, GoLaw } from 'react-icons/go';



const HalfEmptyLuggage = () => {
    return (
        <div className='w-[90%] mx-auto py-20'>
            <div className='w-2/4 mx-auto text-center my-10'>
                <h2 className='md:text-4xl text-3xl font-semibold text-primary'>Are you leaving with half-empty luggage?</h2>
                <p className='mt-3 font-semibold text-[#737373]'>Don’t let those unused kilos go to waste! With Cobag, every available kilo becomes an opportunity to generate revenue. Make your trips profitable by offering them to shippers or buyers. Transform an ordinary flight into a lucrative trip.</p>
            </div>


            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                <div className="overflow-hidden rounded-lg relative group">
                    {/* Background Image with Overlay */}
                    <div className="bg-[url('/Images/Itravel/half-empty-laggage-1.png')] w-full h-[300px] bg-cover bg-center bg-[#f7f7fc] group-hover:scale-105 duration-300 ease-in-out relative">
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out "></div>
                    </div>
                    {/* Content */}
                    <div className="absolute inset-0 z-50 flex items-end justify-start p-5">
                        <div>
                            <p className="bg-[#fff] text-primary max-w-32 text-center py-2 px-6 rounded-full">New</p>
                            <h2 className="text-2xl my-3 font-semibold text-white">Resell your kilos</h2>
                            <p className="text-white">
                                Your luggage can earn you big: offer your unused kilos and earn on every flight.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden rounded-lg relative group">
                    {/* Background Image with Overlay */}
                    <div className="bg-[url('/Images/Itravel/half-empty-laggage-2.png')] w-full h-[300px] bg-cover bg-center bg-[#f7f7fc] group-hover:scale-105 duration-300 ease-in-out relative">
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out "></div>
                    </div>
                    {/* Content */}
                    <div className="absolute inset-0 z-50 flex items-end justify-start p-5">
                        <div>
                            <p className="bg-[#fff] text-primary max-w-32 text-center py-2 px-6 rounded-full">
                                Mutual aid
                            </p>
                            <h2 className="text-2xl my-3 font-semibold text-white">Help a sender</h2>
                            <p className="text-white">
                                Allow someone to send their package quickly and confidently.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-20 grid grid-cols-4 gap-10'>
                <div className='shadow-lg rounded-lg p-10'>
                    <img src="/Images/Itravel/item-1.png" alt="" />
                    <h2 className='text-primary text-xl font-semibold my-5'>Make your travels profitable</h2>
                    <p>Turn your unused pounds into income while helping those in need. Earn while traveling usefully.</p>
                </div>
                <div className='shadow-lg rounded-lg p-10'>
                    <img src="/Images/Itravel/item-2.png" alt="" />
                    <h2 className='text-primary text-xl font-semibold my-5'>Promote mutual aid</h2>
                    <p>Help individuals send their parcels or collect essential purchases. Mutual aid, at the heart of each journey.</p>
                </div>
                <div className='shadow-lg rounded-lg p-10'>
                    <img src="/Images/Itravel/item-3.png" alt="" />
                    <h2 className='text-primary text-xl font-semibold my-5'>Contribute to a revolution</h2>
                    <p>Be part of a new model where every unused piece of luggage brings needs and solutions closer together. You change the rules.</p>
                </div>
                <div className='shadow-lg rounded-lg p-10'>
                    <img src="/Images/Itravel/item-4.png" alt="" />
                    <h2 className='text-primary text-xl font-semibold my-5'>Ecological impact</h2>
                    <p>Optimize your existing journeys to reduce carbon impact. Traveling usefully means traveling responsibly.</p>
                </div>
            </div>

            <div className='my-20 flex items-center justify-center'>
                <div className='flex items-center gap-5 shadow-lg rounded-lg p-10'>
                    <div className='bg-gradient-to-tl w-14 h-14 flex items-center justify-center from-[#C7FFD8] to-primary text-white rounded-full'>
                        <BsCurrencyDollar className='text-3xl ' />
                    </div>
                    <div>
                        <span>
                            Average earnings per traveler
                        </span>
                        <h2 className='text-3xl font-semibold text-primary'>30€ - 300€</h2>
                    </div>
                </div>
            </div>


            <div className='w-[70%] mx-auto '>
                <h2 className='text-center text-4xl font-semibold text-primary my-10'>Multiple senders, more earnings!</h2>
                <div className='grid grid-cols-2 gap-10'>
                    <div>

                        <div className='bg-gradient-to-tl from-[#C7FFD8] to-primary rounded-lg w-full flex items-center justify-center p-10'>
                            <div className='bg-[#47474727] backdrop-blur-lg rounded-lg px-8 py-14 w-full  flex items-center justify-center'>
                                <p className='text-white text-xl'>Why limit yourself to just one package? With Cobag, your available kilos can be distributed among multiple senders. You maximize your income in a single trip while helping multiple people send their packages. Every kilo counts, and every mission earns you more.</p>
                            </div>
                        </div>

                        <div className='p-5 rounded-lg mt-10 bg-[#C7FFD8]'>
                            <div className='flex gap-5'>
                                <div className='bg-primary w-14 h-14 flex items-center justify-center p-3 rounded-full'>
                                    <GoAlert className='text-5xl text-white' />
                                </div>
                                <div>
                                    <h1 className='font-semibold text-primary text-xl'>Attention</h1>
                                    <p className='font-normal mt-3'>Check your available kilos before offering a trip. We advise you to reweigh the packages with the sender upon delivery to avoid any excess at the airport.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="bg-[url('/Images/Itravel/all-bags.png')] bg-no-repeat bg-cover bg-center min-h-[50vh] flex items-end rounded-lg">
                        <div className='bg-[#ffffff] m-5 p-5  rounded-lg flex  items-center justify-center gap-5'>
                            <GoLaw className='text-5xl text-primary' />
                            <p className='font-semibold text-primary'>This maximizes your revenue and makes it easy for more people to send their packages.</p>
                        </div>
                    </div>
                </div>
            </div>

         

        </div>
    );
}

export default HalfEmptyLuggage;
