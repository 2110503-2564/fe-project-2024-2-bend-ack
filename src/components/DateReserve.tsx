"use client";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { Dayjs } from "dayjs";
import { useRouter } from "next/navigation";

export default function DateReserve({
    onDateChange,
    makeBooking,
    // router
}: {
    onDateChange: Function;
    makeBooking: Function;
    // router: ReturnType<typeof useRouter>;
}) {
    const [bookDate, setBookDate] = useState<Dayjs | null>(null);

    return (
        <div className="flex flex-col ml-[3px] mt-2 pb-[10px] w-[600px] rounded-lg">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker 
                    className="bg-white rounded-md w-[300px]"
                    value={bookDate}
                    onChange={(value) => {
                        setBookDate(value);
                        onDateChange(value);
                    }}
                />
            </LocalizationProvider>
            <button
                name="Book"
                className="w-[30%] text-white rounded-md h-[30] text-xl mt-[50px] ml-0 bg-[#164485] hover:bg-white hover:text-[#164485]"
                onClick={()=>{makeBooking();}}
            >
                Book
            </button>
        </div>
    );
}
