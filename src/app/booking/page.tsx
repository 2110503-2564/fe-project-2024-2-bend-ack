"use client";
import BookingLayout from "@/components/BookingLayout";
import DateReserve from "@/components/DateReserve";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Dayjs } from "dayjs";
import { useSession } from "next-auth/react";
import getDentist from "@/libs/getDentist";
import getAppointment from "@/libs/getAppointment";
import createAppointment from "@/libs/createAppointment";

export default function Booking() {
  const session = useSession();
  const user = session?.data?.user;

  if (!session || !user)
    return <div className="mt-[70px] text-black">Please log in to access this page.</div>;

  const urlParams = useSearchParams();
  const did: string | null = urlParams.get("id");
  
  const [reserveDate, setReserveDate] = useState<Dayjs>();
  const [appt, setAppt] = useState<number>(0);
  const [dentist, setDentist] = useState<DentistItem>();

  /** Fetch appointments count */
  const fetchAppointment = async (token: string) => {
    try {
      let apptData: AppointmentJson = await getAppointment(token);
      setAppt(apptData.count);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  /** Fetch dentist details */
  const fetchDentist = async (did: string) => {
    try {
      let dentistData: oneDentistJson = await getDentist(did);
      setDentist(dentistData.data);
    } catch (error) {
      console.error("Error fetching dentist:", error);
    }
  };

  /** Fetch data on component mount */
  useEffect(() => {
    if (did) fetchDentist(did);
    if (user) fetchAppointment(user.token);
  }, [did, user]);

  const makeAppt = async (dent: string, day: Dayjs, uid: string, token: string) => {
    try {
      let res = await createAppointment({
        did: dent,
        user: uid,
        apptDate: day,
        token: token,
      });

      if (res) {
        alert("Appointment made successfully");
        fetchAppointment(token); // Refresh appointment count
      }
    } catch (error) {
      console.error("Error creating appointment:", error);
    }
  };

  const makeBooking = () => {
    if (reserveDate && user && did && dentist) {
      const able: boolean = user.role === "admin" || appt <= 1;
      console.log(appt);

      if (able) {
        makeAppt(dentist._id, reserveDate, user._id, user.token);
      } else {
        alert("You cannot make more appointments");
      }
    } else {
      alert("Please fill the appointment information");
    }
  };

  return (
    <BookingLayout>
      <div className="flex flex-col ml-10 bg-[#5188cc] p-10 pt-[10px] pb-[20px] w-[500px] rounded-lg">
        <div className="ml-1 mt-5 mb-1 text-4xl text-white font-bold">Dentist Booking</div>
        <div className="w-[70%] bg-[#8eb4e3] rounded-full flex flex-row">
          <div className="mr-2"></div>
          <div className="ml-1 mt-3 mb-3 text-md text-[#0e2f5f] font-md">{dentist?.name}</div>
        </div>
        <DateReserve onDateChange={(value: Dayjs) => setReserveDate(value)} makeBooking={makeBooking} />
      </div>
    </BookingLayout>
  );
}
