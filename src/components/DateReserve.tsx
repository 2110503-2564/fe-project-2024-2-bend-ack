'use client'
import {DatePicker} from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import { useState } from "react"
import { TextField,Select,MenuItem } from "@mui/material"
import { Dayjs } from "dayjs"

export default function DateReserve(
    {onDateChange}:{onDateChange:Function}
    ){

    const [bookDate,setBookDate] = useState<Dayjs|null>(null);
    // const [reserveDentist,setReserveDentist] = useState<string>("Dodge");
    return(
        <div className="flex flex-col ml-[3px] mt-2 pb-[10px] w-[600px] rounded-lg">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker 
                    className="bg-white rounded-md w-[300px]"
                    value={bookDate}
                    onChange={(value)=>{setBookDate(value);onDateChange(value)}}
                    />
            </LocalizationProvider>
        </div>
        
    )
}