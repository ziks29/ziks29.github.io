"use client";

import { useState, useEffect, useRef } from "react";
import useStore from "../lib/store";

const msg: string[] = [
  "Welcome to ushpuras.me.",
  "Loading Header Component...",
  "Setting up Header Component...",
  "Loading footer...",
  "Hello, my name is Artem Ushpuras.",
  "I am a Fullstack Web Developer.",
  "I have been working with web technologies for over 10 years.",
  "I have worked with many different technologies and frameworks, but my main focus is on JavaScript and TypeScript.",
  "I am currently working on a GameFi project on TON Blockchain.",
  // ... Add more messages as needed
];

const messages: { [key: number]: string } = {};
msg.forEach((message, index) => {
  messages[index] = message;
});

export const CommandPrompt = () => {
  const { setHeaderVisible, setFooterVisible } = useStore() as {
    setHeaderVisible: (visible: boolean) => void;
    setFooterVisible: (visible: boolean) => void;
  };
  const [lines, setLines] = useState([{ prompt: "ushpuras.me:~ ", text: "" }]);
  const [loadingAnimation, setLoadingAnimation] = useState(false);
  const [cursor, setCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  const [showContinuePrompt, setShowContinuePrompt] = useState(false);
  const charRef = useRef(0);
  const messageRef = useRef(0);
  const lastMessageClicked = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout>();

  const performAction = (messageNumber: number) => {
    switch (messageNumber) {
      case 1:
        setLoadingAnimation(true);
        setHeaderVisible(true);
        break;
      case 2:
        setLoadingAnimation(true);
        setFooterVisible(true);
        break;
      default:
        break;
    }
  };

  // Function to handle key press
  const handleKeyPress = (event: KeyboardEvent) => {
    if (
      event.key === "Enter" &&
      messageRef.current <= Object.keys(messages).length - 1 &&
      !lastMessageClicked.current
    ) {
      setIsTyping(true);
      setShowContinuePrompt(false);
    }
    if (messageRef.current === Object.keys(messages).length - 1) {
      lastMessageClicked.current = true;
    }
  };

  const handleClick = () => {
    if (
      messageRef.current <= Object.keys(messages).length - 1 &&
      !lastMessageClicked.current
    ) {
      setIsTyping(true);
      setShowContinuePrompt(false);
      if (messageRef.current === Object.keys(messages).length - 1) {
        lastMessageClicked.current = true;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    if (isTyping) {
      intervalRef.current = setInterval(() => {
        let currentChar = charRef.current;
        let currentMessage = messageRef.current;

        if (messageRef.current < Object.keys(messages).length) {
          if (currentChar < messages[currentMessage]?.length) {
            const newLines = [...lines];
            newLines[newLines.length - 1].text +=
              messages[currentMessage][currentChar];
            setLines(newLines);
            charRef.current++;
          } else {
            performAction(currentMessage);
            if (currentMessage < Object.keys(messages).length - 1) {
              messageRef.current++;
              setLines([...lines, { prompt: "ushpuras.me:~ ", text: "" }]);
              setIsTyping(false);
              setShowContinuePrompt(true);
            } else {
              // It's the last message
              setIsTyping(false);
              setShowContinuePrompt(false); // Ensures "Press Enter to continue" is not shown after the last message
            }
            charRef.current = 0;
          }
        }
      }, 5);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isTyping, lines, performAction]); // Include messageRef.current in dependency array

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursor((cursor) => !cursor);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="container flex flex-col flex-1 justify-center items-center my-10">
      <div className="bg-gray-800 overflow-y-auto flex-1 text-white p-4 w-full rounded-lg">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="mt-2">
          {lines.map((line, index) => (
            <div key={index} className="flex items-center">
              <div className="mr-2 snap-start self-start">
                <span className="text-green-500">
                  <span className="font-bold inline-flex align-middle items-center">
                    {line.prompt}
                  </span>
                  {showContinuePrompt && index === lines.length - 1 && (
                    <span className="text-gray-500 ml-1 align-middle text-center  text-xs">
                      Press Enter to continue
                    </span>
                  )}
                </span>
              </div>
              <div>
                <span className="text-white">{line.text}</span>
                {index === lines.length - 1 && cursor && (
                  <span className="text-white">|</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
