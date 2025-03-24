import BookingLayout from "@/components/BookingLayout";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/authOptions";
// import NextAuthProvider from "@/providers/NextAuthProvider";
// import getUserProfile from "@/libs/getUserProfile";

export default function Layout({ children }: { children: React.ReactNode }) {
    // const session=await getServerSession(authOptions);
    // if(!session) return null;
    // const profile=await getUserProfile(session.user.token);
    return (
        // <NextAuthProvider session={session} >
            <BookingLayout>
                {children}
            </BookingLayout>
        // </NextAuthProvider>
)}
