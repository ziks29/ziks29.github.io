import { Metadata } from "next";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Offers from "../components/Offers";
import GitHubActivity from "../components/GitHubActivity";

export const metadata: Metadata = {
  title: "ushpuras.dev",
  description:
    "I'm a software developer based in Germany. I specialize in building websites and web applications.",
};

const Page = () => {
  return (
    <div className="flex h-full flex-col relative z-10">
      <Hero />
      <Projects />
      {/* <section id="github" className="container py-16 lg:py-24">
        <GitHubActivity />
      </section> */}
      <Offers />
      <About />
    </div>
  );
};

export default Page;
