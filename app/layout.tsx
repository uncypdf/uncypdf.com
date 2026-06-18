import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://uncypdf.com"),
  title: "uncy.pdf | hardwood furniture, woodworking",
  description: "hardwood furniture, woodworking",
  openGraph: {
    title: "uncy.pdf | hardwood furniture, woodworking",
    description: "hardwood furniture, woodworking",
    url: "https://uncypdf.com",
    siteName: "uncy.pdf",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "uncy.pdf",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "uncy.pdf | hardwood furniture, woodworking",
    description: "hardwood furniture, woodworking",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
      <body>{children}</body>
    </html>
  );
}