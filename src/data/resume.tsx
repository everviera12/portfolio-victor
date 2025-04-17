import { Icons } from "@/components/icons";
import { BookMarked, Briefcase, Code, HomeIcon } from "lucide-react";

export const DATA = {
    name: "Victor Viera",
    initials: "VV",
    url: "https://dillion.io",
    location: "San Francisco, CA",
    locationLink: "https://www.google.com/maps/place/sanfrancisco",
    description: 'Front end developer with 4+ years of experince and coffe lover hehe ☕️',
    summary: "I’ve worked in various areas such as IT support, as a head of the IT department, and as a Front End developer. I love creating new projects 💡 to practice my skills and improve every day 🚀. Currently, I’m studying a Master's in Education 🎓 to become the teacher I always wanted to have and teach my future students everything I know about the IT world 💻.",
    avatarUrl: "/avatar.jpg",
    skills: [
        "React",
        "Next.js",
        "Typescript",
        "Nodejs",
        "Express",
        "Nestjs",
        "Wordpress",
        "Railway",
        "Hostinger",
        "Figma",
        "Postgres",
        "MySQL",
        "Tailwind",
        "Bootstrap",
        "Vercel",
        "GoDaddy",
    ],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "#education", icon: BookMarked, label: "Education" },
        { href: "#work", icon: Briefcase, label: "Experience" },
        { href: "#projects", icon: Code, label: "Projects" },
    ],
    contact: {
        email: "everisc2@gmail.com",
        tel: "+52 81 2294 6033",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/everviera12",
                icon: Icons.github,

                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/victor-everardo-viera-hern%C3%A1ndez/",
                icon: Icons.linkedin,

                navbar: true,
            },
            email: {
                name: "Send Email",
                url: "mailto:everisc2@gmail.com",
                icon: Icons.email,
                navbar: true,
            },
        },
    },

    work: [
        {
            company: "The Creative Department",
            badges: [],
            location: "Remote",
            title: "Front end Developer",
            logoUrl: "/tcp_logo.jpeg",
            start: "March 2024",
            end: "Currentry",
            description: "I have experience creating complete websites from scratch using frameworks like Next.js and libraries like React, as well as developing new modules for existing platforms. My work also involves maintaining and improving the performance of current websites, implementing new styles and features based on designs provided by the UI/UX team. Additionally, I’ve integrated various third-party services and APIs, such as real-time data sources, Google Maps, and WordPress, to enhance functionality and user experience.",
        },
        {
            company: "Interdesarrollos",
            badges: [],
            location: "Hybrid",
            title: "IT Manager",
            logoUrl: "/inter_logo.jpeg",
            start: "December 2023",
            end: "March 2024",
            description: "Provided technical support both remotely and on-site, managing email accounts and ERP software licenses. Maintained the Intercambiacasa platform using PHP, MySQL, HTML, and CSS, adding new features and handling user and property management through the admin panel. Developed and updated product pages for the company using WIX Studio and React. Also handled equipment quotations, inventory management, and proposed workflow improvements to enhance efficiency across departments.",
        },
        {
            company: "The FUD Trailer",
            badges: [],
            location: "On site",
            title: "IT Support",
            logoUrl: "/the-fud-trailer-logo.jpg",
            start: "Febrary 2023",
            end: "December 2023",
            description: "Provided remote and on-site user support, managed email accounts, and configured secure access points for departments using MAC or IP filtering. Maintained and developed product websites with React and WordPress, integrating new modules and external APIs. Also handled server administration and business account management.",
        },
        {
            company: "Alleguard",
            badges: [],
            location: "On site",
            title: "Support Intern",
            logoUrl: "/alleguard-logo.jpeg",
            start: "Febrary 2022",
            end: "December 2022",
            description: "Assisted the development team with the implementation and maintenance of the corporate portal using C#, HTML, CSS, and JavaScript. Contributed to front-end component development to enhance user experience, and provided second-level technical support, resolving advanced software, hardware, and network issues.",
        },
    ],
    education: [
        {
            school: "University of Waterloo",
            degree: "Master's in Education",
            logoUrl: "/uem-logo.jpg",
            start: "2018",
            end: "currently",
        },
        {
            school: "Instituto Tecnológico de Nuevo León",
            degree: "System Engineering",
            logoUrl: "/itnl-logo.jpeg",
            start: "2018",
            end: "2023",
        },
    ],
    projects: [
        {
            title: "Optum AZ",
            href: "https://optumaz.com/",
            dates: "",
            active: true,
            description: "Responsive healthcare site connecting patients with doctors and clinics, with focus on front-end, SEO, and performance.",
            technologies: [],
            links: [
                {
                    type: "Website",
                    href: "https://optumaz.com/",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "",
            video: "https://youtu.be/0YNNT5pa284",
            loom: "",
        },
        {
            title: "Calljar",
            href: "https://calljar.com/",
            dates: "",
            active: true,
            description: "Calljar is a smart call-tracking platform that helps users instantly connect with licensed agents through a fast, interactive interface.",
            technologies: [],
            links: [
                {
                    type: "Website",
                    href: "https://optumaz.com/",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "",
            video: "https://youtu.be/TlAcC39aMr0",
            loom: "",
        },
        {
            title: "Optum Plastic Surgery",
            href: "https://optumplasticsurgery.com/",
            dates: "",
            active: true,
            description: "Optum Plastic Surgery offers specialized cosmetic and reconstructive procedures with a focus on personalized care, safety, and optimal results.",
            technologies: [],
            links: [
                {
                    type: "Website",
                    href: "https://optumplasticsurgery.com/",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "",
            video: "https://youtu.be/iLwKtsSRLK4",
            loom: "",
        },
        {
            title: "Optum Resources",
            href: "https://resources.optum.com/",
            dates: "",
            active: true,
            description: "Optum Resources is a one-stop center that provides ideas, tools and expert guidance to help patients improve their daily lives.",
            technologies: [],
            links: [
                {
                    type: "Website",
                    href: "https://resources.optum.com/",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "",
            video: "https://youtu.be/c_c67-y_Hpk",
            loom: "",
        },
        {
            title: "Optum Care Washington",
            href: "https://optumwa.com/",
            dates: "",
            active: true,
            description: "Optum Care Washington provides personalized, high-quality care through a network of experienced providers committed to improving the health and wellness of communities across Washington state.",
            technologies: [],
            links: [
                {
                    type: "Website",
                    href: "https://optumwa.com/",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: '/optumwa-site.png',
            video: "",
            loom: "",
        }
    ],
    personal_projects: [
        {
            title: "Urban Kicks Mty",
            href: "https://urban-kicks-mty.vercel.app/",
            dates: "",
            active: true,
            description: "Urban Kicks Mty is a personal project — an online sneaker store built with Next.js. It features a modern layout, brand-name sneakers like Jordans, and global state management using React's useContext for the shopping cart experience.",
            technologies: ["Next.js", "React", "useContext", "Tailwind CSS"],
            links: [
                {
                    type: "Website",
                    href: "https://urban-kicks-mty.vercel.app/",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "/urban-kicks-mty.png",
            video: "",
            loom: "",
        }
    ]
} as const;