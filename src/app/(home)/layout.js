import Head from 'next/head';
import Header from '../components/Common/Header';

export default function Layout({ children }) {
    return (
        <html lang="en">
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Home Page</title>
            </Head>
            <body>
                <Header></Header>
                <div className='md:mt-[108px] mt-20'>
                    {children}
                </div>
            </body>
        </html>
    );
}
