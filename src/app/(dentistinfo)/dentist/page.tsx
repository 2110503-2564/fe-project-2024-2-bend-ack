import getDentists from "@/libs/getDentists";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import DentistCatalog from "@/components/DentistCatalog";

export default async function Dentist(){
    const dentists=await getDentists();
    const dentAmount=dentists.count;
    // const dentAmount=1;
    return(
        <main>
            <div className="mt-[60px] w-full h-[170px] bg-[#8eb4e3] text-center px-10 pt-5">
                <h1 className="text-6xl font-medium text-[#3a577b] pt-7 pl-5">Meet {dentAmount} dentists available</h1>
            </div>
            <div className="mt-20 my-10">
            <Suspense fallback={
                <p className="w-[95%] mx-auto">
                    <LinearProgress />
                </p>}>
                <DentistCatalog dentistJson={dentists} ></DentistCatalog>
            </Suspense>
            </div>
        </main>
    )
}