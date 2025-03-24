'use client'
import { useReducer } from "react";
// import Card from "./Card"
import DentistCard from "./DentistCard";
import Link from "next/link"

export default function CardPanel(){
    const compareReducer=(compareList:Map<string,number>,action:{type:string,cardName:string,rating?:number})=>{
        switch(action.type){
            case 'add':
                const newCompareList = new Map(compareList);
                if(action.rating!==undefined) 
                    newCompareList.set(action.cardName,action.rating)  ;
                return newCompareList;
            case 'remove':
                compareList.delete(action.cardName);
                return new Map(compareList);
            default:
                return compareList;
        }
    }
    const [compareList,onCompare]=useReducer(compareReducer,new Map<string,number>());
    const mockData=[{vid:'001', venueName:'The Bloom Pavilion', imgSrc:"/img/bloom.jpg"},
        {vid:'002', venueName:'Spark Space', imgSrc:"/img/sparkspace.jpg"},
        {vid:'003', venueName:'The Grand Table', imgSrc:"/img/grandtable.jpg"}
    ]

    return(
        <div>
            <div className="flex flex-row m-[20px] justify-evenly flex-wrap">
                {
                    mockData.map((venue)=>(
                        <Link href={`/venue/${venue.vid}`} className="w-[400px] h-[300px] m-10 mt-"  >
                            {/* <Card venueName={venue.venueName} 
                                imgSrc={venue.imgSrc }
                                onCompare={(venueName: string,newValue:number) => onCompare({ type: 'add', cardName: venueName ,rating:newValue })}
                            /> */}
                            <DentistCard dentName={venue.venueName} 
                                imgSrc={venue.imgSrc }
                                rating={4}
                                areaofExpertise="ll"
                                yearofExperience={4}
                            />
                        </Link>
                    ))
                }
            </div>
            <div className="box bg-amber-600 rounded-xl pl-10 pt-5 pb-5 ml-[100px] mb-10 w-[400px]">
                <div className="w-full text-xl text-white text-xl">Venue List with Ratings : {compareList.size}</div>
                {Array.from(compareList).map(
                ([venueName,rating])=>
                    <div key={venueName} className="text-white ml-[20px]" 
                    data-testid={venueName}
                    onClick={()=>onCompare({type:'remove',cardName:venueName})}>{venueName} : {rating}</div>
                )}
            </div>
            
        </div> 
    )
}