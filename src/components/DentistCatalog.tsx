import Link from 'next/link'
import DentistCard from './DentistCard'

export default async function DentistCatalog({dentistJson}:{dentistJson: Promise<DentistJson>}){
      const dentists=await dentistJson;
return(
    <>
    {/* <p className='mt-20 text-center text-2xl'>Explore {dentists.count} dentists in our Catalog</p> */}
    <div className=" flex flex-row content-around justify-around p-[10px] flex-wrap">  
        {dentists.data.map((dentist:DentistItem)=>(
            <Link href={`/dentist/${dentist._id}`} 
                className="w-1/4 h-auto m-5 p-0" 
                key={dentist._id} >
                <DentistCard 
                    dentName={dentist.name} 
                    imgSrc='/img/cover.jpg' 
                    rating={dentist.ratings}
                    yearofExperience={dentist.yearsofexperience}
                    areaofExpertise={dentist.areaofexpertise}
                >
                </DentistCard>
            </Link>
        ))}
    </div>
    </>

)
}