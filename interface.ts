interface VenueItem {
  _id: string,
  name: string,
  address: string,
  district: string,
  province: string,
  postalcode: string,
  tel: string,
  picture: string,
  dailyrate: number,
  __v: number,
  id: string
}


interface VenueJson {
  success: boolean,
  count: number,
  pagination: Object,
  data: VenueItem[]
}

interface BookingItem {
  nameLastname: string;
  tel: string;
  venue: string;
  bookDate: string;
}
//---------------------
interface DentistItem{
  _id:string,
  name:string,
  yearsofexperience:number,
  areaofexpertise:string,
  __v:number,
  ratings:number,
  reviewcounts:number
}

interface DentistJson{
  success: boolean,
  count: number,
  pagination: Object,
  data: DentistItem[]
}

interface AppointmentItem {
  _id:string,
apptDate:string,
user:string,
dentist:string,
createdAt:string,
__v:number
}

interface AppointmentJson {
  success: boolean,
  count: number,
  pagination: Object,
  data: AppointmentItem[]
}


