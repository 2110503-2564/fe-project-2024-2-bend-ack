export default async function getUserProfile(token:string){
    await new Promise((resolve)=>setTimeout(resolve,300));
    const response=await fetch("https://a08-venue-explorer-backend-3.vercel.app/api/v1/auth/me",
        {
            method:'GET',
            headers:{   
                "Authorization": `Bearer ${token}`
            },
        }
    )
    if(!response.ok){
        throw new Error("failed to login");
    }
    return await response.json();
}