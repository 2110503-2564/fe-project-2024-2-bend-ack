'use client'
import { removeBooking } from "@/redux/features/bookSlice";

export default function ApptBox(appt: AppointmentItem ) {
    return (
        <div className="bg-[#5188cc] rounded-lg w-[80%] h-[20%] m-5">
            <h1 className="font-bold text-md text-[#e1edfc] ml-10">Dentist: {appt.dentist?.name || "Unknown"}</h1>
            <div className="relative flex flex-row justify-between items-center bg-white rounded-lg px-10 py-5 w-[90%]">
                <h2 className="text-[#a3bbd1] font-semibold text-lg ">
                    Date: {appt.apptDate}
                </h2>
                <div className="flex flex-row space-x-4 text-white font-semibold text-md z-10">
                    <button className="bg-[#4678b6] px-3 py-1 rounded">Edit</button>
                    <button className="bg-[#164485] px-3 py-1 rounded">Delete</button>
                </div>
            </div>

        </div>
    );
}
