'use client';
import i18n from '@/app/utils/i18';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

const faqSteps = [
  { img: '11.png', text: 'Complete the online form indicating your journey and available weight.' },
  { img: '12.png', text: 'Check the "Available to be a courier" option and get offers or explore ads.' },
  { img: '13.png', text: 'Wait for a user to purchase your baggage space.' },
  { img: '14.png', text: 'Chat with the buyer to adjust shipping details.' },
  { img: '15.png', text: 'Meet the sender and check the package together.' },
  { img: '161.png', text: 'Confirm the collection on the platform.' },
  { img: '15.png', text: 'At the destination, deliver it to the recipient or via locker.' },
  { img: '16.png', text: 'Confirm delivery with a 4-digit code.' },
  { img: '17.png', text: 'Receive your payment and withdraw it.' },
];

const YourTravial = () => {
  const { t } = i18n;

  const [activeFAQ, setActiveFAQ] = useState(null);
  const toggleFAQ = (index) => {
    setActiveFAQ(prev => (prev === index ? null : index));
  };

  const faqs = [
    {
      title: 'How do I resell my unused kilos?',
      sub: 'On average €50-200 in winnings!',
      content: faqSteps,
    },
    {
      title: 'How do I get my excess baggage transported?',
      sub: 'Minimum 50% savings!',
      content: [
        { img: '11.png', text: 'Complete the route search form, indicating your route and baggage weight.' },
        { img: '22.png', text: 'Find matching passengers and contact them.' },
        { img: '14.png', text: 'Pay €5 to unlock chat and arrange delivery.' },
        { img: '15.png', text: 'Meet at the airport and check in luggage together.' },
        { img: '16.png', text: 'Collect luggage at destination and complete the mission.' },
      ],
    },
    {
      title: 'How do I transport a purchase for someone?',
      sub: 'Minimum earnings of €27!',
      content: [
        { img: '11.png', text: 'Search for a courier or post a purchase ad.' },
        { img: '22.png', text: 'View available travelers and select the best one.' },
        { img: '12.png', text: 'Pay €5 and confirm courier details and advance.' },
        { img: '14.png', text: 'Courier makes the purchase abroad.' },
        { img: '15.png', text: 'Meet courier and collect the product.' },
        { img: '16.png', text: 'Give delivery code to release the payment.' },
      ],
    },
    {
      title: 'How do I buy a product abroad?',
      sub: 'The fastest delivery on the planet is 99% cheaper',
      content: [
        { img: '11.png', text: 'Fill out the form with your package destination and weight.' },
        { img: '22.png', text: 'Find a traveler going that way and select one.' },
        { img: '14.png', text: 'Pay €5 and define delivery terms via chat.' },
        { img: '15.png', text: 'Meet at airport/station and seal the package.' },
        { img: '16.png', text: 'Traveler delivers the package with code confirmation.' },
      ],
    },
  ];

  return (
    <div className='lg:w-[50%] w-[90%] mx-auto mb-10'>
      {faqs.map((faq, idx) => (
        <div key={idx}>
          <div
            onClick={() => toggleFAQ(idx)}
            className='flex items-center gap-5 justify-between border border-gray-300 shadow p-5 rounded-lg cursor-pointer mt-5'
          >
            <div>
              <h2 className='text-xl font-semibold text-primary'>{faq.title}</h2>
              <p className='mt-2 font-semibold text-green-700'>{faq.sub}</p>
            </div>
            <div className={`${activeFAQ === idx ? 'rotate-[180deg]' : ''}`}>▼</div>
          </div>

          {activeFAQ === idx && (
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInLeft}
              className='my-5'
            >
              {faq.content.map((step, stepIdx) => (
                <div key={stepIdx} className='flex items-center gap-5 my-5'>
                  <img className='w-20' src={`/Images/NewSection/ourconsept/${step.img}`} alt="" />
                  <p dangerouslySetInnerHTML={{ __html: `${stepIdx + 1}. ${step.text}` }} />
                </div>
              ))}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default YourTravial;
