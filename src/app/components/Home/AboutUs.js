import { motion } from 'framer-motion'; // Import motion from Framer Motion
import { CiLocationOn } from 'react-icons/ci';
import { FaArrowRight } from "react-icons/fa6";
import { SlPlane } from "react-icons/sl";

const AboutUs = () => {
    return (
        <div className='md:my-32 my-10'>
            {/* First Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className='md:w-[70%] w-[90%] mx-auto'
                data-aos="fade-up" data-aos-duration="500"
            >
                <h2 className='md:text-4xl text-2xl font-semibold text-primary text-center mb-5'>
                    CoBag is also the solution for:
                </h2>
                <p className='md:text-xl text-center tracking-wider leading-[1.6] text-primary'>
                    Carry your excess baggage at a discounted price, shop from around the world and send packages internationally,
                    all with <span className='text-primary font-semibold leading-[1.6]'>
                        the <br /> fastest delivery on the planet: one direct flight away .
                    </span>
                </p>
                <img data-aos="fade-up" data-aos-duration="500" className='md:w-2/4 mx-auto' src="/Images/NewSection/solutions-1.png" alt="" />
                <motion.button
                    whileHover={{ scale: 1.03, backgroundColor: "#0b2f9f" }}
                    className='flex items-center justify-center gap-2 bg-primary text-white py-3 px-5 rounded-lg mx-auto my-20'
                >
                    Transport my surplus at a reduced price <FaArrowRight />
                </motion.button>
            </motion.section>

            {/* Second Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className='w-[80%] mx-auto  '
            >
                <h2 className='text-center text-xl text-primary mt-10 md:mt-32'>
                    Examples of international purchases you will have in your hands <span className='text-primary font-semibold'>during a flight :</span>
                </h2>

                <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-10 my-20 text-center'>
                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        className='hover:-mt-2 duration-500'
                        data-aos="fade-up" data-aos-duration="200"
                    >
                        <img className='w-full mx-auto' src="/Images/NewSection/Examples-1.png" alt="" />
                        <h2 className='mt-5 flex items-center text-primary gap-2 justify-center font-medium mb-3'>
                            <CiLocationOn />Asia
                        </h2>
                        <p className='font-semibold'>Korean Skin Care Beauty Treatments</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        className='hover:-mt-2 duration-500'
                        data-aos="fade-up" data-aos-duration="500"
                    >
                        <img className='w-full mx-auto' src="/Images/NewSection/cigarettes.png" alt="" />
                        <h2 className='mt-5 flex items-center text-primary gap-2 justify-center font-medium mb-3'>
                            <CiLocationOn />Europe
                        </h2>
                        <p className='font-semibold'>Cheaper cigarettes</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        className='hover:-mt-2 duration-500'
                        data-aos="fade-up" data-aos-duration="700"
                    >
                        <img className='w-full mx-auto' src="/Images/NewSection/pagne.png" alt="" />
                        <h2 className='mt-5 flex items-center text-primary gap-2 justify-center font-medium mb-3'>
                            <CiLocationOn />Africa
                        </h2>
                        <p className='font-semibold'>Traditional and authentic wax fabric</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        className='hover:-mt-2 duration-500'
                        data-aos="fade-up" data-aos-duration="800"
                    >
                        <img className='w-full mx-auto' src="/Images/NewSection/maillot.png" alt="" />
                        <h2 className='mt-5 flex items-center text-primary gap-2 justify-center font-medium mb-3'>
                            <CiLocationOn />America
                        </h2>
                        <p className='font-semibold'>Authentic NBA Jerseys</p>
                    </motion.div>
                </div>
                <motion.button
                    whileHover={{ scale: 1.03, backgroundColor: "#0b2f9f" }}
                    className='flex items-center justify-center gap-2 bg-primary text-white py-3 px-8 rounded-xl mx-auto'
                >
                    Find my buyer <FaArrowRight />
                </motion.button>
            </motion.section>

            {/* Third Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className='w-[80%] mx-auto my-10 md:my-32'
            >
                <h2 className='text-center text-xl text-primary'>
                    Examples of international shipments, <span className='text-primary font-semibold'>delivered during a flight :</span>
                </h2>

                <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-10 mt-5 mb-20 text-center'>
                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        className='hover:-mt-2 duration-500'
                        data-aos="fade-up" data-aos-duration="200"
                    >
                        <img className='w-full mx-auto' src="/Images/NewSection/documents-1.png" alt="" />
                        <h2 className='mt-5 flex items-center gap-2 text-primary justify-center font-medium mb-3'>
                            <SlPlane />Fastest delivery on the planet
                        </h2>
                        <p className='font-semibold'>Urgent documents</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        className='hover:-mt-2 duration-500'
                        data-aos="fade-up" data-aos-duration="500"
                    >
                        <img className='w-full mx-auto' src="/Images/NewSection/documents-2.png" alt="" />
                        <h2 className='mt-5 flex items-center gap-2 text-primary justify-center font-medium mb-3'>
                            <SlPlane />Fastest delivery on the planet
                        </h2>
                        <p className='font-semibold'>Urgent medications</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        className='hover:-mt-2 duration-500'
                        data-aos="fade-up" data-aos-duration="700"
                    >
                        <img className='w-full mx-auto' src="/Images/NewSection/documents-3.png" alt="" />
                        <h2 className='mt-5 flex items-center gap-2 text-primary justify-center font-medium mb-3'>
                            <SlPlane />Fastest delivery on the planet
                        </h2>
                        <p className='font-semibold'>High-tech to offer</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        className='hover:-mt-2 duration-500'
                        data-aos="fade-up" data-aos-duration="800"
                    >
                        <img className='w-full mx-auto' src="/Images/NewSection/documents-4.png" alt="" />
                        <h2 className='mt-5 flex items-center gap-2 text-primary justify-center font-medium mb-3'>
                            <SlPlane />Fastest delivery on the planet
                        </h2>
                        <p className='font-semibold'>Gifts for special occasions</p>
                    </motion.div>
                </div>
                <motion.button
                    whileHover={{ scale: 1.03, backgroundColor: "#0b2f9f" }}
                    className='flex items-center justify-center gap-2 bg-primary text-white py-3 px-8 rounded-xl mx-auto'
                >
                    Find my carrier <FaArrowRight />
                </motion.button>
            </motion.section>

            {/* Fourth Section */}
            <div className='bg-gradient-to-t from-[#ffffff] via-[#c4f5e0] to-[#ffffff1a]'>
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='md:w-[80%] w-[90%] mx-auto'
                    data-aos="fade-up" data-aos-duration="500"
                >
                    <h2 className='text-center md:text-3xl text-2xl font-semibold text-primary'>
                        CoBag: An ecological revolution in transport
                    </h2>
                    <p className='mb-10 mt-10 md:w-3/4 mx-auto text-center md:text-xl'>
                        Every day, <span className='font-semibold text-primary'>13.7 million people travel by plane around the world</span> , and <span className='font-semibold text-primary'>67.2 million kilos of their luggage go unused .</span> With CoBag, these lost kilos become a valuable resource, drastically reducing CO₂ emissions.
                    </p>

                    <img data-aos="zoom-in" data-aos-duration="500" className='md:w-[450px] mx-auto' src="/Images/NewSection/ecolo.png" alt="" />
                    <div className='text-center space-y-3'>
                        <h3 className='font-semibold text-center'>
                            🌍 92 million tonnes of CO₂ saved per year, the equivalent of 20 million fewer cars on the roads.
                        </h3>
                        <h2>🌱 An alternative to air freight that avoids 252 million kg of CO₂ per day .</h2>
                        <h2>💰 A market with high potential: €122.6 billion in annual savings for CoBag users by optimizing this wasted space.</h2>
                        <h2> 100% greener, 100% faster, 100% baggage refunded, 99% cheaper</h2>
                        <br />
                        <h2 className='font-semibold mt-10 text-xl text-primary'> CoBag is:</h2>
                        <h2> ✅ An ecological and economical alternative</h2>
                        <h2> ✅ A fast and secure solution</h2>
                        <h2> ✅ An opportunity for all travelers </h2>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}

export default AboutUs;
