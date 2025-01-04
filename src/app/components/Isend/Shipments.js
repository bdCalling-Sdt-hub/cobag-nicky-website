import React from 'react';

const Shipments = () => {
    return (
        <div className='bg-[#f7f7fc]'>
            <div className='py-10 lg:w-[80%] w-[90%] mx-auto '>
                <div className='lg:w-2/4 mx-auto text-center mb-10'>
                    <h2 className='md:text-4xl text-3xl font-semibold text-primary'>Why choose CoBag for your shipments?</h2>
                </div>


                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                    <div className="overflow-hidden rounded-lg relative group">
                        {/* Background Image with Overlay */}
                        <div className="bg-[url('/Images/isend-shipments-2.png')] w-full h-[350px] bg-cover bg-center bg-[#f7f7fc] group-hover:scale-105 duration-300 ease-in-out relative">
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out "></div>
                        </div>
                        {/* Content */}
                        <div className="absolute inset-0 z-50 flex items-end justify-start p-5">
                            <div>
                                <p className="bg-[#fff] text-primary max-w-32 text-center py-2 px-6 rounded-full">Express</p>
                                <h2 className="text-2xl my-3 font-semibold text-white">Exceptional Speed</h2>
                                <p className="text-white">
                                    Delivery in just a few hours, matching the duration of a flight—faster than any traditional service.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-lg relative group">
                        {/* Background Image with Overlay */}
                        <div className="bg-[url('/Images/isend-shipments-1.png')] w-full h-[350px] bg-cover bg-center bg-[#f7f7fc] group-hover:scale-105 duration-300 ease-in-out relative">
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out "></div>
                        </div>
                        {/* Content */}
                        <div className="absolute inset-0 z-50 flex items-end justify-start p-5">
                            <div>
                                <p className="bg-[#fff] text-primary max-w-32 text-center py-2 px-6 rounded-full">
                                    Savings
                                </p>
                                <h2 className="text-2xl my-3 font-semibold text-white">Savings</h2>
                                <p className="text-white">
                                    Cheaper than traditional carriers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-20 grid md:grid-cols-2 xl:grid-cols-3 gap-5'>
                    <div className='shadow-lg rounded-lg p-10'>
                        <img src="/Images/Isend/shipments-icon-3.png" alt="" />
                        <h2 className='text-primary text-xl font-semibold my-5'>Unique solution</h2>
                        <p>Take advantage of an innovative platform that combines speed, economy and security to revolutionize your international shipments.</p>
                    </div>
                    <div className='shadow-lg rounded-lg p-10'>
                        <img src="/Images/Isend/shipments-icon-2.png" alt="" />
                        <h2 className='text-primary text-xl font-semibold my-5'>Personalized delivery</h2>
                        <p>Your beneficiary receives the package in complete confidence, directly at the airport, at the train station or in a secure locker, according to your needs.</p>
                    </div>
                    <div className='shadow-lg rounded-lg p-10'>
                        <img src="/Images/Isend/shipments-icon-1.png" alt="" />
                        <h2 className='text-primary text-xl font-semibold my-5'>Simplicity and flexibility</h2>
                        <p>A wide choice of routes to ship your packages according to your needs, with simple and intuitive management via our site.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shipments;
