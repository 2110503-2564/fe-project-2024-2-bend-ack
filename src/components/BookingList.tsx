// 'use client'
import { useAppSelector } from "@/redux/store"
import { useDispatch} from "react-redux";
import { Appdispatch } from "@/redux/store";
import { removeBooking } from "@/redux/features/bookSlice";
import getAppointment from "@/libs/getAppointment";
import ApptBox from "./ApptBox";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function BookingList(){
    // const appt:AppointmentItem[]= useAppSelector((state)=>state.bookSlice.bookItems);
    // const dispatch= useDispatch<Appdispatch>();

    const session=await getServerSession(authOptions);
    const user=session?.user
    if(!session||!user) return <h1 className="mt-10 text-4xl text-">You need to view your appointment</h1>
    const appt:AppointmentItem[]=await getAppointment(user.token);
    
    return (
        <>
        <div className="mt-20 ml-10">
        {   appt.length>0 ?
                    appt.map((appmt:AppointmentItem)=>(
                        <ApptBox appt={appt}/>
                    ))
                :
                    <div className="m-10">
                        <div className="text-4xl font-medium text-[#4678b6] mb-5">You have no appointment</div>
                        <Link href='/dentist' className='p-2 underline text-2xl font-medium text-[#164485]'>make an appointment?</Link>   
                    </div>
                   
            }
        </div>
        </>
    )
}