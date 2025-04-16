import Head from 'next/head';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import { RxCross2 } from 'react-icons/rx';
import { CiStar } from 'react-icons/ci';
import MainSlider from '../components/Home/MainSlider';
import 'animate.css'; // Import Animate.css
import NextTopLoader from 'nextjs-toploader';

export default function Layout({ children }) {
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
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Home Page</title>
            </Head>
            <body>
                <Header></Header>
                <div className='mt-[120px] md:mt-[130px]'>
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
