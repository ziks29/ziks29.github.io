"use client";
import useStore from "../lib/store";
import { Github } from "lucide-react";

export default function Footer() {
  const { footerVisible } = useStore() as { footerVisible: boolean };

  return (
    <div
      className={`bg-gray-800 text-white ${
        footerVisible ? "opacity-100" : "opacity-0"
      } transition-all`}
    >
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <p>
            Made with{" "}
            <span role="img" aria-label="love">
              ❤️
            </span>{" "}
            by Artem Ushpuras
          </p>
          <a
            href="http://github.com/ziks29"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-1 hover:bg-white hover:text-black transition-all"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
