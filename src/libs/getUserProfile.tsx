export default async function getUserProfile(token: string) {
    try {
        const response = await fetch("http://dentapp.us-east-1.elasticbeanstalk.com/api/v1/auth/me", {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Failed to fetch user profile: ${errorData.message || 'Unknown error'}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching user profile:", error);
        throw error; // Rethrow the error after logging it
    }
}
