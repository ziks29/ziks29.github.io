import { Metadata } from "next";
import Hero from "./components/Hero";
import About from "./components/About";

export const metadata: Metadata = {
  title: "Ushpuras Dev",
  description:
    "I'm a software developer based in Germany. I specialize in building websites and web applications.",
};

const Page = () => {
  return (
    <div className="flex h-full flex-col">
      <Hero />
      <About />
    </div>
  );
};

export default Page;
