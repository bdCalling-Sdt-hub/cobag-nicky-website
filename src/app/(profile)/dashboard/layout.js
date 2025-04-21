"use client";
import Header from "@/app/components/Common/profile/Header";
import Sidebar from "@/app/components/Common/profile/Sidebar";
import { useGetUserQuery } from "@/app/redux/Features/Auth/getUser";
import Head from "next/head";
import { useRouter } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { IoMenu } from "react-icons/io5";

export default function Layout({ children }) {



    const { user } = useGetUserQuery()
    console.log(user);



    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <html lang="en">
            <NextTopLoader
                color="#161d6f"
                initialPosition={0.08}
                crawlSpeed={200}
                height={5}
                crawl={true}
                easing="ease"
                speed={200}
                template='<div className="bar" role="bar"><div className="peg"></div></div> 
                             <div className="spinner" role="spinner"><div className="spinner-icon"></div></div>'
                zIndex={999999999}
                showAtBottom={false}
            />

            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Home Page</title>
            </Head>
            <body>
                <Toaster />
                <div className="flex flex-col md:flex-row items-start">
                    {/* Sidebar */}
                    <div

                        className={`fixed top-0 left-0 bg-white shadow-md z-50 h-screen md:relative md:h-auto md:flex ${isSidebarOpen ? "block" : "hidden"
                            } md:block w-72`}
                    >
                        <Sidebar setIsSidebarOpen={setIsSidebarOpen} />

                    </div>

                    {/* Main Content */}
                    <div className="flex-1 w-full">
                        <header className="bg-white shadow-md p-3 md:block  flex items-center justify-between md:justify-end">
                            {/* Menu Icon for Mobile */}
                            <button
                                onClick={handleToggleSidebar}
                                className="md:hidden text-gray-700 focus:outline-none"
                            >
                                <IoMenu className="text-3xl" />
                            </button>
                            <Header />
                        </header>
                        <div className="bg-gray-100 p-5 min-h-screen">{children}</div>
                    </div>
                </div>
            </body>
        </html>
    );
}
