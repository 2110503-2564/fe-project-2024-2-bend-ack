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
            {
                session?.user?.name?
                    <div className="absolute right-0 top-0 mt-20 mr-5 z-30 text-amber-800 text-2xl font-bold">
                        Welcome {session.user.name}
                    </div>
                : null
            }
            <Image src={imgSrc[index%4]}
            alt='supreme world for parties'
            fill={true}
            priority
            objectFit='cover'
            />
            <div className="text-white relative z-20 text-center mt-20 text-orange-200">
                <h1 className='text-7xl m-10'>where every event finds its venue</h1>
                <p className='text-3xl'>Absolute cinema. This website is so cool.</p>
            </div>
            <button className="z-20 bg-amber-800 p-2 rounded-xl absolute m-5 bottom-0 right-0 text-sm ring-1 ring-amber-900 text-amber-100
            hover:bg-orange-300 hover:ring-amber-100" onClick={(e)=>{  e.stopPropagation(); router.push('/venue')}}>
                Select Venue
            </button>
        </div>
        
    )
}