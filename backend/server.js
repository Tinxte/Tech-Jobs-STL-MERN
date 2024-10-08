import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';

import jobRoutes from "./routes/job.route.js";

dotenv.config();

const app = express();

// Allows us to accept JSON data in the req.body
app.use(express.json());

// Path for API endpoints
app.use("/api/jobs", jobRoutes)

app.listen(5000, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
});

