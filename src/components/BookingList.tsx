'use client'
import { useAppSelector } from "@/redux/store"
import { useDispatch} from "react-redux";
import { Appdispatch } from "@/redux/store";
import { removeBooking } from "@/redux/features/bookSlice";
import ApptBox from "./ApptBox";
import Link from "next/link";

export default function BookingList(){
    const appt:AppointmentItem[]= useAppSelector((state)=>state.bookSlice.bookItems);
    const dispatch= useDispatch<Appdispatch>();
    return (
        <>
        <div className="mt-20 ml-10">
        {   appt.length>0 ?
                    appt.map((appmt:AppointmentItem)=>(
                        <ApptBox appt={appmt} dent={appmt.dentist}/>
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