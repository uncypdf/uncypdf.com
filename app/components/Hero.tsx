import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://uncypdf.com"),
  title: "uncy.pdf",
  description: "unnecessary product design format",
  openGraph: {
    title: "uncy.pdf",
    description: "unnecessary product design format",
    url: "https://uncypdf.com",
    siteName: "uncy.pdf",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "uncy.pdf",
    description: "unnecessary product design format",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8DJDK2WBSR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8DJDK2WBSR');
          `}
        </Script>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}