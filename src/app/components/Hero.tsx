"use client";
import { josefin } from "../utils/fonts";
import { motion, AnimatePresence, AnimationDefinition } from "framer-motion";
import { useEffect, useState } from "react";

const hText = "Hello. My name is ";
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

function SecondText({ className = "" }) {
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animationEnd, setAnimationEnd] = useState(false);

  //Change word every 2 seconds till the end of the array
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      if (currentWord < heroMiddle.length - 1) {
        setCurrentWord(currentWord + 1);
      }
      if (currentWord === heroMiddle.length - 1) {
        //setAnimationEnd to true
        setAnimationEnd(true);
      }
    }, 1800);

    return () => clearInterval(interval);
  }, [currentWord, isVisible]);

  const handleAnimationEnd = (index: number | AnimationDefinition) => {
    if (index === heroBegin.length - 1) {
      console.log("Animation end", index);
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
            delay: hText.length * 0.1 + name.length * 0.1 + 0.5 + index * 0.1,
          }}
        >
          {char}
        </motion.span>
      ))}
      <AnimatePresence>
        {isVisible &&
          heroMiddle
            .filter((_, index) => index === currentWord)
            .map((word, index) =>
              word.split("").map((char, index) => (
                <motion.span
                  key={index + "heroMiddle" + currentWord}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
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
              transition={{ delay: index * 0.1 }}
            >
              {char}
            </motion.span>
          ))}
      </AnimatePresence>
    </h2>
  );
}

export default function Hero() {
  return (
    <div className="container h-[calc(100dvh-80px)] flex flex-col justify-center">
      <h1 className=" text text-[50px]">
        {/* Typing animation */}
        {hText.split("").map((char, index) => (
          <motion.span
            key={index + "hText"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {char}
          </motion.span>
        ))}

        <span
          className={`${josefin.className} italic text-nile-300
          transition-all duration-300`}
        >
          {name.split("").map((char, index) => (
            <motion.span
              key={index + "name"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + hText.length * 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      </h1>
      <SecondText className="text-3xl h-40  " />
      {/* <h2 className=" text text-[30px]">
        I&#39;m a software developer based in Germany. I specialize in building
        websites and web applications.
      </h2> */}
    </div>
  );
}
