import getDentist from "@/libs/getDentist";
import Image from "next/image"
import { Rating } from "@mui/material";
import Link from "next/link";

export default async function DentistDetailPage({params}: {params:{did:string}}){
    const dentistDetail = await getDentist(params.did);
    console.log(dentistDetail);
    const dentist:DentistItem=dentistDetail.data;
    return (
        <main>
{/* 
            <div className="flex flex-row my-5">
                <div className="w-[30%]">
                    <Image src={dentistDetail.data.picture}
                    alt='Dentist Image' width={0} height={0} sizes="100vw"
                    className="rounded-lg"/>
                </div>
                <div className="text-md mx-5">Years of Experience: {dentistDetail.data.yearofExperience}
                <div>Area of Expertise : {dentistDetail.data.areaofExpertise}</div>
                <div>Rating : {dentistDetail.data.rating}</div>
*/}
            <div className="flex flex-row items-start mx-auto mt-[70px] my-5 bg-white rounded-xl text-black w-[90%]">
                <div className="m-2 w-[40%]">
                    <Image src='/img/cover2.jpg'
                        alt='Dentist Image' width={0} height={0} sizes="100vw"
                        className="rounded-lg w-[100%]"/>
                    <div className="font-bold mt-5 text-xl">Dentist Name: {dentist.name} </div>

                </div>
                
                <div className="text-2xl ml-10 mt-5 items-start">
                    <p >Years of Experience: {dentist.yearsofexperience} </p>
                    <p className="mt-5">Area of Expertise : {dentist.areaofexpertise}</p>
                    
                        <div className="mt-5">Rating : <Rating name="read-only" value={dentist.ratings} readOnly /></div>

                        <Link href={`/booking?id=${params.did}`}>
                        <button className="block rounded-md bg-[#0e2f5f] hover:bg-[#c5d9f3] px-3 py-1 text-white shadow-sm">
                            Make Appointment
                        </button>
                        </Link>
                </div>
                    
                    
            </div>
        </main>
    )
}