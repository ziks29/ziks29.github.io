"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container flex flex-col items-center justify-center h-[calc(100dvh-40px)] space-y-4">
      <h1 className="text-4xl ">About</h1>
      {/* Span divider */}
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ delay: 0.5 }}
        className="h-[1px] bg-nile-900"
      ></motion.span>
      <p className="text-lg">In development</p>
    </div>
  );
}
