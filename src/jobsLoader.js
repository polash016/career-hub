import { getShoppingCart } from "./utilities/fakedb";

const jobsLoader = async () => {
    const loadedJobs = await fetch('/jobs.json');
    const jobs = await loadedJobs.json();
    const savedJobs = [];

    const storedJobs = getShoppingCart();
    for(const id in storedJobs){
        const addedJob = jobs.find(job => job.id === id)
        // console.log(addedJob)
        if(addedJob){
            savedJobs.push(addedJob);
        }
        // console.log(addedJob)
    }


    return savedJobs;
}

export default jobsLoader;