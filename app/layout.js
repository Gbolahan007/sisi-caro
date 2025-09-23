import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";
import ReactQueryProvider from "./contexts/ReactQueryProvider";
import { Montserrat } from "next/font/google";
import SEO from "./components/Home/SEO";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const monst = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
});

// ✅ Metadata for SEO + Social sharing
export const metadata = {
  title: "Sisi Caro Digital Marketing | Expert Digital Marketing Agency",
  description:
    "Transform your business with expert digital marketing services. We specialize in SEO, social media marketing, PPC advertising, content marketing, and brand strategy to drive growth and maximize ROI.",
  keywords:
    "digital marketing, SEO services, social media marketing, PPC advertising, content marketing, brand strategy, online marketing agency, digital transformation, lead generation, conversion optimization",
  authors: [{ name: "Sisi Caro Digital Marketing Team" }],
  openGraph: {
    title:
      "Sisi Caro Digital Marketing | Drive Growth Through Digital Excellence",
    description:
      "Expert digital marketing solutions that deliver measurable results. From SEO to social media, we help businesses thrive in the digital landscape.",
    url: "https://sisicaro.com",
    siteName: "Sisi Caro Digital Marketing",
    type: "website",
    images: [
      {
        url: "/sis-carooo.png",
        width: 1200,
        height: 630,
        alt: "Sisi Caro Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sisi Caro Digital Marketing | Expert Agency",
    description:
      "Transform your business with SEO, social media, PPC, and brand growth strategies.",
    images: ["/sis-carooo.png"],
  },
  alternates: {
    canonical: "https://sisicaro.com",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          <div className={`${monst.className} overflow-x-hidden`}>
            <Header />
            <Toaster
              position="top-center"
              containerStyle={{
                left: 16,
                right: 16,
              }}
              toastOptions={{
                style: {
                  maxWidth: "calc(100vw - 32px)",
                  wordBreak: "break-word",
                },
              }}
            />
            <SEO />
            {children}
            <Footer />
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
