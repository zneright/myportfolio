// src/data/projectsData.js

export const projects = [
    {
        id: 1,
        title: "TourKita",
        category: "Systems", // categorizing it as a complete system
        description: "A comprehensive tourism platform bridging a mobile experience for travelers with a web-based command center for administrators.",
        // We can highlight the dual nature in a 'features' array or detailed description
        details: [
            "Mobile App: Cross-platform AR-enabled guide for tourists to discover local landmarks.",
            "Admin Web: React dashboard for user management, content updates, and analytics."
        ],
        techStack: ["React Native", "React.js", "Firebase", "Augmented Reality", "Google Maps API"],
        image: "https://tourkita-hosting.web.app/", // Make sure to add a screenshot here!
        links: {
            github: "https://github.com/renzjericho/tourkita", // Replace with real link
            demo: "https://tourkita-hosting.web.app/" // Optional link to live site or APK download
        }
    },
    // You can add your other projects below...

];