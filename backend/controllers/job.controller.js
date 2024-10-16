import Job from "../models/jobs.model.js";
import mongoose from "mongoose";

export const getJobs = async (req, res) => {

    try {

        const jobs = await Job.find({});
        res.status(200).json({success: true, data: jobs });

    } catch (error) {

        console.log("Error fetching jobs: " + error.message);
        res.status(500).json({ success: false, message: "Server error" });

    }
};

export const createJob = async (req, res) => {

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
};

export const updateJob = async (req, res) => {
    
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

};

export const deleteJob = async (req, res) => {

    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, message: "Invalid Job ID"})
    }

    try {

        await Job.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Job deleted" });

    } catch (error) {

        res.status(500).json({ success: false, message: "Server error" });
        console.log("Error deleting job: " + error.message);

    }
};