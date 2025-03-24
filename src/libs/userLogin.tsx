export default async function userLogin(userEmail:string, userPassword:string){
    await new Promise((resolve)=>setTimeout(resolve,300));
    const response=await fetch("http://dentapp.us-east-1.elasticbeanstalk.com/api/v1/auth/login",
        {
            method:'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                email:userEmail,
                password:userPassword
            }),
        }
    )
    if(!response.ok){
        return response.status;
    }
    return await response.json();
}