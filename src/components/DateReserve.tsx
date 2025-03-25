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
        // <div  className="flex flex-col w-[300px] h-[70px] bg-white-100">
        //     <TextField
        //         variant="standard"
        //         name="Dentist Name"
        //         label="Dentist Name"
        //         value={reserveName}
        //         // onChange={(e)=>{setReserveName(e.target.value);onNameChange(e.target.value)}}
        //         className="w-[200px] h-[60px] mt-0 ml-[10px]"
        //     />
            /* <TextField
                variant="standard"
                name="Contact-Number"
                label="Contact-Number"
                value={tel}
                // onChange={(e)=>{setTel(e.target.value);onTelChange(e.target.value)}}
                className="w-[200px] h-[60px] ml-[10px]"
            /> */
            /* <Select
                variant="standard"
                id="venue"
                value={reserveLocation}
                className="h-[2em] w-[200px] ml-[10px] mb-[20px] mt-[7px]"
                onChange={(e)=>{setReserveLocation(e.target.value);onLocationChange(e.target.value)}}
            >
                <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                <MenuItem value="Spark">Spark Space</MenuItem>
                <MenuItem value="GrandTable">The Grand Table</MenuItem>
            </Select> */
            <div className="flex flex-col ml-[3px] my-5 p-0 pt-[10px] mt- pb-[10px] w-[600px] rounded-lg">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker 
                        className="bg-white rounded-md w-[300px]"
                        value={bookDate}
                        onChange={(value)=>{setBookDate(value);onDateChange(value)}}
                        />
                </LocalizationProvider>
            </div>
        // </div>
    )
}