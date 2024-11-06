import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

const History = ({ medications }) => {
    // Filter medications that have been marked as taken
    const historyMedications = medications.filter(med => med.taken);

    return (
        <List>
            {historyMedications.length > 0 ? (
                historyMedications.map((medication) => (
                    <ListItem key={medication._id}>
                        <ListItemText
                            primary={`${medication.name || "Unnamed Medication"} - Taken`}
                            secondary={`Times: ${(medication.times && Array.isArray(medication.times)) ? medication.times.join(", ") : "No reminder times set"}`}
                        />
                    </ListItem>
                ))
            ) : (
                <ListItem>
                    <ListItemText primary="No medication history." />
                </ListItem>
            )}
        </List>
    );
};

export default History;
