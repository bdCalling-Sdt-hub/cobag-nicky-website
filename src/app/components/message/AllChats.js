'use client';
import { useGetChatsQuery } from '@/app/redux/Features/message/getMessage';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';
import ChatListCard from './ChatListCard';

const AllChats = ({ isAllUserMessage }) => {
    const { data: responseChatData } = useGetChatsQuery();
    const allChats = responseChatData?.data?.results;
    
    return (
        <div className="">
            {/* Logo */}
            {/* <Link href="/dashboard/profile" className="border-b border-gray-400">
                <img className="w-1/2 mx-auto py-5" src="/Images/logo.svg" alt="Logo" />
            </Link> */}

            {/* Header */}
            <div className="p-5 border-b border-gray-100 ">
                <h2 className="font-semibold text-xl mb-5">Messages</h2>
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
