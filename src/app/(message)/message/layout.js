import AllUserMessage from '@/app/components/message/AllUserMessage';
import Head from 'next/head';

export default function Layout({ children }) {
    return (
        <html lang="en">
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Message</title>
            </Head>
            <body>
                <div className='flex h-screen overflow-hidden'>
                    <div className='min-w-96 border-r border-gray-400 overflow-y-scroll'>
                        <AllUserMessage />
                    </div>
                    <div className='w-full'>
                        <div className='fixed top-0 left-0 md:relative h-screen md:h-auto'>
                            {children}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
