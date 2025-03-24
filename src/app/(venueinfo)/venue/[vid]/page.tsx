import getVenue from '@/libs/getVenue'
import Image from 'next/image'

export default async function VenueDetail({params}:{params:{vid:string}}){
//     const mockData=new Map();
//     mockData.set('001',{venueName:'The Bloom Pavilion', imgSrc:"/img/bloom.jpg"});
//     mockData.set('002',{venueName:'Spark Space', imgSrc:"/img/sparkspace.jpg"});
//     mockData.set('003',{venueName:'The Grand Table', imgSrc:"/img/grandtable.jpg"});
    // [{vid:'001', },
    //     {vid:'002', venueName:'Spark Space', imgSrc:"/img/sparkspace.jpg"},
    //     {vid:'003', venueName:'The Grand Table', imgSrc:"/img/grandtable.jpg"}
    const venue=await getVenue(params.vid);
    return (
        <div>
            <h1>venue info</h1>
            <div className='flex flex-row'>
                <Image src={venue.data.picture} 
                alt="venue image"
                height={1200}
                width={800}
                className="w-[300px] h-auto m-20 rounded-3xl shadow-xl shadow-amber-700"
                />
                <div>
                    <h2 className="text-white text-2xl m-20 ml-5 mb-5">{venue.data.name}</h2>
                    <p className="text-white text-md m-5 ml-5">{venue.data.address} {venue.data.district} {venue.data.province} {venue.data.postalcode}</p>
                    <p className="text-white text-md m-5 ml-5">{venue.data.tel}</p>
                </div>
                
            </div>
        </div>
        
    )
}