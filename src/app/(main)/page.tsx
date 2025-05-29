import { Metadata } from "next";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";

export const metadata: Metadata = {
  title: "ushpuras.dev",
  description:
    "I'm a software developer based in Germany. I specialize in building websites and web applications.",
};

const Page = () => {
  return (
    <div className="flex h-full flex-col relative z-10">
      <Hero />
      <About />
      {/* <Projects /> */}
    </div>
  );
};

export default Page;
