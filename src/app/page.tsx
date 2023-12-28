import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ushpuras Dev",
  description:
    "My name is Aurimas Ushpuras and I am a Fullstack Web Developer. I have been working with web technologies for over 10 years. I have worked with many different technologies and frameworks, but my main focus is on JavaScript and TypeScript. I am currently working on a GameFi project on TON Blockchain.",
};

const PortfolioPage = () => {
  return (
    <div
      className="container text-white mx-auto min-h-screen flex flex-col justify-between 
    "
    >
      <header className="flex flex-col items-center py-12">
        <h1 className="text-4xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          A. Ushpuras Portfolio
        </h1>
        <p className="mt-3">Projects | Skills | Contact</p>
      </header>

      <main className="flex-grow">
        <section className="my-8">
          <h2 className="text-3xl font-semibold text-center">Projects</h2>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {/* Map through your projects here */}
            <div className="flex-1 max-w-md bg-white text-black shadow-md rounded-lg p-6">
              <a href="https://spinton.app">
                <h3 className="font-semibold text-xl">SpinTon.app</h3>
              </a>
              <p>GameFi project on TON Blockchain</p>
              {/* Add more project details here */}
            </div>
            {/* Repeat for other projects */}
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-3xl font-semibold text-center">Skills</h2>
          <div className="flex justify-center gap-4 mt-4">
            {/* List your skills here */}
            <span className="bg-gray-200 text-black rounded-full px-4 py-1 text-sm font-semibold">
              JavaScript
            </span>
            {/* Repeat for other skills */}
          </div>
        </section>
      </main>

      <footer className="text-center py-8">
        <p>© 2023 Fullstack Web Developer</p>
      </footer>
    </div>
  );
};

export default PortfolioPage;
