import React from "react";
import { List, ListItem, ListItemText, ListItemSecondaryAction, Button } from "@mui/material";

const MedicationList = ({ medications, setMedications }) => {
    const handleMarkAsTaken = (id, reminderTimes) => {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();
        const currentMinute = currentTime.getMinutes();

        setMedications((prev) =>
            prev.map((med) => {
                if (med._id === id) {
                    // Check each reminder time
                    const isWithinTimeFrame = reminderTimes.some((time) => {
                        const [timeHour, timeMinute] = time.split(":").map(Number);
                        const timeDate = new Date();
                        timeDate.setHours(timeHour);
                        timeDate.setMinutes(timeMinute);

                        // Check if current time is within one hour before or after the reminder time
                        const oneHourBefore = new Date(timeDate);
                        oneHourBefore.setHours(timeDate.getHours() - 1);
                        const oneHourAfter = new Date(timeDate);
                        oneHourAfter.setHours(timeDate.getHours() + 1);

                        return currentTime >= oneHourBefore && currentTime <= oneHourAfter;
                    });

                    return { ...med, taken: isWithinTimeFrame }; // Mark as taken if within time frame
                }
                return med;
            })
        );
    };

    return (
        <List>
            {medications.map((medication) => (
                <ListItem key={medication._id}>
                    <ListItemText
                        primary={`${medication.medicationName} - ${medication.dosage}`}
                        secondary={`Times: ${medication.times.join(", ")}`} // Updated to match 'times' field
                    />
                    {!medication.taken && (
                        <ListItemSecondaryAction>
                            <Button
                                onClick={() => handleMarkAsTaken(medication._id, medication.times)} // Updated to use 'times' field
                                color="primary"
                            >
                                Mark as Taken
                            </Button>
                        </ListItemSecondaryAction>
                    )}
                </ListItem>
            ))}
        </List>
    );
};

export default MedicationList;
