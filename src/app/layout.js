import { Gabarito, DM_Serif_Text } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import Navbar from "@/components/Navbar";

const gabarito = Gabarito({
  variable: "--font-gabarito",
  weight: ['400','500','600','700','800','900'],
  subsets: ["latin"],
});

const dmSerifText = DM_Serif_Text({
  variable: "--font-dmSerifText",
  weight: ['400'],
  subsets: ["latin"],
});

export const metadata = {
  title: "Jacob Salvi",
  description: "A Journey of being creative",
  icons:{
    icon : '/assests/favicon.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${gabarito.variable} ${dmSerifText.variable}`}>
      <body >
        <Navbar/>
        {children}
         <Analytics />
      </body>
    </html>
  );
}
