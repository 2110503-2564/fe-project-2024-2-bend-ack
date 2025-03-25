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
import { useRouter } from "next/navigation";


export default  function Booking() {
    const router=useRouter();
    const session=useSession();
    const user=session?.data?.user;
    if(!session||!user) return <div className="mt-[70px] text-black">Please log in to access this page.</div>;
    
    const dispatch= useDispatch<Appdispatch>();
    const urlParams = useSearchParams()
    const dname = urlParams.get('name')
    const did = urlParams.get('id')
    // console.log(did);
    const [reserveDate,setReserveDate]=useState<Dayjs>();
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
    }, [did]);
   
    const makeBooking = () => {
        if (reserveDate && user && did && dentist) {
          console.log(dentist);
          const able: boolean = user.role === "admin" || appointmentItems.length <= 1;
          if (able) {
            const appt: AppointmentItem = {
              apptDate: reserveDate.toString(),
              user: user._id,
              dentist: dentist,
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
            <div className="flex flex-col ml-10 bg-[#5188cc] p-10 pt-[10px] pb-[20px] w-[500px] rounded-lg">
            <div className="ml-1 mt-5 mb-1   text-4xl text-white font-bold">Dentist Booking</div>
            <div className="w-[70%] bg-[#8eb4e3] rounded-full flex flex-row">
            <div className="mr-2"></div>
              <div className="ml-1 mt-3 mb-3 text-md text-[#0e2f5f] font-md">{dname}</div></div>
                        <DateReserve 
                            onDateChange={(value:Dayjs)=>{setReserveDate(value)}}
                            />
                        <button
                            name="Book"
                            className="w-[30%] text-white rounded-md h-[30] text-xl mt-[50px]  ml-0 bg-[#164485] hover:bg-white hover:text-[#164485]"
                            onClick={()=>{makeBooking();alert("Book an appointment successfully");router.push('/appointment')}}
                        >
                            Book
                        </button>
              </div>
              
        </BookingLayout>
    );
}
