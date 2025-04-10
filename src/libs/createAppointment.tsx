import {Dayjs} from "dayjs";

export default async function createAppointment(
    {did,user,apptDate,token}:
    {did:string, user:string,apptDate:Dayjs,token:string}){

    await new Promise((resolve)=>setTimeout(resolve,300));
    const response=await fetch(`http://dentapp.us-east-1.elasticbeanstalk.com/api/v1/dentists/${did}/appointments`,
        {
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            },
            body:JSON.stringify({
                apptDate:apptDate.toString(),
                user:user
            }),
        }
    )
    if(!response.ok){
        return response.status;
    }
    return await response.json();
}