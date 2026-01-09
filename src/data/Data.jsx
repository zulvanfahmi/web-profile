import { FaBootstrap, FaDocker, FaGithub, FaJava } from "react-icons/fa";
import { SiApachekafka, SiExpo, SiJavascript, SiMongodb, SiMysql, SiRedis, SiSpringboot, SiTailwindcss, SiVite } from "react-icons/si";
import { BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";

export const certificateList1 = [
    {
        text: 'IBM Agile Explorer',
        linkImage: '/images/certificate/agileexplorer.webp',
        url: 'https://www.credly.com/badges/3d588934-66dd-4912-88fb-58d7bbf7d3cd'
    },
    {
        text: 'DevOps Fundamentals',
        linkImage: '/images/certificate/devopsfundamentals.webp',
        url: 'https://www.credly.com/badges/625277a2-bb94-4432-a8f4-9494916ce746'
    },
    {
        text: 'Docker Essentials',
        linkImage: '/images/certificate/dockeressentials.webp',
        url: 'https://courses.cognitiveclass.ai/certificates/6256dacc7c8d45ed8fc785757c79ef63'
    },
    {
        text: 'Java Functional Programming',
        linkImage: '/images/certificate/javafunctionalprogramming.webp',
        url: 'https://www.udemy.com/certificate/UC-67c90de0-8bdd-4e5d-98cf-da5d83069aa4/'
    },
    {
        text: 'Apache Kafka',
        linkImage: '/images/certificate/kafka.webp',
        url: 'https://www.udemy.com/certificate/UC-244e5863-e1c9-45c3-b1ab-76690c20f60b/'
    },
];

export const certificateList2 = [
    {
        text: 'Database MongoDB',
        linkImage: '/images/certificate/mongodb.webp',
        url: 'https://www.udemy.com/certificate/UC-f324317f-6256-4680-9d5d-cb2aa27f1e9c/'
    },
    {
        text: 'React.js',
        linkImage: '/images/certificate/reactjs.webp',
        url: 'https://www.udemy.com/certificate/UC-112cacbb-a04c-4ab8-bb24-033089ba3ba7/'
    },
    {
        text: 'Database Redis',
        linkImage: '/images/certificate/redis.webp',
        url: 'https://www.udemy.com/certificate/UC-13001f5b-85b3-4a34-9e3d-e1e8e751740e/'
    },
    {
        text: 'SQL Intermediate',
        linkImage: '/images/certificate/sqlintermediate.webp',
        url: 'https://www.credly.com/badges/1c364c79-c089-432d-b702-bc0c4c51cc23'
    },
];

export const keySkillListData = [
    { text: 'Java', iconComponent: <FaJava /> },
    { text: 'Spring Boot', iconComponent: <BiLogoSpringBoot /> },
    { text: 'Java Script', iconComponent: <SiJavascript /> },
    { text: 'ReactJS', iconComponent: <FaReact /> },
    { text: 'Vite', iconComponent: <SiVite /> },
    { text: 'React Native', iconComponent: <FaReact /> },
    { text: 'Expo', iconComponent: <SiExpo /> },
    { text: 'TailwindCSS', iconComponent: <SiTailwindcss /> },
    { text: 'Bootstrap', iconComponent: <FaBootstrap /> },
    { text: 'MySQL', iconComponent: <SiMysql /> },
    { text: 'PostgreSQL', iconComponent: <BiLogoPostgresql /> },
    { text: 'Redis', iconComponent: <SiRedis /> },
    { text: 'MongoDB', iconComponent: <SiMongodb /> },
    { text: 'Apache Kafka', iconComponent: <SiApachekafka /> },
    { text: 'Github', iconComponent: <FaGithub /> },
    { text: 'Docker', iconComponent: <FaDocker /> },
];

export const workExperienceListData = [
    {
        startEndDate: 'May 2025 - Present',
        title: 'Application Developer',
        company: 'IBM Indonesia',
        location: 'Central Jakarta, DKI Jakarta',
        description: 'Currently undergoing intensive training to understand IBM application development standards. Learning and practicing core technologies such as Java Spring Boot, Oracle Database,Oracle APEX, Oracle Fusion, and API integration'
    },
    {
        startEndDate: 'May 2024 - April 2025',
        title: 'Java Software Developer',
        company: 'PT Prima Integrasi Solusindo (Bank BNI Project)',
        location: 'Central Jakarta, DKI Jakarta',
        description: 'contributed to the development of Bank BNI’s Loan Management System at PT Prima Integrasi Solusindo by building scalable Spring Boot backend services, designing REST APIs, integrating PostgreSQL, and collaborating with analysts, testers, and stakeholders under Agile Scrum practices using JIRA and Git. I also developed a hybrid mobile application with Apache Cordova and optimized backend performance to ensure smooth integration and reliable system functionality.'
    },
    {
        startEndDate: 'November 2023 - May 2024',
        title: 'Java Software Developer Bootcamp Trainee',
        company: 'XSIS Academy',
        location: 'Sleman, Yogyakarta',
        description: 'Completed a structured Java Spring Boot training program, mastering RESTful API development, MVC architecture, Dependency Injection, and PostgreSQL integration through hands-on project implementation.'
    },
];

export const projectListData = [
    {
        id: 1,
        title: 'URL Shortener and QR Code Generator (bit.ly Clone)',
        imageLink: '/images/project/urlshortenerandqrcodegenerator.webp',
        category: ['backend', 'web'],
        techStacks: [
            { text: 'ReactJS', iconComponent: <FaReact /> },
            { text: 'Spring Boot', iconComponent: <SiSpringboot /> },
            { text: 'TailwindCSS', iconComponent: <SiTailwindcss /> },
            { text: 'MongoDB', iconComponent: <SiMongodb /> },
        ],
        description:
            `
        A web-based 🔗URL Shortener & 🔳QR Code Generator that allows users to convert long URLs into short, shareable links and generate QR codes in real time.
        The application supports both Indonesian 🇮🇩 and English 🇺🇸, ensuring a more accessible and user-friendly experience for a wider audience.
        
        ✨ Features:
        - 🔗 URL Shortening
        - 📱 QR Code Generation
        - 💾 Convert QR Codes to Downloadable Image Files
        - 🌐 Multi-language Support (English & Indonesian)
        `,
        documentationLink: 'linkedin.com',
        codeLink: 'https://github.com/zulvanfahmi/url-shortener-frontend',
    },
    {
        id: 2,
        title: 'Web Profile and Portofolio',
        imageLink: '/images/project/webprofileandportofolio.webp',
        category: ['web'],
        techStacks: [
            { text: 'ReactJS', iconComponent: <FaReact /> },
            { text: 'TailwindCSS', iconComponent: <SiTailwindcss /> },
            { text: 'Vite', iconComponent: <SiVite /> },
        ],
        description: `
        🌐 A personal profile and portfolio website designed to showcase my professional background, technical skills, and selected projects in a clean and responsive interface for both desktop 🖥️ and mobile 📱 devices.

        The website supports light and dark themes 🌗, includes an email contact feature ✉️, project filtering by category 🏷️, and an infinite carousel ♾️ to present content in an engaging and interactive way.
        `,
        documentationLink: '',
        codeLink: 'https://github.com/zulvanfahmi/web-profile',
    },
    {
        id: 3,
        title: 'Weather App',
        imageLink: '/images/project/weatherapp.webp',
        category: ['mobile'],
        techStacks: [
            { text: 'React Native', iconComponent: <FaReact /> },
            { text: 'Expo', iconComponent: <SiExpo /> },
            { text: 'TailwindCSS', iconComponent: <SiTailwindcss /> },
        ],
        description: `
        🌦️ A mobile weather application designed to deliver real-time weather updates and forecasts ⏱️ based on selected locations 📍.
        
        The application features a clean and responsive mobile interface 📱, supports location-based weather detection 🛰️, and presents weather information in a simple and easy-to-understand format 🌡️.
        
        ✨ Features :
        - 📍 Real-time weather forecast based on the user’s current location
        - 🔍 Search weather by city
        - 🌡️ Display detailed weather data, including temperature, humidity, wind speed, visibility, and more
        - 📅 5-day weather forecast
        - 📊 Temperature visualization for the 5-day forecast
        - 🌍 Multiple measurement units support (Celsius, Kelvin, Fahrenheit)
        - 🌐 Multi-language support (Indonesian 🇮🇩 and English 🇺🇸)
        - ⏰ 12-hour and 24-hour time format support
        `,
        documentationLink: 'linkedin.com',
        codeLink: '',
    },
]