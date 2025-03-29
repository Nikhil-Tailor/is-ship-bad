import type { Metadata } from "next";
import {DM_Sans, Epilogue} from "next/font/google";
import "./globals.css";

const geistSans = Epilogue({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "is ship bad?",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
