import BookingLayout from "@/components/BookingLayout";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import NextAuthProvider from "@/providers/NextAuthProvider";
import getUserProfile from "@/libs/getUserProfile";

export default async function Layout({ children }: { children: React.ReactNode }) {
    const session=await getServerSession(authOptions);
    if(!session) return null;
    return (
        <NextAuthProvider session={session} >
            <BookingLayout>
                {children}
            </BookingLayout>
        </NextAuthProvider>
)}
