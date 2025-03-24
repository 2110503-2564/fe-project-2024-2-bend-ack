import getDentist from "@/libs/getDentist";
import Image from "next/image"

export default async function DentistDetailPage({params}: {params:{vid:string}}){
    const dentistDetail = await getDentist(params.vid)

    return (
        <main>
            <div className="flex flex-row my-5">
                <div className="w-[30%]">
                    <Image src={dentistDetail.data.picture}
                    alt='Dentist Image' width={0} height={0} sizes="100vw"
                    className="rounded-lg"/>
                </div>
                <div className="text-md mx-5">Years of Experience: {dentistDetail.data.yearofExperience}
                <div>Area of Expertise : {dentistDetail.data.areaofExpertise}</div>
                <div>Rating : {dentistDetail.data.rating}</div>
                </div>
            </div>
        </main>
    )
}