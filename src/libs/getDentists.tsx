export default async function getDentists(){
    await new Promise((resolve)=>setTimeout(resolve,300));
    const response=await fetch("http://dentapp.us-east-1.elasticbeanstalk.com/api/v1/dentists");
    if(!response.ok){
        throw new Error("failed to fetch venues data")
    }
    return await response.json();
}