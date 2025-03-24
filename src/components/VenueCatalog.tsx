import Link from 'next/link'
// import Card from './Card'

export default async function VenueCatalog({venuesJson}:{venuesJson: Promise<VenueJson>}){
    // interface VenueItem {
    //     _id: string,
    //     name: string,
    //     address: string,
    //     district: string,
    //     province: string,
    //     postalcode: string,
    //     tel: string,
    //     picture: string,
    //     dailyrate: number,
    //     __v: number,
    //     id: string
    //   }
      const venues=await venuesJson;
return(
    <>
    <p className='mt-20 text-center text-2xl'>Explore {venues.count} venues in our Catalog</p>
    <div className="m-[20px] flex  flex-row content-around justify-around p-[10px] flex-wrap">
        {venues.data.map((venue:VenueItem)=>(
            <Link href={`/venue/${venue.id}`} className="w-1/6 h-[300px]  m-10 p-0" key={venue.id} >
            {/* <Card venueName={venue.name} imgSrc={venue.picture}></Card> */}
            </Link>
        ))}
    </div>
    </>

)
}