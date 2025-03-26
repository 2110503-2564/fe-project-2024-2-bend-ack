import dayjs, { Dayjs } from "dayjs";

export default async function updateAppointment(apptId: string, apptDate: string, token: string) {
    try {
        // Optional delay, if necessary for some reason (e.g., for testing or rate-limiting)
        await new Promise((resolve) => setTimeout(resolve, 300));

        const response = await fetch(`http://dentapp.us-east-1.elasticbeanstalk.com/api/v1/appointments/${apptId}`, {
            method: "PUT", // Use PUT for updating
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                apptDate: dayjs(apptDate).format("YYYY-MM-DD"), // Format the date properly
            }),
        });

        if (!response.ok) {
            // Handle errors properly by throwing a detailed error message
            const errorData = await response.json();
            throw new Error(`Failed to update appointment. Status: ${response.status}. Message: ${errorData.message}`);
        }

        return await response.json(); // Return the updated data or success message
        
    } catch (error) {
        console.error("Error updating appointment:", error);
        throw error; // Rethrow the error to be handled higher in the call stack
    }
}
