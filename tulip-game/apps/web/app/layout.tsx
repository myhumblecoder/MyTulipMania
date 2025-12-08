import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "My Tulip Greenhouse",
  description: "Grow rare tulips, one bloom at a time",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          html, body { width: 100%; height: 100%; overflow: hidden; background: #1a1a1a; }
          @media screen and (orientation: portrait) {
            body::before {
              content: "Please rotate your device";
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background: rgba(0,0,0,0.9);
              color: white;
              padding: 2rem;
              border-radius: 1rem;
              font-size: 1.5rem;
              text-align: center;
              z-index: 9999;
            }
          }
        `}</style>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} m-0 p-0 overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
