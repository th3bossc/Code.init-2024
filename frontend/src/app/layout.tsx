import type { Metadata } from "next";
import { Marck_Script, Playball, Inter } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";


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
    src: '../../public/HelveticaNowDisplay-ThinIta.ttf',
    variable: '--font-helvetica-now-display'
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
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${marckScript.variable} ${NeueMontrealRegular.variable} ${NeueMontrealBold.variable} ${helveticaNowDisplay.variable} ${playBall.variable}`}>{children}</body>
    </html>
  );
}


