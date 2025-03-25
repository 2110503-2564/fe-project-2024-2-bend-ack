import getAppointment from '@/libs/getAppointment';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import getDentist from '@/libs/getDentist'
import ApptBox from '@/components/ApptBox';
import getUserProfile from '@/libs/getUserProfile';

export default async function Appointment(){
    const session =await getServerSession(authOptions);
    if(!session) return <div className="mt-[70px] text-black">Please log in to access this page.</div>;
    const appt = await getAppointment(session.user.token);
    if(!appt) return <p className='mt-[70px] text-7xl text-black'>no appt</p>;
    
    const appointment:AppointmentItem[] = appt.data;
    console.log(appointment);
    //dentist
    // const dentist = await getDentist(appointment.dentist);
    // const dent:DentistItem = dentist.data;
    // const dent=appointment[18].dentist;
    // console.log("dent: ",dent);

    return(
        <main>
            <>
            {
                appointment.map((appt:AppointmentItem)=>(
                    <ApptBox appt={appt} dent={appt.dentist}/>
                ))
            }
            
            </>

        </main>
    )
}