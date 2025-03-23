import Head from 'next/head';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import { RxCross2 } from 'react-icons/rx';
import { CiStar } from 'react-icons/ci';
import MainSlider from '../components/Home/MainSlider';

import 'animate.css'; // Import Animate.css

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
                <div className='mt-[100px]'>
                    {children}
                </div>
                <Footer></Footer>

                <div className="fixed animate__fadeOutRight right-0 bottom-0 w-[420px]">
                    <MainSlider />
                </div>

            </body>
        </html>
    );
}
