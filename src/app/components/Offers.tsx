"use client";

import { Smartphone, Bot, Globe, Settings, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const offers = [
  {
    icon: Smartphone,
    title: "Telegram Mini Apps",
    items: [
      "Custom Mini Apps — Fully interactive apps inside Telegram, always bundled with a functional bot.",
      "TON Integrations — Work with smart contracts, NFTs, wallet analytics, and token-based logic.",
      "Gamified UX — On-chain games, reward mechanics, and real-time feedback inside the app.",
    ],
  },
  {
    icon: Bot,
    title: "Bots (Telegram & Discord)",
    items: [
      "Telegram Business Bots — Smart assistants for support, orders, bookings, and internal workflows.",
      "Utility Bots — Automate tasks, fetch data, or trigger custom logic.",
      "Interactive Bots — Use inline buttons, menus, and real-time user interactions.",
    ],
  },
  {
    icon: Globe,
    title: "Web & Platforms",
    items: [
      "Landing Pages — Clean, fast-loading, mobile-first websites to showcase your product or idea.",
      "Fullstack Platforms — Admin dashboards, user systems, and complete business logic for SaaS and e-commerce.",
    ],
  },
  {
    icon: Settings,
    title: "Backend & APIs",
    items: [
      "Real-time Systems — Multiplayer games, live dashboards, or WebSocket-based applications.",
      "Custom APIs — REST or GraphQL APIs in Go or Node.js, containerized and scalable.",
    ],
  },
];

export default function Offers() {
  return (
    <div
      id="offers"
      className="container py-10 min-h-[calc(100vh-40px)] overflow-hidden"
    >
      <span className="h-[1px] bg-nile-900 mb-8"></span>

      <motion.div
        className="flex flex-col mb-8 max-w-4xl"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2
          className="text-2xl uppercase mb-2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          What I Can Build for You
        </motion.h2>
        <motion.p
          className="text-nile-400 text-justify max-w-2xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          I help individuals and startups bring their ideas to life — fast,
          functional, and ready to scale. Here&apos;s what I can build for you:
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {offers.map((offer, index) => {
          const IconComponent = offer.icon;

          // Different slide directions for mobile and desktop
          const getInitialAnimation = () => {
            // On mobile (single column): alternate left/right
            // On desktop: slide from corners and sides
            if (window.innerWidth < 768) {
              return {
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
                y: 30,
                rotate: index % 2 === 0 ? -5 : 5,
                scale: 0.8,
              };
            } else {
              // Desktop: different directions for each position
              const directions = [
                { x: -150, y: -50, rotate: -10 }, // Top-left
                { x: 150, y: -50, rotate: 10 }, // Top-right
                { x: -150, y: 50, rotate: -8 }, // Bottom-left
                { x: 150, y: 50, rotate: 8 }, // Bottom-right
              ];
              return {
                opacity: 0,
                ...directions[index % 4],
                scale: 0.7,
              };
            }
          };

          return (
            <motion.div
              key={offer.title}
              className="flex flex-col h-full bg-nile-950 border border-nile-900 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-nile-900/20 p-6 group"
              initial={getInitialAnimation()}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth feel
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              whileHover={{
                scale: 1.02,
                y: -5,
                rotateY: 5,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              }}
            >
              <motion.div
                className="text-center mb-6"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15 + 0.3,
                  ease: "backOut",
                }}
              >
                <motion.div
                  className="flex justify-center mb-3"
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                >
                  <IconComponent
                    size={40}
                    className="text-nile-300 group-hover:text-nile-200 transition-colors duration-300"
                  />
                </motion.div>
                <motion.h3
                  className="text-xl font-semibold text-nile-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.15 + 0.5,
                  }}
                >
                  {offer.title}
                </motion.h3>
              </motion.div>

              <motion.div
                className="space-y-4 flex-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15 + 0.6,
                }}
              >
                {offer.items.map((item, itemIndex) => {
                  const [boldPart, ...rest] = item.split(" — ");
                  const description = rest.join(" — ");

                  return (
                    <motion.div
                      key={boldPart}
                      className="text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.15 + 0.7 + itemIndex * 0.1,
                      }}
                    >
                      <div className="font-medium text-nile-300 mb-1">
                        {boldPart}
                      </div>
                      {description && (
                        <div className="text-nile-400 leading-relaxed">
                          {description}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.8,
          delay: 0.8,
          ease: "backOut",
          type: "spring",
          stiffness: 100,
        }}
      >
        <motion.button
          className="flex items-center justify-center gap-2 bg-nile-900/50 hover:bg-nile-800/50 text-nile-300 hover:text-nile-200 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 border border-nile-800/50 hover:border-nile-700/50"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            y: -2,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.span
            className="text-base font-medium"
            whileHover={{ x: -2 }}
            transition={{ duration: 0.2 }}
          >
            Let&apos;s Discuss Your Project
          </motion.span>
          <motion.div
            whileHover={{
              rotate: 45,
              x: 2,
              y: -2,
            }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
}
