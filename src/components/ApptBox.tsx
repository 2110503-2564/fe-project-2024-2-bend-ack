'use client'
import dayjs,{Dayjs} from "dayjs"

export default function ApptBox({dent,appt}:{dent:DentistItem,appt:AppointmentItem}){
    return(
        <div className="bg-[#5188cc] rounded-lg w-[300px] h-[200px]">
            <h1 className="font-bold text-md ">Dentist: {dent.name}</h1>
            <div className="bg-white px-10 py-5 ">
                <h2 className="text-[#a3bbd1] font-semibold text-lg">Date: {dayjs(appt.apptDate).toString()}</h2>
                <button className="text-black z-10" >edit</button>
                <button>delete</button>
            </div>
        </div>
    )
}