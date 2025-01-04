import Header from "@/app/components/Common/profile/Header";
import Sidebar from "@/app/components/Common/profile/Sidebar";
import Head from "next/head";



export default function Layout({ children }) {
    return (
        <html lang="en">
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Home Page</title>
            </Head>
            <body>
                <div className="flex items-start">
                    <div className="w-1/5 h-[100vh] bg-black">
                        <Sidebar />
                    </div>
                    <div className="bg-red-500 w-4/5">
                        <Header></Header>
                        <div className='bg-blue-600'>
                            {children}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
