"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { josefin } from "../utils/fonts";
import { ArrowUpRight, Github } from "lucide-react";

// Project data array
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product catalog, cart functionality, payment processing, and admin dashboard.",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Stripe API",
      "Tailwind CSS",
    ],
    image: "/projects/ecommerce.jpg",
    github: "https://github.com/ziks29/ecommerce-platform",
    demo: "https://ecommerce-demo.example.com",
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description:
      "A social media analytics dashboard that integrates with multiple APIs to provide comprehensive metrics and visualizations.",
    technologies: [
      "React",
      "TypeScript",
      "D3.js",
      "Node.js",
      "GraphQL",
      "Firebase",
      "Material-UI",
    ],
    image: "/projects/social-dashboard.jpg",
    github: "https://github.com/ziks29/social-dashboard",
    demo: "https://social-dashboard.example.com",
  },
  {
    id: 3,
    title: "TON Blockchain Wallet",
    description:
      "A secure wallet application for the TON blockchain with transaction history, staking capabilities, and Telegram Mini App integration.",
    technologies: [
      "Telegram Mini Apps",
      "TON Smart Contracts",
      "Tact",
      "React",
      "TypeScript",
      "tma.js",
      "Next.js",
    ],
    image: "/projects/ton-wallet.jpg",
    github: "https://github.com/ziks29/ton-wallet",
    demo: "https://t.me/ton_wallet_example_bot",
  },
  {
    id: 4,
    title: "Real-time Chat Application",
    description:
      "A scalable real-time chat application with private/group messaging, file sharing, and message encryption.",
    technologies: [
      "React",
      "Socket.io",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Docker",
    ],
    image: "/projects/chat-app.jpg",
    github: "https://github.com/ziks29/realtime-chat",
    demo: "https://realtime-chat.example.com",
  },
  {
    id: 5,
    title: "Project Management System",
    description:
      "A comprehensive project management tool with task tracking, time management, team collaboration, and reporting features.",
    technologies: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "AWS",
    ],
    image: "/projects/project-management.jpg",
    github: "https://github.com/ziks29/project-management",
    demo: "https://project-management.example.com",
  },
  {
    id: 6,
    title: "Content Management System",
    description:
      "A flexible CMS with customizable content types, user roles, and a headless API for frontend integration.",
    technologies: [
      "React",
      "GraphQL",
      "Node.js",
      "MongoDB",
      "Express",
      "AWS S3",
      "JWT Authentication",
    ],
    image: "/projects/cms.jpg",
    github: "https://github.com/ziks29/custom-cms",
    demo: "https://custom-cms.example.com",
  },
];

// Project Card Component
const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col h-full bg-nile-950 border border-nile-900 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-nile-900/20 transition-all duration-300 group"
    >
      <div className="relative h-48 overflow-hidden bg-nile-900/20">
        {/* If you have actual project images, you can uncomment this */}
        {/* <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        /> */}

        {/* Placeholder gradient design */}
        <div className="absolute inset-0 bg-gradient-radial-at-tr from-nile-800/30 via-nile-900/20 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <h3 className={`${josefin.className} text-2xl text-nile-300`}>
            {project.title}
          </h3>
        </div>
      </div>

      <div className="flex-1 p-4 flex flex-col">
        <p className="text-nile-400 mb-4 text-sm flex-1">
          {project.description}
        </p>

        <div className="mt-2">
          <h4 className="text-nile-300 text-sm mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-nile-900/40 text-nile-300 rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-1 text-xs bg-nile-900/40 text-nile-300 rounded-full">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-between mt-4 pt-3 border-t border-nile-900/40">
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-nile-400 hover:text-nile-300 transition-colors"
          >
            <Github className="w-4 h-4 mr-1" />
            <span className="text-sm">Code</span>
          </Link>

          <Link
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-nile-400 hover:text-nile-300 transition-colors"
          >
            <span className="text-sm">Live Demo</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <div
      id="projects"
      className="container flex flex-col items-center py-10 min-h-[calc(100dvh-40px)]"
    >
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ delay: 0.3 }}
        className="h-[1px] bg-nile-900 mb-8"
      ></motion.span>

      <div className="flex flex-col items-center mb-8">
        <h2 className="text-4xl uppercase mb-4">Projects</h2>
        <p className="text-nile-400 text-center max-w-2xl">
          Here are some of my recent fullstack development projects. Each one
          demonstrates my ability to build complete, end-to-end applications
          with robust backends and intuitive user interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
