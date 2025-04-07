import Advantages from '@/app/components/commission/Advantages';
import BecomeMember from '@/app/components/commission/BecomeMember';
import CommissionHeader from '@/app/components/commission/CommissionHeader';
import Faq from '@/app/components/commission/Faq';
import SubscriptionCard from '@/app/components/commission/SubscriptionCard';
import PopularProducts from '@/app/components/Ishop/PopularProducts';
import React from 'react';

const Page = () => {
    return (
        <div className='overflow-hidden'>
            <CommissionHeader />
            <Advantages />
            <SubscriptionCard />
            {/* <BecomeMember />
            <Faq /> */}
            <PopularProducts />
        </div>
    );
}

export default Page;
