"use client";
import Link from "next/link";
import { josefin } from "../utils/fonts";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  imageStyle: "object-cover" | "object-contain";
  github?: string;
  demo: string;
  demoText: string;
};

// Project data array
const projects: Project[] = [
  {
    id: 1,
    title: "N9XO",
    description:
      "A fast-paced multiplayer Ultimate Tic-Tac-Toe game built for Telegram. Features animated turns, WebSocket server, reconnection logic, and MMR-based ranking.",
    technologies: [
      "Telegram Mini Apps",
      "Telegram Bot API",
      "React",
      "TypeScript",
      "Go",
      "PostgreSQL",
      "WebSockets",
      "Tailwind CSS",
      "Docker",
    ],
    image: "/projects/n9xo.jpg",
    imageStyle: "object-cover" as "object-cover" | "object-contain",
    demo: "https://n9xo.xyz",
    demoText: "Live App",
  },
  {
    id: 2,
    title: "Spinton",
    description:
      "A Telegram Mini App for tracking and analyzing TON wallets and NFTs. Offers real-time charts, asset insights, and gamified UX directly in Telegram.",
    technologies: [
      "Telegram Mini Apps",
      "TON Smart Contracts",
      "Tact",
      "React",
      "TypeScript",
      "Next.js",
      "MongoDB",
      "GraphQL",
      "Tailwind CSS",
    ],
    image: "/projects/spinton.svg",
    imageStyle: "object-contain" as "object-cover" | "object-contain",
    demo: "https://spinton.app",
    demoText: "Live App",
  },
  {
    id: 998,
    title: "ModernShop",
    description:
      "Basic template for an e-commerce platform with product catalog, cart functionality, payment processing, and admin dashboard.",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Stripe API",
      "Tailwind CSS",
    ],
    image: "/projects/ecommerce.png",
    imageStyle: "object-cover",
    demo: "/ecommerce",
    demoText: "Live Demo",
  },
  {
    id: 999,
    title: "Luxuria",
    description:
      "Basic template for a premium hotel website with elegant design, dark mode, mobile-first responsiveness, and smooth animations.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/projects/luxuria.png",
    imageStyle: "object-cover",
    demo: "/luxuria",
    demoText: "Live Demo",
  },
  {
    id: 5,
    title: "CodeGreen",
    description:
      "An interactive FiveM roleplay site featuring horizontal slide navigation, photo galleries, lazy loading, and real-time server status — built for performance and rich presentation.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "PhotoSwipe",
      "pnpm",
    ],
    image: "/projects/codegreen.png",
    imageStyle: "object-contain",
    github: "",
    demo: "https://ziks29.github.io/codegreen-site/",
    demoText: "Live Site",
  },
  {
    id: 6,
    title: "Blaine County News",
    description:
      "A roleplay-focused news platform with a robust admin ecosystem for managing the entire publication business. Features a dedicated financial dashboard for revenue analytics, an integrated order processing system, and a dynamic custom CMS for publishing articles and ads.",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Prisma",
      "PostgreSQL",
      "NextAuth.js",
      "Google Gemini",
      "Lucide React",
    ],
    image: "/projects/bcn.png",
    imageStyle: "object-contain",
    demo: "https://blainenews.n9xo.xyz",
    demoText: "Live Site",
  },
  {
    id: 8,
    title: "TonDesk",
    description:
      "A Telegram Mini App for deploying TON-connected AI bots from a custom knowledge base. Connect a wallet, upload knowledge, deploy a bot, and fund usage with TON — no infrastructure setup needed.",
    technologies: [
      "Telegram Mini Apps",
      "TON Connect",
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "SQLite",
      "OpenRouter",
      "Docker",
    ],
    image: "/projects/tondesk.png",
    imageStyle: "object-cover" as "object-cover" | "object-contain",
    github: "https://github.com/ziks29/tondesk",
    demo: "https://tondesk.n9xo.xyz/web",
    demoText: "Live App",
  },
  {
    id: 7,
    title: "Autonomous Telegram Blogger",
    description:
      "A multi-agent system that researches topics, drafts posts, enforces a consistent writing style, and publishes to a Telegram channel automatically. It turns “idea → verified sources → polished post” into a repeatable pipeline, reducing manual content creation while improving quality and consistency.",
    technologies: [
      "Python",
      "Google Gemini API",
      "LangGraph",
      "LangChain",
      "Telegram Bot API",
      "Docker",
      "GitHub Actions",
    ],
    image: "/projects/aitg.png",
    imageStyle: "object-cover",
    demo: "https://www.kaggle.com/competitions/agents-intensive-capstone-project/writeups/autonomous-telegram-blogger",
    demoText: "View Writeup",
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
      className="flex flex-col h-full bg-nile-950 border border-nile-900 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-nile-900/20 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
    >
      <div className="relative h-48 overflow-hidden bg-nile-900/20">
        {/* If you have actual project images, you can uncomment this */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`${project.imageStyle} group-hover:scale-105 transition-transform duration-500`}
        />

        {/* Placeholder gradient design */}
        <div className="absolute inset-0 bg-gradient-radial-at-tr from-nile-800/30 via-nile-900/20 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <h3
            className={`${josefin.className} text-2xl text-nile-300 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-full`}
          >
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
          <div className="flex flex-wrap gap-2 min-h-[4rem]">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-nile-900/40 text-nile-300 rounded-full h-fit"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-4 pt-3 border-t border-nile-900/40">
          <Link
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-nile-400 hover:text-nile-300 transition-colors"
          >
            <span className="text-sm">{project.demoText}</span>
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
      className="container py-10 min-h-[calc(100vh-40px)] overflow-hidden"
    >
      <span className="h-[1px] bg-nile-900 mb-8"></span>

      <div className="flex flex-col mb-8 max-w-4xl">
        <h2 className="text-2xl  uppercase mb-2">Projects</h2>
        <p className="text-nile-400 text-justify max-w-2xl">
          Here are some of my recent fullstack development projects. Each one
          demonstrates my ability to build complete, end-to-end applications
          with robust backends and intuitive user interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects
          .sort((a, b) => a.id - b.id)
          .map((project, index) => {
            const isLastOdd =
              index === projects.length - 1 && projects.length % 2 === 1;

            if (isLastOdd) {
              return (
                <div
                  key={project.id}
                  className="md:col-span-2 flex justify-center"
                >
                  <div className="w-full md:max-w-[calc(50%_-_0.75rem)]">
                    <ProjectCard project={project} index={index} />
                  </div>
                </div>
              );
            }

            return (
              <ProjectCard key={project.id} project={project} index={index} />
            );
          })}
      </div>
    </div>
  );
}
