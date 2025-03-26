export default async function userLogin(userEmail: string, userPassword: string) {
    try {
        await new Promise((resolve) => setTimeout(resolve, 300)); // Simulated delay (remove for production)
        
        const response = await fetch("http://dentapp.us-east-1.elasticbeanstalk.com/api/v1/auth/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: userEmail,
                password: userPassword,
            }),
        });

        if (!response.ok) {
            // Handle failure by parsing the response body for an error message
            const errorData = await response.json();
            throw new Error(errorData.message || "Login failed. Please try again.");
        }

        return await response.json();  // Return the user data and token on success
    } catch (error) {
        console.error("Login error:", error);
        throw error;  // Propagate the error to be handled by the caller
    }
}
