import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./redux/provider";
import Start from "./utils/Start.js";
import { SocketProvider } from "../context/SocketContext";
// import { SocketProvider } from "@/context/SocketContext";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cobag website",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {




  return (
    <html lang="en">

      <body suppressHydrationWarning suppressContentEditableWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SocketProvider>
          <Start />
          <ReduxProvider>

            {children}
          </ReduxProvider>
        </SocketProvider>
      </body>
    </html>
  );
}
