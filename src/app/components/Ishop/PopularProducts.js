import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';

const PopularProducts = () => {
    return (
        <div className='bg-[#f6f6fb] py-20'>
            <div className='lg:w-[80%] w-[90%] mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-10'>

                <div data-aos="fade-up" data-aos-duration="300" className='shadow-xl rounded-2xl overflow-hidden'>
                    <div className='bg-[url("/Images/Ishop/Card_image_1.jpg")] w-full min-h-[300px] bg-cover bg-center]  '>
                        <div className='min-h-[300px] w-full bg-[#0000007a] flex items-end'>
                            <div className='p-5 text-white'>
                                <h2 className='text-xl font-semibold'>Korean Beauty Products</h2>
                                <span className='flex items-center gap-2'><FiShoppingBag /> Seoul</span>
                            </div>
                        </div>
                    </div>
                    <div className='p-5 flex justify-end'>
                        <button className='py-3 px-10 bg-gradient-to-r from-primary to-[#0d2c98] text-white rounded-lg'>See the couriers</button>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="500" className='shadow-xl rounded-2xl overflow-hidden'>
                    <div className='bg-[url("/Images/Ishop/Card_image_3.jpg")] w-full min-h-[300px] bg-cover bg-center]  '>
                        <div className='min-h-[300px] w-full bg-[#0000007a] flex items-end'>
                            <div className='p-5 text-white'>
                                <h2 className='text-xl font-semibold'>Exclusive sneakers</h2>
                                <span className='flex items-center gap-2'><FiShoppingBag /> New York</span>
                            </div>
                        </div>
                    </div>
                    <div className='p-5 flex justify-end'>
                        <button className='py-3 px-10 bg-gradient-to-r from-primary to-[#0d2c98] text-white rounded-lg'>See the couriers</button>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="700" className='shadow-xl rounded-2xl overflow-hidden'>
                    <div className='bg-[url("/Images/Ishop/Card_image_2.jpg")] w-full min-h-[300px] bg-cover bg-center]  '>
                        <div className='min-h-[300px] w-full bg-[#0000007a] flex items-end'>
                            <div className='p-5 text-white'>
                                <h2 className='text-xl font-semibold'>Clothes</h2>
                                <span className='flex items-center gap-2'><FiShoppingBag /> Tokyo</span>
                            </div>
                        </div>
                    </div>
                    <div className='p-5 flex justify-end'>
                        <button className='py-3 px-10 bg-gradient-to-r from-primary to-[#0d2c98] text-white rounded-lg'>See the couriers</button>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default PopularProducts;
