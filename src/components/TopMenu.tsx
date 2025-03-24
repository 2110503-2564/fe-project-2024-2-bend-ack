import Image from 'next/image'
import TopMenuItem from './TopMenuItem'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions'
import Link from 'next/link'

export default async function TopMenu(){
    const session =await getServerSession(authOptions);
    return(
        <div className="h-[50px] bg-[#a3bbd1] fixed m-0 border-indigo-300 border-t border-b flex flex-row z-30 w-full top-0 left-0">
            <Image src='/img/logo.png' alt="logo" width={500} height={500} className="relative h-[100%] w-auto"/>
            <div className="flex items-center justify-items-center text-center ml-[20px]"><TopMenuItem reference='/booking' text="Book"/></div>
            <div className="w-[70px] flex items-center justify-items-center -ml-[15px]">
                <Link href='/mybooking' className="text-center text-[#5188cc] text-sm">Appointment</Link>
            </div>
            {
                session? 
                    <Link href="/api/auth/signout">
                        <div className="flex items-center absolute right-10 h-full px-5 text-[#0e2f5f] text-sm">
                            Sign-Out
                        </div>
                    </Link>
                :   <Link href="/api/auth/signin">
                        <div className="flex items-center absolute right-10 h-full pl-5 text-[#0e2f5f] text-sm">
                            Sign-In
                        </div>
                    </Link>

            }
            
        </div>
    )
}