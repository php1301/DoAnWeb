export const menuItems = [
    {
        name: "",
        label: "Home",
        isExternal: false,
    },
    {
        name: "job-details",
        label: "Job details",
    },
    {
        name: "search-grid",
        label: "search job",
    },
    {
        name: "company-profile",
        label: "Company Profile",
    },
    {
        name: "contact",
        label: "Contact",
    },
    {
        name: "pages",
        label: "Pages",
        items: [
            {
                name: "job-pages",
                label: "Job Pages",
                items: [
                    { name: "search-grid", label: "Job Grid" },
                    { name: "search-list", label: "Job List" },
                ],
            },
            {
                name: "dashboard",
                label: "Dashboard",
                items: [
                    { name: "dashboard-main", label: "Dashboard Main" },
                    { name: "dashboard-settings", label: "Dashboard Settings" },
                    {
                        name: "dashboard-applicants",
                        label: "Dashboard Applicants",
                    },
                    { name: "dashboard-jobs", label: "Dashboard Posted Jobs" },
                ],
            },
            {
                name: "candidate",
                label: "Candidate Pages",
                items: [
                    {
                        name: "candidate-profile",
                        label: "Candidate Profile 01",
                    },
                    {
                        name: "candidate-profile-2",
                        label: "Candidate Profile 02",
                    },
                ],
            },
            {
                name: "search",
                label: "Search Pages",
                items: [
                    { name: "search-grid", label: "Search Grid" },
                    { name: "search-list", label: "Search List 01" },
                ],
            },

            {
                name: "essential",
                label: "Essential",
                items: [
                    { name: "faq", label: "FAQ" },
                    { name: "404", label: "404" },
                    { name: "pricing", label: "Pricing" },
                ],
            },
        ],
        isExternal: false,
    },
    // {
    //     name: "https://uxtheme.net/product-support/",
    //     label: "Support",
    //     isExternal: true,
    // },
];
