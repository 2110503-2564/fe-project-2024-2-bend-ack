import Link from 'next/link';

export default function TopMenuItem({text,reference}:{text:string,reference:string}){
    return(
        <div className="w-[70px] flex items-center justify-items-center">
            <Link href={reference} className="text-center text-[#0e2f5f] text-sm">{text}</Link>
        </div>
        
    )
}