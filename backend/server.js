const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/medicationDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log("MongoDB connection error:", error));

// Schema and Model

const medicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    dosage: {
        type: String,
        required: true
    },
    times: {
        type: [String], // array of strings
        required: true
    }
});

const Medication = mongoose.model("Medication", medicationSchema);

// Endpoint to save medication data
app.post("/api/medications", async (req, res) => {
    const { name, startDate, endDate, dosage, times } = req.body;

    try {
        // Log request body to verify data received correctly
        console.log("Received data:", req.body);

        // Check if required fields are provided
        if (!name || !startDate || !endDate || !dosage || !times) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Create a new medication document
        const newMedication = new Medication({
            name,
            startDate,
            endDate,
            dosage,
            times,
        });

        // Save to database
        const savedMedication = await newMedication.save();

        // Confirm data saved successfully
        console.log("Saved medication:", savedMedication);
        res.status(201).json(savedMedication);
    } catch (error) {
        console.error("Error saving medication:", error);
        res.status(500).json({ message: "Failed to save medication." });
    }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
