import getAppointment from '@/libs/getAppointment';
import getUserProfile from '@/libs/getUserProfile';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import getDentist from '@/libs/getDentist'
import dayjs,{Dayjs} from 'dayjs'

export default async function Appointment(){
    const session =await getServerSession(authOptions);
    if(!session) return <div className="mt-[70px] text-black">Please log in to access this page.</div>;
    const profile = await getUserProfile(session.user.token)
    if(!profile) return <div className="mt-[70px] text-black">shi te ru</div>;
    console.log(profile);
    const appt=await getAppointment(profile.data.token);
    if(!appt) return null;
    const appointment:AppointmentItem=appt.data;
    console.log(appointment);
    
    const dent:DentistJson=await getDentist(appointment.dentist);
    if(!appointment||!dent) return null;
    const dentist:DentistItem=dent.data[0];
    
    return(
        <main>
            <div className="bg-[#5188cc] rounded-lg w-[300px] h-[200px]">
                <h1 className="font-bold text-md ">Dentist: {dentist.name}</h1>
                <div className="bg-white px-10 py-5 ">
                    <h2 className="text-[#a3bbd1] font-semibold text-lg">Date: {dayjs(appointment.apptDate).toString()}</h2>
                    <button>edit</button>
                    <button>delete</button>
                </div>
            </div>
        </main>
    )
}