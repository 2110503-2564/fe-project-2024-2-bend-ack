export default async function signUp(user:UserItem){
    await new Promise((resolve)=>setTimeout(resolve,300));
    const response = await fetch(`http://dentapp.us-east-1.elasticbeanstalk.com/api/v1/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if(!response.ok){
        return response.status;
    }
    return await response.json();
}