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
import TextField from '@mui/material/TextField';
// import getUserProfile from "@/libs/getUserProfile";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/authOptions";

export default  function Booking() {
    // const session =await getServerSession(authOptions);
    // if(!session||!session.user.token) return null;
    // const profile=await getUserProfile(session.user.token);
    // var createdAt = new Date(profile.data.createdAt);
    // console.log(profile);
    const urlParams = useSearchParams()
    const did = urlParams.get('id')
    const dispatch= useDispatch<Appdispatch>();

    
    const [bookDate,setBookDate]=useState<Dayjs|null>(null);
    // const [reserveLocation,setReserveLocation]=useState<string>("Bloom");
    const [bookName,setBookName] = useState<string|null>(null);
    //const [tel,setTel] = useState<string|null>(null);
    // const dentItems= useAppSelector((state)=>state.bookSlice.dentistItems)
    // const makeBooking= (()=>{
    //     if(bookDate && bookName && did){
    //         //delete old one (if exist)
    //         const existingBooking = dentItems.find(
    //             (item: BookingItem) =>
    //                 item.nameLastname === reserveName &&
    //                 item.venue === reserveLocation &&
    //                 item.bookDate === dayjs(reserveDate).format("MM/DD/YYYY")
    //         );
    //         if (existingBooking) {
    //             dispatch(removeBooking(existingBooking));
    //         }

    //         const booking:BookingItem={
    //             nameLastname: reserveName,
    //             tel: tel,
    //             venue: reserveLocation,
    //             bookDate: dayjs(reserveDate).format("MM/DD/YYYY"),
    //         };
    //         dispatch(addBooking(booking));
    //     }
    // });

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBookName(e.target.value);
    }
    return (
        <BookingLayout>

                {/* {profile ? 
                    <div className="absolute right-0 top-0 m-10 mt-[82px] text-sm">
                        <p>User {profile.data.name}</p>
                        <p>Email {profile.data.email}</p>
                        <p>Tel. {profile.data.tel}</p>
                        <p>Member Since {createdAt.toString()}</p>
                    </div>
                 :  null
                } */}


                
                <div className="flex flex-col ml-10 bg-[#5188cc] p-10 pt-[10px] pb-[20px] w-[600px] rounded-lg">
                    <div className="ml-0 mt-5 text-xl text-white">Dentist Booking</div>
                        <DateReserve 
                            onDateChange={(value:Dayjs)=>{setBookDate(value)}}
                            // onLocationChange={(value:string)=>{setReserveLocation(value)}}
                            // onNameChange={(value:string)=>{setReserveName(value)}}
                            // onTelChange={(value:string)=>{setTel(value)}}
                            />
                        <div className="w-[60%] bg-white rounded-full flex flex-row">
                        <div className="mr-5"></div>
                        <TextField name="Name-Lastname" id="standard-name" label="Name-Lastname" variant="standard" value={name}
                        onChange={handleNameChange} /></div>
                        <button
                            name="Book"
                            className="w-[100px] text-white rounded-md h-[30px] text-xl mt-[50px]  ml-0 bg-[#164485] hover:bg-white hover:text-[#164485]"
                            // onClick={()=>{makeBooking()}}
                        >
                            Book
                        </button>
                </div>

        </BookingLayout>
    );
}
