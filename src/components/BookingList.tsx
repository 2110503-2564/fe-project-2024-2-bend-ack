import getAppointment from "@/libs/getAppointment";
import ApptBox from "./ApptBox";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function BookingList() {
    const session = await getServerSession(authOptions);
    if (!session) {
        return (
            <div className="mt-20 ml-10 text-2xl font-medium text-red-500">
                Please log in to view your appointments.
            </div>
        );
    }
    let appt = await getAppointment(session.user.token);
    let appointment = appt?.data || [];

    return (
        <div className="mt-20 ml-10">
            {appointment.length > 0 ? (
                appointment.map((appmt:AppointmentItem) => <ApptBox key={appmt._id} appt={appmt} />)
            ) : (
                <div className="m-10">
                    <div className="text-4xl font-medium text-[#4678b6] mb-5">
                        You have no appointments
                    </div>
                    <Link href="/dentist" className="p-2 underline text-2xl font-medium text-[#164485]">
                        Make an appointment?
                    </Link>
                </div>
            )}
        </div>
    );
}
