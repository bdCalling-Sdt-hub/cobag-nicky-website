'use client';
import { useGetChatsQuery } from '@/app/redux/Features/message/getMessage';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';
import ChatListCard from './ChatListCard';
import { IoReturnUpBack } from 'react-icons/io5';

const AllChats = ({ isAllUserMessage }) => {
    const { data: responseChatData } = useGetChatsQuery();
    const allChats = responseChatData?.data?.results;




    return (
        <div className="">
            {/* Header */}
            <div className="sm:p-5 py-5 border-b border-gray-100 ">
                <div className='flex items-center justify-between mb-5'>
                    <Link href={'/dashboard/profile'} className='bg-primary px-2 py-1 rounded' >
                        <IoReturnUpBack className='text-2xl text-white' />
                    </Link>
                    <h2 className="font-semibold text-xl "> Messages</h2>
                </div>
                {/* Search Input */}
                <div className="relative">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search people or message"
                        className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
            </div>

            {/* List of Messages */}
            <div>
                {
                    allChats?.map((chat) => <ChatListCard key={chat._id} chat={chat} />)
                }

            </div>
        </div>
    );
};

export default AllChats;
