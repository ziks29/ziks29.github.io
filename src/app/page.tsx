import { Metadata } from "next";
import { CommandPrompt } from "./components/CommandPromt";

export const metadata: Metadata = {
  title: "Ushpuras Dev",
  description:
    "My name is Aurimas Ushpuras and I am a Fullstack Web Developer. I have been working with web technologies for over 10 years. I have worked with many different technologies and frameworks, but my main focus is on JavaScript and TypeScript. I am currently working on a GameFi project on TON Blockchain.",
};

const PortfolioPage = () => {
  return <CommandPrompt />;
};

export default PortfolioPage;
