
const internships = [
    {
        role: "Frontend Developer",
        company: "TechNova",
        category: "Technology",
        stipend: "₹12,000/month",
        duration: "3 Months",
        location: "Remote"
    },
    {
        role: "UI/UX Designer",
        company: "Pixel Studio",
        category: "Design",
        stipend: "₹10,000/month",
        duration: "2 Months",
        location: "Chennai"
    },
    {
        role: "Python Developer",
        company: "CodeWorks",
        category: "Technology",
        stipend: "₹15,000/month",
        duration: "6 Months",
        location: "Remote"
    },
    {
        role: "Digital Marketing",
        company: "GrowthX",
        category: "Marketing",
        stipend: "₹8,000/month",
        duration: "3 Months",
        location: "Bangalore"
    },
    {
        role: "Business Analyst",
        company: "FutureTech",
        category: "Business",
        stipend: "₹12,000/month",
        duration: "4 Months",
        location: "Hybrid"
    },
    {
        role: "Graphic Designer",
        company: "Creative Minds",
        category: "Design",
        stipend: "₹9,000/month",
        duration: "2 Months",
        location: "Remote"
    }
];

function displayJobs(jobs) {
    const container = document.getElementById("jobContainer");

    if (jobs.length === 0) {
        container.innerHTML = "<p>No internships found. Try another search.</p>";
        return;
    }

    container.innerHTML = jobs.map(job => `
        <div class="job-card">
            <span class="tag">${job.category}</span>
            <h3>${job.role}</h3>
            <p class="company">${job.company}</p>
            <div class="details">
                💰 ${job.stipend}<br>
                🕒 ${job.duration}<br>
                📍 ${job.location}
            </div>
            <button class="apply" onclick="applyJob('${job.role}', '${job.company}')">
                Apply Now
            </button>
        </div>
    `).join("");
}

function searchJobs() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const category = document.getElementById("category").value;

    const filtered = internships.filter(job => {
        const matchesSearch =
            job.role.toLowerCase().includes(search) ||
            job.company.toLowerCase().includes(search);

        const matchesCategory =
            category === "all" || job.category === category;

        return matchesSearch && matchesCategory;
    });

    displayJobs(filtered);
}

function applyJob(role, company) {
    alert("You selected " + role + " at " + company + ". Application details coming soon!");
}

displayJobs(internships);
