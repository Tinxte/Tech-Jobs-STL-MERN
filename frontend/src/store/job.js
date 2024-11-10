import {create} from "zustand";

export const useJobStore = create((set) => ({
    jobs: [],
    setJobs: (jobs) => set({ jobs }),
    createJob: async(newJob) => {
        if (!newJob.jobName || !newJob.companyName || !newJob.website) {
            return {success: false, message: "Please fill in all fields."}
        }
        const res = await fetch("/api/jobs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJob)
        })
        const data = await res.json();
        set((state) => ({ jobs: [...state.jobs, data.data] }));

        return {success: true, message: "Job submitted successfully."}
    },
    fetchJobs: async () => {
        const res = await fetch("/api/jobs");
        const data = await res.json();
        set({ jobs: data.data });
    }
}));
