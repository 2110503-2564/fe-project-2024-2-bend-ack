import InteractiveCard from "./InteractiveCard"
import Image from "next/image"
import Rating from "@mui/material/Rating";

export default function DentistCard(
    { dentName, imgSrc,rating}: { dentName: string, imgSrc: string,rating?:number}){
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

                <div className="inline text-left ">
                    <h2 className="ml-10 text-md font-bold text-amber-700">{dentName}</h2>
                </div>
                <div className="mt-2 flex justify-center">
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