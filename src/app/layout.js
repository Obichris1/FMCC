import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppIcon from "./components/WhatsappIcon";
import { CustomProvider } from "./configs/provider";
import { Comic_Neue,Poppins,Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"], // ✅ Add weights you plan to use
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
  title: "FMCC | Oil & Gas, EPC, Leasing, Contracting",
  description:
    "FMCC offers services in Oil and Gas, EPC and Engineering, Leasing, and General Contracting. Trusted by industries across Nigeria.",
  keywords:
    "services, oil and gas services, EPC engineering, leasing services, general contracting, Nigeria, industrial solutions, FMC Consulting",
  metadataBase: new URL("https://fmccng.com"),
  alternates: {
    canonical: "https://fmccng.com",
  },
  openGraph: {
    title: "FMCC | Oil & Gas, EPC, Leasing, Contracting",
    description:
      "We deliver integrated engineering, procurement, leasing, and general contracting services tailored to industrial and commercial sectors in Nigeria.",
    url: "https://fmccng.com",
    siteName: "FMC Consulting Group",
    images: [
      {
        url: "https://fmccng.com/og-images/fmc-main.jpg", // ✅ Ensure logo is clearly visible in this image
        width: 1200,
        height: 630,
        alt: "FMCC Consulting Group Services",
      },
    ],
    type: "website",
  },
  verification: {
    google: "qkj3Fz27k2E6KTx8a8MVCX0lYmgL9Y3-1FG9K68IzMY", // Replace if needed
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Add favicon and mobile touch icon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* You may also include a manifest.json for PWA-style branding if needed */}
      </head>
      <body className={`${roboto.variable} antialiased`}>
      
        {/* ✅ Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "FMCC",
              url: "https://fmccng.com",
              logo: "https://fmccng.com/logo.png", // ✅ Make sure this logo is PNG, transparent, and 112x112+
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
