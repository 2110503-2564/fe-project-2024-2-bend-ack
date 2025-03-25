// import Link from 'next/link'
// import DentistCard from './DentistCard'

// export default async function DentistCatalog({ dentistJson }: { dentistJson: Promise<DentistJson> }) {
//   const dentists = await dentistJson;
//   const limitedDentists = dentists.data.slice(0, 3); // Limit to 3 dentists
  
//   return (
//     <>
//       <div className="flex flex-row content-around justify-around p-[10px] flex-wrap">
//         {limitedDentists.map((dentist: DentistItem) => (
//           <Link href={`/dentist/${dentist._id}`}
//             className="w-1/4 h-auto m-5 p-0"
//             key={dentist._id}>
//             <DentistCard
//               dentName={dentist.name}
//               imgSrc='/img/cover.jpg'
//               rating={dentist.ratings}
//               yearofExperience={dentist.yearsofexperience}
//               areaofExpertise={dentist.areaofexpertise}
//             />
//           </Link>
//         ))}
//       </div>
//     </>
//   )
// }
