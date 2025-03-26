
export default async function createRating(
    {did,uid,rating,token}:
    {did:string, uid:string,rating:number,token:string}){

    await new Promise((resolve)=>setTimeout(resolve,300));
    const response=await fetch(`http://dentapp.us-east-1.elasticbeanstalk.com/api/v1/dentists/${did}/ratings`,
        {
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            },
            body:JSON.stringify({
                user:uid,
                rating:rating
            }),
        }
    )
    if(!response.ok){
        return response.status;
    }
    return await response.json();
}