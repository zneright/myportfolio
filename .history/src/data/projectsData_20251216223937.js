// src/data/projectsData.js

export const projects = [
    {
        id: 1,
        title: "TourKita",
        category: "Systems",
        description: "A comprehensive tourism platform bridging a mobile experience for travelers with a web-based command center for administrators.",
        techStack: ["React Native", "React.js", "Firebase", "Augmented Reality"],

        // CHANGE: Use an array of images instead of a single string
        gallery: [
            "/assets/tourkita1.jpg", // Image 0: The Mobile App Home
            "/assets/tourkita1.jpg",  // Image 1: The Web Admin Dashboard
            "/assets/tourkita-ar-view.png",     // Image 2: The AR Camera Feature
            "/assets/tourkita-map.png"          // Image 3: The Map View
        ],

        links: {
            github: "https://github.com/renzjericho/tourkita",
            demo: "#"
        }
    },
    // ... other projects
];