import React from "react";
import { List, ListItem, ListItemText, Button } from "@mui/material";

const Upcoming = ({ medications, onMarkAsTaken }) => {
    const currentDate = new Date();
    const upcomingMedications = medications.filter(med => {
        const startDate = new Date(med.startDate);
        const endDate = new Date(med.endDate);
        return !med.taken && currentDate >= startDate && currentDate <= endDate;
    });

    return (
        <List>
            {upcomingMedications.length > 0 ? (
                upcomingMedications.map((medication) => (
                    <ListItem key={medication._id}>
                        <ListItemText
                            primary={`${medication.name || "Unnamed Medication"} - ${medication.dosage}`}
                            secondary={`Times: ${(medication.times && Array.isArray(medication.times)) ? medication.times.join(", ") : "No reminder times set"}`}
                        />
                        <Button onClick={() => onMarkAsTaken(medication._id)} variant="contained" color="primary">
                            Mark as Taken
                        </Button>
                    </ListItem>
                ))
            ) : (
                <ListItem>
                    <ListItemText primary="No upcoming medications." />
                </ListItem>
            )}
        </List>
    );
};

export default Upcoming;
