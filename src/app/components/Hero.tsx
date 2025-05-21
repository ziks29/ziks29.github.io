"use client";
import { josefin } from "../utils/fonts";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

// Text variables
const hello = "Welcome ";
const hText = "My name is ";
const name = "Artem Ushpuras.";
const heroBegin = "Perfecting ";
const heroMiddle = [
  "frontend ",
  "backend ",
  "web3 ",
  "TON ",
  "UI/UX ",
  "accessibility ",
  "interactivity ",
  "performance ",
  "scalability ",
  "SEO ",
  "every detail ",
];
const heroEnd = "to bring your ideas to life.";
const speed = 0.075;

export default function Hero() {
  const [isFirstRender, setIsFirstRender] = useState(true);
  return (
    <div className="container h-[calc(100dvh-80px)] flex flex-col justify-center">
      {/* Greeting Line with waving hand */}
      <h2 className="text-3xl mb-4 flex items-center">
        {hello.split("").map((char, index) => (
          <motion.span
            key={index + "hello"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * speed }}
          >
            {char}
          </motion.span>
        ))}
        <motion.span
          key="wave"
          className="inline-block ml-1 mb-2"
          aria-label="waving hand"
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: [0, 15, -2, 15, 0], opacity: 1 }}
          transition={{
            // Separate transitions for rotation and opacity
            rotate: {
              duration: 6,
              repeat: 2,
              ease: "easeInOut",
            },
            opacity: {
              delay: hello.length * speed, // Adjust the delay as needed
              duration: 0.5,
              ease: "easeInOut",
            },
          }}
          style={{
            transformOrigin: "90% 100%", // Adjust as needed for better rotation center
          }}
        >
          👋
        </motion.span>
      </h2>

      {/* Main Title */}
      <h1 className="text text-[50px]">
        {/* Typing animation */}
        {hText.split("").map((char, index) => (
          <motion.span
            key={index + "hText"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * speed + hello.length * speed }}
          >
            {char}
          </motion.span>
        ))}

        <span
          className={`${josefin.className} italic text-nile-300 transition-all duration-300`}
        >
          {name.split("").map((char, index) => (
            <motion.span
              key={index + "name"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay:
                  index * speed + hText.length * speed + hello.length * speed,
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      </h1>

      {/* Secondary Text with Animated Words */}
      <SecondText className="text-3xl h-40 mt-4" />
    </div>
  );
}

function SecondText({ className = "" }) {
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animationEnd, setAnimationEnd] = useState(false);

  // Change word every 1.8 seconds till the end of the array
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      if (currentWord < heroMiddle.length - 1) {
        setCurrentWord(currentWord + 1);
      }
      if (currentWord === heroMiddle.length - 1) {
        // Set animationEnd to true
        setAnimationEnd(true);
        clearInterval(interval); // Clear interval when done
      }
    }, 1800);

    return () => clearInterval(interval);
  }, [currentWord, isVisible]);

  const handleAnimationEnd = (index: number) => {
    if (index === heroBegin.length - 1) {
      setIsVisible(true);
    }
  };

  return (
    <h2 className={className}>
      {heroBegin.split("").map((char, index) => (
        <motion.span
          onAnimationComplete={() => handleAnimationEnd(index)}
          key={index + "heroBegin"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay:
              hello.length * speed +
              hText.length * speed +
              name.length * speed +
              index * speed,
          }}
        >
          {char}
        </motion.span>
      ))}
      <AnimatePresence>
        {isVisible &&
          heroMiddle
            .filter((_, index) => index === currentWord)
            .map((word) =>
              word.split("").map((char, idx) => (
                <motion.span
                  key={idx + "heroMiddle" + currentWord}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * speed }}
                >
                  {char}
                </motion.span>
              ))
            )}
        <br />
        {animationEnd &&
          heroEnd.split("").map((char, index) => (
            <motion.span
              key={index + "heroEnd"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * speed }}
            >
              {char}
            </motion.span>
          ))}
      </AnimatePresence>
    </h2>
  );
}

function cta() {
  const text = "Continue to my works";
  const contact = "Contact me"; // Emoji with face
}
