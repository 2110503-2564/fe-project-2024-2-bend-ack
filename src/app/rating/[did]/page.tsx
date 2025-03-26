import getDentist from "@/libs/getDentist";
import Image from "next/image"
import RatingBar from "@/components/ratingBar";
import Link from "next/link";
import createRating from "@/libs/createRating";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function RatingPage({params}: {params:{did:string}}){
    const session =await getServerSession(authOptions);
    if(!session) return <div className="mt-[70px] text-black">Please log in to access this page</div>;
    const did=params.did;
    const user=session.user;
    const dentistDetail = await getDentist(params.did);
    //console.log(dentistDetail);
    const dentist:DentistItem=dentistDetail.data;
    const makeRating=async (value:number)=>{
        const res=await createRating({
            did:did,
            rating:value,
            token:user.token,
            uid:user._id
        });
    }
    return (
        <main>
            <div className="flex flex-row items-start p-5 mx-auto mt-[70px] my-5 bg-white rounded-xl text-black w-[90%] h-[60%]">
                <div className="m-2 w-[40%] h-full">
                    <Image src='/img/dentist.png'
                        alt='Dentist Image' width={0} height={0} sizes="100vw"
                        className="rounded-lg w-[100%] h-[100%]"/>
                </div>
                <div className="text-2xl ml-10 mt-5 items-start w-[60%] h-full">
                    <p className="text-3xl font-bold"> {dentist.name} </p>
                    <p className="mt-3">Current Rating: {dentist.ratings}</p>
                    <p className="mt-3">Review: {dentist.reviewcounts}</p>
                        <RatingBar did={did} token={user.token} uid={user._id} />
                        
                </div>       
            </div>
        </main>
    )
}