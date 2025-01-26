import Head from 'next/head';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';

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
                <div className='mt-[90px]'>
                    {children}
                </div>
                <Footer></Footer>
            </body>
        </html>
    );
}
