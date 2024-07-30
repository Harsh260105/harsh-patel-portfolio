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
    instagram
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "nodejs",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: c,
        name: "c",
        type: "frontend",
    },
    {
        imageUrl: cpp,
        name: "c++",
        type: "frontend",
    },
    {
        imageUrl: python,
        name: "python",
        type: "frontend",
    },
    {
        imageUrl: java,
        name: "java",
        type: "frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
];

export const experiences = [
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
        name: 'PDF Visionary master',
        description: 'Developed a python script that uses the PyMuPDF library to extract text from PDF files and summarize the content using the Hugging Face Transformers library.',
        link: 'https://github.com/Harsh260105/PDF-Visionary-master',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'AI World',
        description: 'Built a web application that helps user to get a effective AI tool to help them in their according work.',
        link: 'https://github.com/Harsh260105/AI-World',
    },
    {
        iconUrl: news,
        theme: 'btn-back-blue',
        name: 'News App',
        description: 'Developed a web application that allows users to search for news articles and save them for later reading. The app uses the News API to fetch news articles.',
        link: 'https://github.com/Harsh260105/A-Terminal-Based-News-App',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Event Management Site',
        description: 'A web application that allows users to create and manage events. The app uses React.js for the frontend.',
        link: 'https://github.com/Harsh260105/Event-Manager-',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-yellow',
        name: 'A Lite Message Encoder',
        description: 'Developed a web application that allows users to encode and decode messages using a simple algorithm.',
        link: 'https://github.com/Harsh260105/A-Lite-Message-Encoder',
    }
];