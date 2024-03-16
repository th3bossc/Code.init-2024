import type { Metadata } from "next";
import { Marck_Script, Playball, Inter } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });


const marckScript = Marck_Script({
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-marck-script'
});


const playBall = Playball({
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-playball'
});

const helveticaNowDisplay = localFont({
  display: 'swap',
  src: '../../public/HelveticaNowDisplay-Thin.ttf',
  variable: '--font-helvetica-now-display'
})

const helveticaNowDisplayItalic = localFont({
  display: 'swap',
  src: '../../public/HelveticaNowDisplay-ThinIta.ttf',
  variable: '--font-helvetica-now-display-italic'
})

const helveticaBold = localFont({
  display: 'swap',
  src: '../../public/Helvetica-Bold-Font.ttf',
  variable: '--font-helvetica-bold'
})



const NeueMontrealBold = localFont({
  display: 'swap',
  src: '../../public/NeueMontreal-Bold.otf',
  variable: '--font-neue-montreal-bold'
})

const NeueMontrealRegular = localFont({
  display: 'swap',
  src: '../../public/NeueMontreal-Regular.otf',
  variable: '--font-neue-montreal-regular'
})


export const metadata: Metadata = {
  title: "Vitalyze",
  description: "Convert your photos from black and white to coloruzied versions with realistic and aesthetically pleasing results.",
};


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className={`${inter.className} ${marckScript.variable} ${NeueMontrealRegular.variable} ${NeueMontrealBold.variable} ${helveticaNowDisplay.variable} ${playBall.variable}  ${helveticaBold.variable} ${helveticaNowDisplayItalic}`} >
          <div className="App">
            <HeroSection />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    );
  }


