import { FaBootstrap, FaDocker, FaGithub, FaJava } from "react-icons/fa";
import { SiApachekafka, SiJavascript, SiMongodb, SiMysql, SiRedis, SiSpringboot, SiTailwindcss } from "react-icons/si";
import { BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi";

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
        id:1,
        title: 'project 1',
        imageLink: '/images/project/dummyimage.webp',
        category: ['mobile', 'backend', 'web'],
        techStacks: [
            {
                text: 'TailwindCSS',
                iconComponent: <SiTailwindcss />
            },
            {
                text: 'Spring Boot',
                iconComponent: <SiSpringboot />
            },
            {
                text: 'Apache Kafka',
                iconComponent: <SiApachekafka />
            },
        ],
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit consequuntur sint unde, natus et obcaecati doloremque hic doloribus. Quaerat, est ut? Sunt ipsum, illo a veniam hic assumenda reiciendis vitae! Eum, nulla aspernatur. Aliquam velit consequatur tempore doloribus voluptatum neque ad enim. Repudiandae voluptas eos itaque omnis sunt fugit accusantium.',
        documentationLink: 'linkedin.com',
        codeLink: 'github.com',
    },
    {
        id:2,
        title: 'project 2',
        imageLink: '/images/project/project2.webp',
        category: ['mobile', 'backend'],
        techStacks: [
            {
                text: 'Spring Boot',
                iconComponent: <SiSpringboot />
            },
            {
                text: 'Apache Kafka',
                iconComponent: <SiApachekafka />
            },
        ],
        description: ' consequatur tempore doloribus voluptatum neque ad enim. Repudiandae voluptas eos itaque omnis sunt fugit accusantium.',
        documentationLink: '',
        codeLink: 'github.com',
    },
    {
        id:3,
        title: 'project 3',
        imageLink: '/images/project/project3.webp',
        category: ['mobile', 'web'],
        techStacks: [
            {
                text: 'TailwindCSS',
                iconComponent: <SiTailwindcss />
            },
            {
                text: 'Spring Boot',
                iconComponent: <SiSpringboot />
            },
            {
                text: 'Apache Kafka',
                iconComponent: <SiApachekafka />
            },
        ],
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit consequuntur sint unde, natus et obcaecati doloremque hic doloribus. Quaerat, est ut? Sunt ipsum, illo a veniam hic assumenda reiciendis vitae! Eum, nulla aspernatur. Aliquam vel.',
        documentationLink: 'linkedin.com',
        codeLink: '',
    },
    {
        id:4,
        title: 'project 4',
        imageLink: '/images/project/project4.webp',
        category: ['mobile'],
        techStacks: [
            {
                text: 'TailwindCSS',
                iconComponent: <SiTailwindcss />
            },
            {
                text: 'Spring Boot',
                iconComponent: <SiSpringboot />
            },
            {
                text: 'Apache Kafka',
                iconComponent: <SiApachekafka />
            },
        ],
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit consequuntur sint unde, natus et obcaecati doloremque hic doloribus. Quaerat, est ut? Sunt ipsum, illo a veniam hic assumenda reiciendis vitae! Eum, nulla aspernatur. Aliquam velit consequatur tempore doloribus voluptatum neque ad enim. Repudiandae voluptas eos itaque omnis sunt fugit accusantium.',
        documentationLink: '',
        codeLink: '',
    },
    {
        id:5,
        title: 'project 5',
        imageLink: '/images/project/project5.jpg',
        category: ['backend', 'web'],
        techStacks: [
            {
                text: 'TailwindCSS',
                iconComponent: <SiTailwindcss />
            },
            {
                text: 'Spring Boot',
                iconComponent: <SiSpringboot />
            },
            {
                text: 'Apache Kafka',
                iconComponent: <SiApachekafka />
            },
        ],
    },
]