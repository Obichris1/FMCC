import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppIcon from "./components/WhatsappIcon";
import { CustomProvider } from "./configs/provider";
import { Comic_Neue } from "next/font/google";

const comicNeue = Comic_Neue({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-comic-neue",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ SEO Metadata for FMC Consulting Group
export const metadata = {
  title: "FMC Consulting Group | Oil & Gas, EPC, Leasing, Contracting",
  description:
    "FMC Consulting Group offers services in Oil and Gas, EPC and Engineering, Leasing, and General Contracting. Trusted by industries across Nigeria.",
  keywords:
    "oil and gas services, EPC engineering, leasing services, general contracting, Nigeria, industrial solutions, FMC Consulting",
  openGraph: {
    title: "FMC Consulting Group | Oil & Gas, EPC, Leasing, Contracting",
    description:
      "We deliver integrated engineering, procurement, leasing, and general contracting services tailored to industrial and commercial sectors in Nigeria.",
    url: "https://fmccng.com",
    siteName: "FMC Consulting Group",
    images: [
      {
        url: "https://fmccng.com/og-images/fmc-main.jpg",
        width: 1200,
        height: 630,
        alt: "FMC Consulting Group Services",
      },
    ],
    type: "website",
  },
  metadataBase: new URL("https://fmccng.com"),
  alternates: {
    canonical: "https://fmccng.com",
  },
  verification: {
    google: "qkj3Fz27k2E6KTx8a8MVCX0lYmgL9Y3-1FG9K68IzMY", // Replace this
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${comicNeue.variable} font-comic antialiased`}
      >
        {/* ✅ Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "FMCC Consulting Group",
              url: "https://fmccng.com",
              logo: "https://fmccng.com/logo.png",
              description:
                "We provide expert services in oil and gas, EPC, leasing, and general contracting.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lagos",
                addressCountry: "Nigeria",
              },
            }),
          }}
        />
        <CustomProvider>
          <Header />
          {children}
          <WhatsAppIcon />
          <Footer />
        </CustomProvider>
      </body>
    </html>
  );
}
