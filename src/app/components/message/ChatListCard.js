"use client";
import baseUrl from "@/app/redux/api/baseUrl";
import { useGetSingleUserQuery } from "@/app/redux/Features/Auth/getUser";
import useUser from "@/hooks/useUser";
import moment from "moment";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const ChatListCard = ({ chat }) => {
  const { lastMessage } = chat;
  const [currentTime, setCurrentTime] = useState(moment());
  const router = useRouter();
  const { chatId } = useParams();
  const user = useUser();
  const { content, senderId, createdAt } = lastMessage || {};
  const myLastMessage = senderId === user?._id;

  // Get the receiver user details
  const receiverId = chat?.participants?.find((p) => p !== user?._id);
  const { data: receiverResponseData } = useGetSingleUserQuery(
    receiverId,
    {
      refetchOnMountOrArgChange: true,
      skip: !receiverId,
    }
  );
  const receiverDetails = receiverResponseData?.data;
  // **Update time every minute for "x minutes ago"**
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  /** 📌 Render Last Message Content */
  const renderMessageContent = () => {
    if (!content) return "";

    switch (content.messageType) {
      case 'text':
        return `${myLastMessage ? "You: " : ""}${
          content.text && content.text.length > 20
            ? `${content.text.slice(0, 20)}...`
            : content.text
        }`;
      case 'image':
        return myLastMessage ? "You sent a photo" : "sent a photo";
      case 'audio':
        return myLastMessage
          ? "You sent an audio message"
          : "sent an audio message";
      case 'video':
        return myLastMessage ? "You sent a video" : "sent a video";
      case 'document':
        return myLastMessage ? "You sent a document" : "sent a document";
      case 'mixed':
        return myLastMessage
          ? "You sent a mixed message"
          : "sent a mixed message";
      default:
        return "";
    }
  };

  const handleClickChat = () => {
    router.push(`/message/${chat?._id}`);
  };

  return (
    <div
      onClick={handleClickChat}
      className={`w-full ${
        chatId === chat?._id && "bg-[#F6F6FE]"
      } px-4 py-3 flex rounded-lg items-center gap-3 cursor-pointer`}
    >
      <div className="relative">
        {receiverDetails?.profileImage && (
          <Image
            src={`${baseUrl}${receiverDetails?.profileImage}`}
            alt="user"
            width={70}
            height={70}
            className="w-[70px] h-[60px]  object-cover rounded-xl"
          />
        )}
        {receiverDetails?.isOnline && (
          <div className="absolute right-0.5 bottom-0.5 ring-1 ring-white size-[10px] rounded-full bg-green-500" />
        )}
      </div>
      <div className="w-full space-y-2">
        <div className="flex justify-between items-center gap-2 text-sm">
          <h1 className="text-sm xl:text-lg font-medium">
            {`${receiverDetails?.firstName} ${receiverDetails?.lastName}`}
          </h1>
          {createdAt && (
            <p className="text-[#999999] text-xs">
              {moment(createdAt).from(currentTime)}
            </p>
          )}
        </div>
        <div className="text-xs">{renderMessageContent()}</div>
      </div>
    </div>
  );
};

export default ChatListCard;