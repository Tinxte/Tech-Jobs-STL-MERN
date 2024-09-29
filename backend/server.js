import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import Job from './models/jobs.model.js';

dotenv.config();

const app = express();

// Allows us to accept JSON data in the req.body
app.use(express.json());

app.post("/api/jobs/", async (req, res) => {

    // User sends this data
    const job = req.body;

    // Checks for empty fields
    if (!job.jobName || !job.companyName || !job.website) {
        return res.status(400).json({ success: false, message: "Please correct empty fields." });
    }

    const newJob = new Job(job)

    try {
        await newJob.save();
        res.status(201).json({ success: true, data: newJob });
    } catch (error) {
        console.error("Error creating job:" + error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
})

// console.log(process.env.MONGO_URI);
// 31:00
// TODO: app.delete API

app.listen(5000, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
});

