"use client";
import BookingLayout from "@/components/BookingLayout";
import DateReserve from "@/components/DateReserve";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch} from "react-redux";
import { Appdispatch } from "@/redux/store";
import { addBooking,removeBooking } from "@/redux/features/bookSlice";
import { useAppSelector } from "@/redux/store";
import { useSession } from "next-auth/react";
import getDentist from "@/libs/getDentist";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default  function Booking() {
    const router=useRouter();
    const session=useSession();
    const user=session?.data?.user;
    if(!session||!user) return <div className="mt-[70px] text-black">Please log in to access this page.</div>;
    
    const dispatch= useDispatch<Appdispatch>();
    const urlParams = useSearchParams()
    const did = urlParams.get('id')
    // console.log(did);
    const [reserveDate,setReserveDate]=useState<Dayjs|null>(null);
    const [dentist,setDentist]=useState<DentistItem>();
    const appointmentItems = useAppSelector((state)=>state.bookSlice.bookItems)
    useEffect(()=>{
            async function getdata(){
                if(!did) return null
                const dentistData= await getDentist(did);
                console.log(dentistData)
                setDentist(dentistData);
            }
            getdata();
    });
   
    const makeBooking = () => {
        if (reserveDate && user && did && dentist) {
          const able: boolean = user.role === "admin" || appointmentItems.length <= 1;
          if (able) {
            const appt: AppointmentItem = {
              apptDate: reserveDate.toString(),
              user: user._id,
              dentist: dentist, // Now guaranteed to be defined
            };
            dispatch(addBooking(appt));
          }
          else{
            alert("Please fill all information")
          }
        }
      };
      
    return (
        <BookingLayout>
            <div>
                <h2 className="text-xl text-white mt-20 ml-20 mb-5">Dentist Booking</h2>
                <div className="flex flex-col ml-10 bg-white p-10 pt-[10px] pb-[20px] w-[600px] rounded-lg">
                    
                        <DateReserve 
                            onDateChange={(value:Dayjs)=>{setReserveDate(value)}}
                            />
                        <button
                            name="Book"
                            className="w-[100px] rounded-md h-[30px] text-xs mt-[20px] ml-0 bg-amber-600 hover:bg-amber-800"
                            onClick={()=>{makeBooking();alert("Book an appointment successfully");router.push('/appointment')}}
                        >
                            Book Venue
                        </button>
                </div>
            </div>
        </BookingLayout>
    );
}
