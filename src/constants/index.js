import { meta, shopify, starbucks, tesla, sparks, teachnook } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    c,
    cpp,
    python,
    java,
    news,
    instagram,
    sql,
    aws,
    gcp,
    postman,
    supabase,
    tlk
} from "../assets/icons";

export const skills = [
    // Languages
    {
        imageUrl: c,
        name: "C",
        type: "Language",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Language",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Language",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Language",
    },

    // Frontend
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React.js",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "Frontend",
    },

    // Backend & Databases
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express.js",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Backend",
    },
    {
        imageUrl: supabase,
        name: "Supabase",
        type: "Backend",
    },

    // Tools and Technologies
    {
        imageUrl: git,
        name: "Git",
        type: "Tools",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Tools",
    },
    // You'll need to add these icons in assets
    {
        imageUrl: aws,
        name: "AWS",
        type: "Tools",
    },
    {
        imageUrl: gcp,
        name: "GCP",
        type: "Tools",
    },
    {
        imageUrl: postman,
        name: "Postman",
        type: "Tools",
    },
];

export const experiences = [
    {
        title: "Full stack Web Development",
        company_name: "TLK Industries PVT LTD",
        icon: tlk,
        iconBg: "#b7e4c7",
        date: "May 2025 - June 2025",
        points: [
            "Worked on end-to-end development of real-world web applications, handling both frontend (React.js, NextJs) and backend (Node.js, MongoDB, Supabase, PosgreSQL, SQL Lite) tasks.", "Involved in feature development, API integration, and performance optimization across the full stack.",
        ],
    },
    {
        title: "React.js Developer",
        company_name: "Sparks to Ideas",
        icon: sparks,
        iconBg: "#accbe1",
        date: "May 2024 - June 2024",
        points: [
            "Completed a 1-month summer internship as a React.js developer at Sparks To Ideas, Ahmedabad.",
            "Worked alongside experienced professionals on live projects, contributing to various development stages.",
            "Developed a comprehensive event management site with features like event scheduling and attendee management.",
            "Gained practical experience in React.js and improved collaborative development abilities in a professional environment.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "teachnook",
        icon: teachnook,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Completed a web development remote internship at Teachnook, focusing on building foundational web skills.",
            "Collaborated with experienced developers on diverse web projects, enhancing my understanding of development processes.",
            "Learned and applied HTML, CSS, and JavaScript to create functional and visually appealing web pages.",
            "Gained practical web development skills and improved my ability to collaborate effectively in a remote work environment.",
        ],
    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: 'tel:+919723247551',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Harsh260105',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/harsh-patel-b85303256/',
    },
    {
        name: 'Instagram',
        iconUrl: instagram,
        link: 'https://www.instagram.com/harsh_patel_0265/',
    }
];

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-red',
        name: 'FinWise',
        techStack: "Next.js, Supabase, Prisma ORM, Gemini API, Custom AI Models, Clerk, Node.js, Express.js, MongoDB",
        description: [
            "Developed 'FinWise,' a financial wellness platform with expense tracking and budgeting tools.",
            "Used Next.js for the frontend and Supabase with Prisma ORM for secure data management.",
            "Integrated Gemini API and AI models for smart financial recommendations.",
            "Implemented Clerk for authentication and secure payment options."
        ]
        ,
        link: 'https://github.com/Harsh260105/FinWise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Urban Axis',
        techStack: "MERN Stack (MongoDB, Express.js, React.js, Node.js), React Router, Context API, Tailwind CSS, JWT, Cloudinary, Socket.io",
        description: [
            "Built a MERN stack real estate platform for property search and management.",
            "Added authentication, media storage with Cloudinary, and interactive maps.",
            "Integrated real-time chat using Socket.io for user communication.",
            "Implemented AI-driven property recommendations."
        ]
        ,
        link: 'https://github.com/Harsh260105/Urban-Axis',
    },
    {
        iconUrl: news,
        theme: 'btn-back-blue',
        name: 'Engineers Depot',
        techStack: " MongoDB, Express.js, React.js, Node.js with JWT Auth, Tailwind CSS, Cloudinary",
        description: [
            "A full-stack job portal enabling real-time connection between recruiters and job seekers.",
            "Implemented secure user authentication using JWT and cookies, with separate access for users and admins.",
            "Integrated dynamic job filters, application tracking, and an admin dashboard for managing listings and users.",
            "Deployed on Vercel for accessibility."
        ]
        ,
        link: 'https://github.com/Harsh260105/Engineers-Depot',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'ZapQuiz',
        techStack: "Node.js, Express, PostgreSQL, Prisma, Redis, Google Gemini API, Docker, Render",
        description: [
            "Built an AI-powered quiz generation and evaluation microservice using Node.js and Express.",
            "Integrated Google Gemini API for personalized quiz creation and answer evaluation.",
            "Implemented JWT-based auth, Redis caching, email verification, and detailed user analytics.",
            "Deployed on Render with Docker, PostgreSQL, and Prisma for scalable and secure performance."
        ]
        ,
        link: 'https://github.com/Harsh260105/AiQuizzer',
    },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-yellow',
    //     name: 'A Lite Message Encoder',
    //     techStack: "HTML, CSS, JavaScript, Bootstrap",
    //     description: [
    //         'Web application for encoding and decoding messages',
    //         'Uses a simple yet effective encryption algorithm',
    //         'Provides user-friendly interface for message transformation',
    //         'Ensures secure communication through encoding'
    //     ],
    //     link: 'https://github.com/Harsh260105/A-Lite-Message-Encoder',
    // }
];