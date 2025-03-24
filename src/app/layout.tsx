// 'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopMenu from "@/components/TopMenu";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import NextAuthProvider from "@/providers/NextAuthProvider";
import ReduxProvider from "@/redux/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Venue Booking App",
  description: "venue Booking App",
};

export default async function RootLayout({children}: {children: React.ReactNode}) 
{
  const session=await getServerSession(authOptions);
  // console.log(session);
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <NextAuthProvider session={session}>
            <TopMenu/>
                {children}
          </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}