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
                <div className='flex items-start'>
                    <div className='w-96 border-r border-gray-400'>
                        <AllUserMessage />
                    </div>
                    <div className=''>
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
