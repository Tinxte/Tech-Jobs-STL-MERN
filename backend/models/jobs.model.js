import mongoose from "mongoose";

const jobSchema = new moongoose.Schema({
    jobName: {
        type: String,
        required: true
    },
    businessName: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    remote: {
        type: String,
        required: false
    }
}, {
    //createdAt, updatedAt
    Timestamp: true
});

const Job = mongoose.model('Job', jobSchema);

export default Job;