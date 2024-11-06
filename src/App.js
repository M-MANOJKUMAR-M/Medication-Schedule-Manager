import React, { useState, useEffect } from "react";
import { Container, Typography, Tabs, Tab } from "@mui/material";
import MedicationForm from "./components/MedicationForm";
import Sidebar from "./components/Sidebar";
import Upcoming from "./components/Upcoming";
import History from "./components/History";
import MedicationList from "./components/MedicationList";
import axios from "axios";

function App() {
    const [medications, setMedications] = useState([]);
    const [tabValue, setTabValue] = useState(0);

    // Fetch or load medications on initial render
    useEffect(() => {
        const savedMedications = JSON.parse(localStorage.getItem("medications"));
        if (savedMedications) {
            setMedications(savedMedications);
        } else {
            const fetchMedications = async () => {
                try {
                    const response = await axios.get("http://localhost:5000/api/medications");
                    setMedications(response.data);
                    localStorage.setItem("medications", JSON.stringify(response.data));
                } catch (error) {
                    console.error("Error fetching medications:", error);
                }
            };
            fetchMedications();
        }
    }, []);

    // Update localStorage whenever medications change, and set notifications
    useEffect(() => {
        localStorage.setItem("medications", JSON.stringify(medications));
        medications.forEach((med) => setMedicationNotifications(med));
    }, [medications]);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    // Add new medication to state and attempt to store in the database
    const addMedication = async (medication) => {
        const newMedications = [...medications, { ...medication, taken: false, _id: Date.now() }];
        setMedications(newMedications);

        try {
            await axios.post("http://localhost:5000/api/medications", medication);
            console.log("Medication added to database successfully");
        } catch (error) {
            console.error("Error adding medication to database:", error);
        }
    };

    // Mark medication as taken
    const handleMarkAsTaken = (id) => {
        setMedications((prev) =>
            prev.map((med) =>
                med._id === id ? { ...med, taken: true } : med
            )
        );
    };

    // Schedule notifications for a medication
    const setMedicationNotifications = (medication) => {
        if (Notification.permission === "granted") {
            const { startDate, endDate, reminderTimes, name } = medication;
            const now = new Date();

            reminderTimes.forEach((time) => {
                const [hours, minutes] = time.split(":");
                let notifyTime = new Date(startDate);
                notifyTime.setHours(hours, minutes, 0, 0);

                while (notifyTime <= new Date(endDate) && notifyTime >= now) {
                    const delay = notifyTime - now;
                    setTimeout(() => {
                        new Notification("Medication Reminder", {
                            body: `It's time to take ${name}.`,
                            icon: "/medication-icon.png"
                        });
                    }, delay);
                    notifyTime.setDate(notifyTime.getDate() + 1);
                }
            });
        }
    };

    // Request notification permission if not already granted
    const requestNotificationPermission = () => {
        if (Notification.permission === "default") {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    medications.forEach((med) => setMedicationNotifications(med));
                }
            });
        }
    };

    // Request permission on initial render
    useEffect(() => {
        requestNotificationPermission();
    }, []);

    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Medication Schedule Manager
            </Typography>
            <Sidebar />
            <MedicationForm onAdd={addMedication} />
            <Tabs value={tabValue} onChange={handleTabChange}>
                <Tab label="Upcoming" />
                <Tab label="History" />
            </Tabs>
            {tabValue === 0 && <Upcoming medications={medications} onMarkAsTaken={handleMarkAsTaken} />}
            {tabValue === 1 && <History medications={medications} />}
            <MedicationList medications={medications} setMedications={setMedications} />
        </Container>
    );
}

export default App;
