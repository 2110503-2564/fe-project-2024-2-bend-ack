import InteractiveCard from "./InteractiveCard"
import Image from "next/image"
import Rating from "@mui/material/Rating";

export default function DentistCard(
    { dentName, imgSrc,rating, yearofExperience, areaofExpertise }: { dentName: string, imgSrc: string,rating?:number, yearofExperience:number, areaofExpertise: string}){
        // const [rating, setRating] = useState<number | null>(0);
    return(
        <InteractiveCard dentName={dentName}>
            <div className="flex-row">
                <Image
                    src={imgSrc}
                    alt={dentName}
                    width={5000} 
                    height={3000}
                    className="w-[96%] h-[60%] rounded-t-lg m-auto mt-2" 
                />

                <div className="inline text-left ml-10 text-black">
                    <div className="flex justify-between items-center">
                        <h2 className="ml-10 text-md font-bold ">{dentName}</h2>
                        <div className="absolute-right">
                            <div className="ml-10 mt-2 inline-block px-3 py-1 bg-[#0e2f5f] text-white text-sm font-semibold rounded-full mr-4">
                                specialized{areaofExpertise}
                            </div>
                        </div>
                        
                    </div>

                    <h2 className="ml-10 text-md font-bold">Years of Experience: {yearofExperience}</h2>
                </div>
                <div className="mt-2 flex justify-left">
                    <h2 className="ml-10 text-md font-bold">rating: </h2>
                    {
                        rating? 
                            <Rating value={rating} onClick={(e)=>{e.stopPropagation();e.preventDefault();}}>
                            </Rating>
                        :''
                    }
                    
                    
                </div>
            </div>
        </InteractiveCard>
    )
}