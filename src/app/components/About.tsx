"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const width = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      id="about"
      className="container flex flex-col items-center justify-between py-10   min-h-[calc(100dvh-40px)] space-y-4"
    >
      {/* Span divider */}
      <motion.span
        style={{ width }}
        className="h-[1px] bg-nile-900"
      ></motion.span>

      {/* Flex with 2 equal columns */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 w-full sm:h-full">
        {/* Left column */}
        <div className="flex flex-1 flex-col gap-5 sm:h-full">
          <Introduction />
          <Skills stack={stack} title />
        </div>
        {/* Right column */}
        <div className="flex flex-1 flex-col gap-5 sm:h-full justify-between">
          <Skills stack={backendTechnologies} />
          <Skills stack={tonTelegram} />
          <div id="contact" className="mt-auto">
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

      {/* Empty div for balance */}
      <div className="h-[1px]"></div>
    </div>
  );
}
