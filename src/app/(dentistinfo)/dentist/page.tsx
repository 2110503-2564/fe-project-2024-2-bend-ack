import getDentists from "@/libs/getDentists";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default function Dentist(){
    // const dentists=getDentists();
    // const dentAmount=dentists.count;
    const dentAmount=1;
    return(
        <main>
            <div className="absolute left-0 top-0 mt-[60px] w-full h-20 bg-[#8eb4e3] justify-items-start px-10 py-5">
                <h1 className="text-4xl font-medium m-auto text-[#3a577b]">Meet {dentAmount} dentists available</h1>
                
            </div>
            <Suspense fallback={
                    <p className="mt-20 w-[95%] mx-auto">
                        <LinearProgress />
                    </p>}>
                    
                    {/* <DentistCatalog dentists=dentists/> */}
                </Suspense>
        </main>
    )
}