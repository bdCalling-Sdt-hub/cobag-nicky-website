import Link from 'next/link';
import React from 'react';
import { BsFillBoxSeamFill } from 'react-icons/bs';
import { FaArrowRightLong } from 'react-icons/fa6';
import { LuPlane, LuShoppingBag } from 'react-icons/lu';

const AboutStory = () => {
    return (
        <div className=''>
            <div className='my-20 lg:w-[60%] w-[90%] mx-auto'>

                <div className='grid lg:grid-cols-2 gap-10 items-center my-10'>
                    <img className='lg:w-4/5 rounded-lg lg:order-1 order-2' src="/Images/about/about-1.png" alt="" />
                    <div className='flex items-start gap-5 lg:order-2 order-1'>
                        <div className='bg-[#f6f6fb] min-w-14 min-h-14 rounded flex items-center justify-center'>
                            <LuPlane className='text-2xl text-primary' />
                        </div>
                        <div>
                            <h2 className='text-3xl font-semibold text-primary mb-3'>The birth of an idea</h2>
                            <p className='leading-[1.5] text-gray-500'>The founder of CoBag got the idea for his startup while traveling. On the way there, he had luggage full to bursting, between souvenirs and gifts and couldn't take everything. But on the way back, his suitcases were empty... and yet, he had already paid for all that unused, wasted space.</p>
                        </div>
                    </div>
                </div>

                <div className='grid lg:grid-cols-2 gap-10 items-center my-10'>
                    <div className='flex items-start gap-5'>
                        <div className='bg-[#f6f6fb] min-w-14 min-h-14 rounded flex items-center justify-center'>
                            <BsFillBoxSeamFill className='text-2xl text-primary' />
                        </div>
                        <div>
                            <h2 className='text-3xl font-semibold text-primary mb-3'>Revolutionary</h2>
                            <p className='leading-[1.5] text-gray-500'>That's when the idea came to him: Why not share this unused space with other people? A simple but effective solution to use the free space of luggage intelligently, reducing the number of planes and trucks on the road, and therefore the carbon footprint. An innovative, ecological and extremely fast solution: in just a few hours, the time of a direct flight, a package crosses the world for delivery even more express than express.</p>
                        </div>
                    </div>
                    <img className='lg:w-4/5 rounded-lg' src="/Images/about/about-2.png" alt="" />
                </div>

                <div className='grid lg:grid-cols-2 gap-10 items-center my-10'>
                    <img className='lg:w-4/5 rounded-lg lg:order-1 order-2' src="/Images/about/about-3.png" alt="" />
                    <div className='flex items-start gap-5 lg:order-2 order-1'>
                        <div className='bg-[#f6f6fb] min-w-14 min-h-14 rounded flex items-center justify-center'>
                            <LuShoppingBag className='text-2xl text-primary' />
                        </div>
                        <div>
                            <h2 className='text-3xl font-semibold text-primary mb-3'>But not only that</h2>
                            <p className='leading-[1.5] text-gray-500'>But that's not all: during the trip, the founder also noticed another need. Not everyone has relatives or friends traveling internationally to bring back rare or exclusive products. With CoBag, travelers can now buy and bring back products from all over the world for those who need them.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#f7f7fc] md:py-32 mx-auto py-20 flex items-center justify-center  border-b-[1px] border-white'>
                <div data-aos="zoom-in" data-aos-duration="500" className='text-center md:px-0 px-5 w-2/3 '>
                    <h2 className='md:text-5xl text-3xl font-semibold text-primary'>Join the CoBag revolution today and travel smart with your luggage!</h2>

                    <div className='flex items-center justify-center mt-8'>
                        <button className='bg-primary py-3 px-10 text-white font-semibold rounded-lg flex items-center gap-2 justify-center'>Start <FaArrowRightLong className='text-xl' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutStory;



{/* <div className='flex items-start w-[90%] mx-auto gap-10 '>
                <div className='py-20 bg-white min-w-[300px] sticky top-[108px] left-0 px-10 min-h-full'>
                    <img className='w-[250px]' src="/Images/about/about_story.png" alt="" />
                    <ul className="list-disc font-semibold capitalize pl-5 my-10 min-h-[60vh]">
                        <li className='my-10'>
                            <Link href={'#frustration'}>A Departure, A Common Frustration </Link>
                        </li>
                        <li className='my-10'>
                            <Link href={'#revolutionary'}>Unused Space, A Revolutionary Idea</Link>
                        </li>
                        <li className='my-10'>
                            <Link href={'#mission'}>CoBag’s Dual Mission</Link>
                        </li>
                        <li className='my-10'>
                            <Link href={'#flight'}>The Game-Changing Advantage</Link>
                        </li>
                        <li className='my-10'>
                            <Link href={'#shopping'}>International Shopping Made Easy</Link>
                        </li>
                        <li className='my-10'>
                            <Link href={'#solution'}>A Solution Born from Real Needs</Link>
                        </li>
                        <li className='my-10'>
                            <Link href={'#everyone'}>A Model Where Everyone Wins</Link>
                        </li>
                        <li className='my-10'>
                            <Link href={'#vision'}>A Vision for the Future</Link>
                        </li>
                    </ul>

                </div>
                <div className='w-2/5 mx-auto mt-20'>
                    <section id='frustration' className=' py-20'>
                        <h2 className='text-primary font-semibold text-5xl leading-[1.2]'>A Departure, A Common Frustration</h2>
                        <p className='mt-5 text-xl font-medium '>A Common Frustration Before the journey, the founder and his partner meticulously packed their bags with gifts and souvenirs. But they quickly faced a dilemma: there wasn’t enough space for everything. Forced to leave some items behind, they realized how limiting traditional baggage allowances could be.</p>
                    </section>
                    <section id='revolutionary' className=' py-20'>
                        <h2 className='text-primary font-semibold text-5xl leading-[1.2]'>Unused Space, A Revolutionary Idea </h2>
                        <p className='mt-5 text-xl font-medium '>A Revolutionary Idea On the way back, their checked luggage was almost empty. The items they’d brought had been delivered, yet they’d already paid for the baggage space.

                            <div className='my-5'>
                                <p className=' font-semibold'>🎉 That’s when the idea clicked :</p>
                                <ul className='list-disc ml-10 mt-2'>
                                    <li>What if this unused space could be shared with others?</li>
                                </ul>
                            </div>

                            By tapping into existing flights and luggage allowances, CoBag could make shipping faster, more affordable, and eco-friendly—no need for extra planes or delivery trucks.</p>
                    </section>
                    <section id='mission' className=' py-20'>
                        <h2 className='text-primary font-semibold text-5xl leading-[1.2]'>CoBag’s Dual Mission </h2>
                        <p className='my-5 text-xl font-medium '>This lightbulb moment gave birth to CoBag.</p>
                        <div className='my-5'>
                            <p className=' font-semibold text-xl'>With two clear goals: </p>
                            <ul className='list-decimal text-xl font-medium  ml-10 mt-2'>
                                <li>Helping people make the most of unused baggage space. </li>
                                <li>The carbon footprint of international shipping and shopping. </li>
                            </ul>
                        </div>
                    </section>
                    <section id='flight' className=' py-20'>
                        <h2 className='text-primary font-semibold text-5xl leading-[1.2]'>
                            <span className='font-normal'>Speed:</span> <br />
                            Shipping at the Pace of a Flight
                        </h2>
                        <p className='my-5 text-xl font-medium '>International shipping often takes weeks, causing unnecessary delays and costs. CoBag changes that. By connecting travelers and senders, a package can arrive as fast as the traveler’s flight—just hours instead of days or weeks.</p>

                    </section>
                    <section id='shopping' className=' py-20'>
                        <h2 className='text-primary font-semibold text-5xl leading-[1.2]'>

                            Shopping Across Borders Made Easy
                        </h2>
                        <p className='my-5 text-xl font-medium '>During that same trip, friends back home asked the founder to bring back products unavailable locally. Not everyone has friends or family traveling abroad to fulfill such requests, so the founder envisioned a universal solution: <br />

                            <i className='block my-5'>A platform where anyone, anywhere, could access products from around the world. </i>
                            With CoBag, you don’t need personal connections or a network abroad. Travelers can shop for you, delivering rare finds or exclusive items from any corner of the globe.
                        </p>

                    </section>
                    <section id='solution' className=' py-20'>
                        <h2 className='text-primary font-semibold text-5xl leading-[1.2]'>
                            <span className='font-normal'>Co<span className='font-bold'>B</span>ag: </span> <br />
                            A Solution Born from Real Needs
                        </h2>
                        <p className='my-5 text-xl font-medium '>This is how CoBag came to life. A simple yet powerful concept:
                        </p>
                        <ul className='list-decimal text-xl font-medium  ml-10 mt-2'>
                            <li>Optimize the unused space in travelers’ luggage.  </li>
                            <li>Offer a fast, affordable, and eco-friendly solution for international shipments.</li>
                            <li>Enable international shopping, giving everyone access to rare or locally unavailable products.</li>
                        </ul>

                        <p className='my-5 text-xl font-medium '><span className='font-semibold'>CoBag is more than a service.</span> It’s a community of mutual aid where every trip becomes an opportunity, every piece of luggage becomes an asset, and every journey contributes to a greener planet.
                        </p>
                    </section>
                    <section id='everyone' className=' py-20'>
                        <h2 className='text-primary font-semibold text-5xl leading-[1.2]'>
                            A Model Where Everyone Wins
                        </h2>
                        <p className='my-5 text-xl font-medium '>With CoBag:
                        </p>
                        <ul className='list-disc text-xl font-medium  ml-10 mt-2'>
                            <li>Travelers turn their journeys into income by sharing unused luggage space.</li>
                            <li>Senders and buyers enjoy a quick, flexible, and often cheaper alternative to traditional services.</li>
                            <li>The planet benefits from reduced carbon emissions through smarter use of existing flights.</li>
                        </ul>
                    </section>
                    <section id='vision' className=' py-20'>
                        <h2 className='text-primary font-semibold text-5xl leading-[1.2]'>
                            A Vision for the Future
                        </h2>
                        <p className='my-5 text-xl font-medium '>This is just the beginning. CoBag aims to revolutionize how we transport and shop internationally. 
                        </p>
                        <ul className='list-disc text-xl font-medium  ml-10 mt-2'>
                            <li>Because every space matters.</li>
                            <li>Every trip can be meaningful. </li>
                            <li>Everyone deserves easy.</li>
                            <li>Human connections in a truly globalized world. </li>
                        </ul>
                    </section>
                </div>
</div> */}