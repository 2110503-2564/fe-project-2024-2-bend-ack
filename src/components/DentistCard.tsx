'use client'
import InteractiveCard from "./InteractiveCard"
import Image from "next/image"
import Rating from "@mui/material/Rating";

export default function DentistCard(
    { dentName, imgSrc,rating, yearofExperience, areaofExpertise }: { dentName: string, imgSrc?: string,rating:number, yearofExperience:number, areaofExpertise: string}){
        // const [rating, setRating] = useState<number | null>(0);
    return(
        <InteractiveCard dentName={dentName}>
            <div className="flex-row space-around pb-5 w-full">
                <Image
                    // src={imgSrc}
                    src='/img/cover.jpg'
                    alt={dentName}
                    width={5000} 
                    height={3000}
                    className="w-[96%] h-[60%] rounded-t-lg mx-auto mt-2" 

                 
                />
                <div className="inline text-left ml-10 mt-0 text-black ">
                    <div className="flex justify-between items-center ">
                        <h1 className="ml-10 text-xl font-bold ">{dentName}</h1>
                        <div className="absolute-right">
                            <div className="ml-10 mt-2 inline-block px-3 py-1 bg-[#0e2f5f] text-white text-sm font-semibold rounded-full mr-4">
                                {areaofExpertise}
                            </div>
                        </div>
                        
                    </div>

                    <h2 className="ml-10 text-md font-bold">Years of Experience: {yearofExperience}</h2>
                </div>
                <div className="mt-0 flex justify-left ml-10">
                    { 
                        rating!==0? 
                            <div className="mt-0 text-md font-semibold text-black pt-0 flex flex-row">
                                <div>Rating : </div>
                                <Rating value={rating} onClick={(e)=>{e.stopPropagation();e.preventDefault();}} className="py-0" readOnly />
                                </div>
                            
                            
                        :''
                    }
                    
                    
                </div>
            </div>
        </InteractiveCard>
    )
}