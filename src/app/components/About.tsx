"use client";
import { motion } from "motion/react";

const stack = [
  "React",
  "Next.js",
  "HTML5",
  "CSS3",
  "TypeScript",
  "Tailwind CSS",
  "Bootstrap",
  "Material-UI",
  "Chakra UI",
  "SCSS/Sass",
  "PostCSS",
  "D3.js",
  "Three.js",
  "Jest",
];

const backendTechnologies: string[] = [
  "Node.js",
  "Express",
  "Next.js",
  "NestJS",
  "GraphQL",
  "REST APIs",
  "MongoDB",
  "MySQL",
  "Firebase",
  "Prisma",
  "TypeORM",
  "Docker",
  "Kubernetes",
  "AWS",
  "Nginx",
  "Java",
  "Python",
];

const tonTelegram = [
  "Telegram Bots",
  "Telegram Mini Apps",
  "TON Smart Contracts",
  "Tact",
  "tma.js",
];

const Introduction = () => {
  return (
    <div>
      <h2 className="text-2xl uppercase">About</h2>
      <p className=" text-justify">
        Web development is my <span>lifestyle</span>. I breathe code and live
        design. My work fuses cutting-edge tech with intuitive interfaces,
        turning complex challenges into elegant solutions. Each project is a
        canvas for innovation, reflecting my passion for clean, efficient, and
        boundary-pushing digital experiences.
      </p>
    </div>
  );
};

const Skills = ({
  stack,
  title = false,
}: {
  stack: string[];
  title?: boolean;
}) => {
  return (
    <div>
      <h2 className="text-2xl uppercase">{title ? "Skills" : ""} </h2>
      <div className="">
        <h3 className="text-xl text-nile-300">
          {stack === backendTechnologies
            ? "Backend"
            : stack === tonTelegram
            ? "TON & Telegram"
            : "Frontend"}
        </h3>
        <div className="text-justify">
          {stack.map((tech) => (
            <span key={tech} className="">
              {stack[stack.length - 1] === tech ? tech + "." : tech + ", "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <div
      id="about"
      className="container flex flex-col items-center justify-start py-10   min-h-[calc(100dvh-40px)] space-y-4"
    >
      {/* <h1 className="text-4xl ">About</h1> */}
      {/* Span divider */}
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ delay: 0.5 }}
        className="h-[1px] bg-nile-900"
      ></motion.span>
      {/* <p className="text-lg">In development</p>
       */}
      {/* Flex with 2 columns */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-10">
        {/* Left column */}
        <div className="flex flex-1 flex-col gap-5">
          <Introduction />
          <Skills stack={stack} title />
          <Skills stack={backendTechnologies} />
          <Skills stack={tonTelegram} />
        </div>{" "}
        {/* Right column */}
        <div className="flex flex-1 flex-col ">
          <div id="contact">
            <h2 className="text-2xl uppercase">Contact</h2>
            <div>
              <p className="">
                Telegram:{" "}
                <a
                  className="hover:text-nile-100  "
                  href="https://t.me/m/0v199G8VNDc0"
                >
                  @ziks0
                </a>
              </p>
              <p className="">
                Email:{" "}
                <a
                  className="hover:text-nile-100"
                  href="mailto:ziks29@gmail.com"
                >
                  ziks29@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
