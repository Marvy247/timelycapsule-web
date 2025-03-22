import type { Metadata } from "next";
import { Manrope, Space_Mono } from "next/font/google";
import Head from "next/head"; // Import Head for adding elements to the head
import "./globals.css";
import RichTextField from "./components/RichTextField";
import SessionProvider from "./providers/SessionProvider";
import { QueryProvider } from "./_providers/QueryProvider";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const space_Mono = Space_Mono({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "TimelyCapsule",
  description: "Unleash the power of timed messaging.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className={`${manrope.variable} ${space_Mono.variable} antialiased`}
      >
        <SessionProvider>
          <QueryProvider>
            <RichTextField />
            {children}
          </QueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
