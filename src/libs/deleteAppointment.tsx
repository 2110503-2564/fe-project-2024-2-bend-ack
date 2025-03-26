import { Dayjs } from "dayjs";

export default async function deleteAppointment(aid: string, token: string) {
    try {
        // Optional: If the timeout is necessary for some reason (testing/delays), you can leave it
        await new Promise((resolve) => setTimeout(resolve, 300)); 

        const response = await fetch(
            `http://dentapp.us-east-1.elasticbeanstalk.com/api/v1/appointments/${aid}`,
            {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Failed to delete appointment. Status: ${response.status}. Message: ${errorData.message}`);
        }

        return await response.json(); // Returns the response body, usually { success: true }
        
    } catch (error) {
        console.error("Error deleting appointment:", error);
        throw error; // Rethrow the error so it can be handled higher in the call stack
    }
}
