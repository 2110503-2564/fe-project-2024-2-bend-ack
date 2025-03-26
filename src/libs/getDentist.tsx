export default async function getDentist(id:string) {
    await new Promise((resolve)=>setTimeout(resolve,300));
    const response=await fetch(`http://dentapp.us-east-1.elasticbeanstalk.com/api/v1/dentists/${id}`);
    
    if (!response.ok) {
        throw new Error("Failed to fetch dentists")
    }
    
    return response.json();
}