import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    jobName: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    }
    // image: {
    //     type: String,
    //     required: false
    // },
    // remote: {
    //     type: String,
    //     required: false
    // }
}, {
    //createdAt, updatedAt
    timestamps: true
});

const Job = mongoose.model('Job', jobSchema);

export default Job;