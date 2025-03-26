
"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import updateAppointment from "@/libs/updateAppointment";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import getAppointment from "@/libs/getAppointment";
import deleteAppointment from "@/libs/deleteAppointment";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Rating } from "@mui/material";

export default function ApptBox(
    { appt }: 
    { appt: AppointmentItem }) {
    const router = useRouter();
    const session=useSession();
    const user=session.data?.user;
    const [isEditing, setIsEditing] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Dayjs|null>(dayjs(appt.apptDate));
    const [appointment, setAppointment] = useState(appt); 
    const token = user?.token
    const handleAction = async () => {
        await fetch("/appointment", { method: "POST" });
        router.refresh();
      };

    const handleDelete = async () => {
        if (!token) return alert("You need to log in!");

        if(appt._id){
        const success = await deleteAppointment(appt._id, token); 
        
        if (success) {
            alert("Appointment Deleted");
        } else {
            alert("Failed to delete appointment");
        }
    }
    };

    const handleUpdate = async () => {
        if (!token) return alert("you have to login to do this action");
        if (selectedDate===null) return alert("please pick a date");
        if(appt._id){
        const success = await updateAppointment(appt._id, dayjs(selectedDate).format("YYYY-MM-DD"), token);
        
        if (success) {
            alert("Appointment updated successfully!");
            setIsEditing(false);
        } else {
            alert("Failed to update appointment.");
        }}
    
    };

    return (
        <div className="bg-[#5188cc] rounded-xl w-[80%] h-auto m-5 px-4 py-3">
            <h1 className="font-semibold text-xl text-[#e1edfc] ml-10">
                Dentist: {appt.dentist?.name || "Unknown"}
            </h1>

            <div className="relative flex flex-row justify-between items-center bg-white rounded-full h-[20%] p-2 px-10 w-[90%]">
                {isEditing ? (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker onChange={(value) => setSelectedDate(value)}/>
                    </LocalizationProvider>
                ) : (
                    <h2 className="text-[#a3bbd1] font-semibold text-lg">
                        Date: {dayjs(appt.apptDate).format("YYYY/MM/DD")}
                    </h2>
                )}

                <div className="flex flex-row space-x-4 text-white font-semibold text-md z-10">
                    {isEditing ? (
                        <button
                            className="bg-[#3f979f] px-3 py-1 rounded-lg hover:bg-green-700"
                            onClick={(e)=>{handleUpdate();handleAction();}}
                        >
                            Save
                        </button>
                    ) : (
                        <button
                            className="bg-blue-700 px-3 py-1 rounded-lg hover:bg-blue-800"
                            onClick={(e) => setIsEditing(true)}
                        >
                            Edit
                        </button>
                    )}
                    <button
                        className="bg-[#164485] px-3 py-1 rounded-lg hover:bg-[#5188cc]"
                        onClick={()=>{handleDelete();handleAction();}}
                    >
                        Delete
                    </button>
                </div>
            </div>
            {
                appt.dentist?.id?
                <Link href = {`/rating/${appt.dentist.id}`} >
                    {/* <Image src='/img/' alt="star to rate" height={30} width={30}/> */}
                    <div className="ml-5 mt-3"><Rating name="rating" defaultValue={1} max={1} readOnly /></div>
                </Link>
                :null
            }
            
        </div>
    );
}
