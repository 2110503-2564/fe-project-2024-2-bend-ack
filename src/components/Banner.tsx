'use client'
import styles from './banner.module.css'
import Image from 'next/image'
import {useState } from 'react';
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react';

export default function Banner(){
    const [index, setIndex] = useState(0);
    const router=useRouter();
    const imgSrc=['/img/cover.jpg',
        '/img/cover2.jpg',
        '/img/cover3.jpg',
        '/img/cover4.jpg'
    ];
    const {data:session} =useSession();
    console.log(session?.user.token);
    return(
        <div className="relative flex justify-evenly pt-[50px] w-full h-[60vh] overflow-hidden"
        onClick={()=>{setIndex(index+1)}}>
            
            <Image src={imgSrc[index%4]}
            alt='supreme world for parties'
            fill={true}
            priority
            objectFit='cover'
            />
            <div className="text-white absolute inset-y-[40%] right-10 z-20 flex flex-col items-end">
                <h1 className='text-7xl text-[#3a577b] font-bold '>DENT</h1>
                <p className='text-3xl font-light'>The best dentist booking app</p>
            </div>
            <button className="z-20 bg-[#0e2f5f] p-2 rounded-xl absolute m-5 bottom-0 right-0 text-sm ring-2 ring-[#0e2f5f] text-white
            hover:bg-[#5188cc] hover:ring-[#0e2f5f]" onClick={(e)=>{  e.stopPropagation(); router.push('/dentist')}}>
                Book an appointment
            </button>
        </div>
        
    )
}