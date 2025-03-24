import BookingLayout from "@/components/BookingLayout";
import DateReserve from "@/components/DateReserve";
// import { useSearchParams } from "next/navigation";
// import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch} from "react-redux";
import { Appdispatch } from "@/redux/store";
import { addBooking,removeBooking } from "@/redux/features/bookSlice";
import { useAppSelector } from "@/redux/store";
// import getUserProfile from "@/libs/getUserProfile";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/authOptions";

export default function Booking() {
    // const session =await getServerSession(authOptions);
    // if(!session||!session.user.token) return null;
    // const profile=await getUserProfile(session.user.token);
    // var createdAt = new Date(profile.data.createdAt);
    // console.log(profile);
    const dispatch= useDispatch<Appdispatch>();

    const bookings=useAppSelector((state)=>state.bookSlice.bookItems);
    // const reserveDate:Dayjs =bookings.apptdate? ;
    // const reserveDentist:string =? ;
    // const makeBooking= (()=>{
    //     if(reserveDate && reserveDentist){
            
            // const existingBooking = bookings.length;
            // if (existingBooking>0) {
            //     alert("You have already made an appointment.");
            //     return;
            // }
            //else
            // const booking:BookingItem={
            //     nameLastname: reserveName,
            //     tel: tel,
            //     venue: reserveLocation,
            //     bookDate: dayjs(reserveDate).format("MM/DD/YYYY"),
            // };
            // dispatch(addBooking(booking));
    //     }
    // });
    return (
        <BookingLayout>
            <div>
                {/* {profile ? 
                    <div className="absolute right-0 top-0 m-10 mt-[82px] text-sm">
                        <p>User {profile.data.name}</p>
                        <p>Email {profile.data.email}</p>
                        <p>Tel. {profile.data.tel}</p>
                        <p>Member Since {createdAt.toString()}</p>
                    </div>
                 :  Please Log-in to make an appointment    
                } */}


                <h2 className="text-xl text-white mt-20 ml-20 mb-5">Venue Booking</h2>
                <div className="flex flex-col ml-10 bg-white p-10 pt-[10px] pb-[20px] w-[600px] rounded-lg">
                    
                        {/* <DateReserve 
                            onDateChange={(value:Dayjs)=>{reserveDate=value}}
                            /> */}
                        <button
                            name="Book Venue"
                            className="w-[100px] rounded-md h-[30px] text-xs mt-[20px] ml-0 bg-amber-600 hover:bg-amber-800"
                            // onClick={()=>{makeBooking()}}
                        >
                            Book Venue
                        </button>
                </div>
            </div>
        </BookingLayout>
    );
}
