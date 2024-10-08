import express from "express";
import mongoose from "mongoose";

import Job from "../models/jobs.model.js";

const router = express.router();

router.get("/", async (req, res) => {

    try {

        const jobs = await Job.find({});
        res.status(200).json({success: true, data: jobs });

    } catch (error) {

        console.log("Error fetching jobs: " + error.message);
        res.status(500).json({ success: false, message: "Server error" });

    }
});

router.post("/", async (req, res) => {

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

        console.error("Error creating job: " + error.message);
        res.status(500).json({ success: false, message: "Server Error" });

    }
});

router.put("/:id", async (req, res) => {
    
    const { id } = req.params;

    const job = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, message: "Invalid Job ID"})
    }

    try {

        const updatedJob = await Job.findByIdAndUpdate(id, job, {new: true});
        res.status(200).json({ success: true, data: updatedJob });

    } catch (error) {

        res.status(500).json({ success: false, message: "Server error"});
        console.log("Error updating job: " + error);

    }

});

app.delete("/:id", async (req, res) => {

    const {id} = req.params;

    console.log("id: ", id);

    try {

        await Job.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Job deleted" });

    } catch (error) {

        res.status(404).json({ success: false, message: "Job not found" });
        console.log("Error deleting job: " + error.message);

    }
});

export default router;