import Image from 'next/image'
import TopMenuItem from './TopMenuItem'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions'
import Link from 'next/link'

export default async function TopMenu(){
    const session =await getServerSession(authOptions);
    return(
        <div className="h-[50px] bg-indigo-200 fixed m-0 border-indigo-300 border-t border-b flex flex-row-reverse z-30 w-full top-0 left-0">
            <Image src='/img/logo.png' alt="logo" width={500} height={500} className="relative h-[100%] w-auto"/>
            <TopMenuItem reference='/booking' text="Booking" />
            {
                session? 
                    <Link href="/api/auth/signout">
                        <div className="flex items-center absolute left-0 h-full px-5 text-orange-700 text-sm">
                            Sign-Out
                        </div>
                    </Link>
                :   <Link href="/api/auth/signin">
                        <div className="flex items-center absolute left-0 h-full pl-5 text-orange-700 text-sm">
                            Sign-In
                        </div>
                    </Link>

            }
            <div className="w-[65px] flex items-center justify-items-center">
                <Link href='/mybooking' className="absolute left-0 ml-[100px] text-center text-orange-700 text-sm">My Booking</Link>
            </div>
        </div>
    )
}