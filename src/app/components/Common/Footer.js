import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-primary text-white '>
            <div className='w-[90%] mx-auto '>
                <div className='grid xl:grid-cols-5 md:grid-cols-3 sm:grid grid-cols-1 gap-10 justify-start items-start py-10'>
                    <div>
                        <img src="/Images/LogoWhite.png" alt="" />
                        <p className='text-justify mt-5 leading-7'>CoBag connects individuals: some resell their unused kilos, while others take advantage of it to send, receive, or transport at a lower cost and with complete simplicity, benefiting from delivery in just a few hours worldwide.</p>
                    </div>
                    <div>
                        <h2 className='text-3xl font-semibold'>Contract </h2>

                        <ul className='mt-10'>
                            <li className='flex gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M9.46167 10C9.46167 8.20507 10.9167 6.75 12.7117 6.75C14.5066 6.75 15.9617 8.20507 15.9617 10C15.9617 11.7949 14.5066 13.25 12.7117 13.25C10.9167 13.25 9.46167 11.7949 9.46167 10Z" fill="#E7E7EC" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.48521 8.87739C4.82885 4.70845 8.31264 1.5 12.4957 1.5H12.9277C17.1107 1.5 20.5945 4.70845 20.9382 8.87739C21.1232 11.122 20.4299 13.3508 19.0042 15.0943L14.2111 20.9561C13.4362 21.9039 11.9872 21.9039 11.2123 20.9561L6.41919 15.0943C4.99354 13.3508 4.30019 11.122 4.48521 8.87739ZM12.7117 5.25C10.0883 5.25 7.96167 7.37665 7.96167 10C7.96167 12.6234 10.0883 14.75 12.7117 14.75C15.335 14.75 17.4617 12.6234 17.4617 10C17.4617 7.37665 15.335 5.25 12.7117 5.25Z" fill="#E7E7EC" />
                                </svg>
                                75 Boulevard Haussmann, Paris, France
                            </li>
                            <li className='flex gap-3 mt-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42324 3.9713C10.9418 3.6567 14.4814 3.6567 17.9999 3.9713L19.5172 4.10697C21.0296 4.24219 22.2515 5.39757 22.4712 6.89999C22.9657 10.2823 22.9657 13.7186 22.4712 17.1009C22.2515 18.6033 21.0296 19.7587 19.5172 19.8939L17.9999 20.0296C14.4813 20.3442 10.9418 20.3442 7.42324 20.0296L5.9059 19.8939C4.39353 19.7587 3.17158 18.6033 2.95192 17.1009C2.45743 13.7186 2.45743 10.2823 2.95192 6.89999C3.17158 5.39757 4.39353 4.24219 5.9059 4.10697L7.42324 3.9713ZM6.56712 6.8401C6.3347 6.71495 6.05359 6.72121 5.82696 6.85657C5.60033 6.99194 5.46155 7.23648 5.46155 7.50046V17.0005C5.46155 17.4147 5.79733 17.7505 6.21155 17.7505C6.62576 17.7505 6.96155 17.4147 6.96155 17.0005V8.75612L12.356 11.6608C12.578 11.7803 12.8451 11.7803 13.0671 11.6608L18.4615 8.75612V17.0005C18.4615 17.4147 18.7973 17.7505 19.2115 17.7505C19.6258 17.7505 19.9615 17.4147 19.9615 17.0005V7.50046C19.9615 7.23648 19.8228 6.99194 19.5961 6.85657C19.3695 6.72121 19.0884 6.71495 18.856 6.8401L12.7115 10.1486L6.56712 6.8401Z" fill="#E7E7EC" />
                                </svg>
                                <span className='underline'>support@cobag.com</span>
                            </li>
                            <li className='flex gap-3 mt-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.21167 12C3.21167 7.52166 3.21167 5.28249 4.60291 3.89124C5.99416 2.5 8.23333 2.5 12.7117 2.5C17.19 2.5 19.4292 2.5 20.8205 3.89124C22.2117 5.28249 22.2117 7.52166 22.2117 12C22.2117 16.4783 22.2117 18.7175 20.8205 20.1088C19.4292 21.5 17.19 21.5 12.7117 21.5C8.23333 21.5 5.99416 21.5 4.60291 20.1088C3.21167 18.7175 3.21167 16.4783 3.21167 12ZM12.7117 7.75C12.0213 7.75 11.4617 8.30964 11.4617 9C11.4617 9.41421 11.1259 9.75 10.7117 9.75C10.2975 9.75 9.96167 9.41421 9.96167 9C9.96167 7.48122 11.1928 6.25 12.7117 6.25C14.2305 6.25 15.4617 7.48122 15.4617 9C15.4617 9.54628 15.3016 10.0576 15.0254 10.4867C14.8525 10.7554 14.6504 11.012 14.464 11.2436L14.3634 11.3683L14.3633 11.3683L14.3633 11.3684C14.2087 11.5598 14.0667 11.7355 13.9355 11.9158C13.612 12.3605 13.4617 12.6947 13.4617 13V13.5C13.4617 13.9142 13.1259 14.25 12.7117 14.25C12.2975 14.25 11.9617 13.9142 11.9617 13.5V13C11.9617 12.2007 12.3541 11.5398 12.7226 11.0332C12.8783 10.8193 13.049 10.6082 13.2041 10.4163L13.2041 10.4162L13.2953 10.3033C13.4805 10.0731 13.6381 9.87067 13.7641 9.67497L13.7641 9.67489C13.8891 9.4807 13.9617 9.25002 13.9617 9C13.9617 8.30964 13.402 7.75 12.7117 7.75ZM12.7039 16C12.1516 16 11.7039 16.4477 11.7039 17C11.7039 17.5523 12.1516 18 12.7039 18H12.7129C13.2651 18 13.7129 17.5523 13.7129 17C13.7129 16.4477 13.2651 16 12.7129 16H12.7039Z" fill="#E7E7EC" />
                                </svg>
                                FAQ
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold">Traveler</h3>
                        <ul className='mt-10'>
                            <li className='my-5'>Propose a route</li>
                            <li className='my-5'>Traveler rates</li>
                            <li className='my-5'>Traveler FAQ</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold">Shippers</h3>
                        <ul className='mt-10'>
                            <li className='my-5'>Send a package</li>
                            <li className='my-5'>International purchases</li>
                            <li className='my-5'>Shipper rates</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold">Courier</h3>
                        <ul className='mt-10'>
                            <li className='my-5'>Offer a route</li>
                            <li className='my-5'>Courier rates</li>
                            <li className='my-5'>Search Courier</li>
                        </ul>
                    </div>
                </div>
                <hr className='' />
                <div className='flex justify-between items-center gap-5 flex-wrap py-10'>
                    <span>© 2024 CoBag. All rights reserved.</span>
                    <Link className='hover:underline' href={'/about'}>About Co<span className='font-semibold'>B</span>ag</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;
