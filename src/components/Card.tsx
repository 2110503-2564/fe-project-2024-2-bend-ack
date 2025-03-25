// 'use client'
// import Image from 'next/image';
// import InteractiveCard from './InteractiveCard';
// import Rating from "@mui/material/Rating";
// import { useState } from 'react';

// export default function Card({ venueName, imgSrc ,onCompare}: { venueName: string, imgSrc: string ,onCompare?:Function}) {
//     const Ratingname=venueName+' Rating';
//     const [rating, setRating] = useState<number | null>(0);
//     return (
//         <InteractiveCard dentName={venueName}>
//             <Image
//                 src={imgSrc}
//                 alt={venueName}
//                 width={500} 
//                 height={300}
//                 className="w-screen h-auto object-cover rounded-t-lg" 
//             />
//             <div className="text-purple text-center mt-5">
//                 <h2 className="text-2xl text-amber-700">{venueName}</h2>
//             </div>
//             <div className="mt-10 flex justify-center">
//                 {
//                    onCompare? <Rating id={Ratingname} name={Ratingname} data-testid={Ratingname} value={rating} 
//                 onChange={(e, newValue) => {setRating(newValue);onCompare(venueName,newValue)}}
//                 onClick={(e)=>{e.stopPropagation();}}></Rating>:''
//                 }
                
                
//             </div>
//         </InteractiveCard>
//     );
// }
