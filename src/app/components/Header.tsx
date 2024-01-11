"use client";
import useStore from "../lib/store";

export default function Header() {
  const { headerVisible } = useStore() as { headerVisible: boolean };

  return (
    <div
      className={`bg-gray-800 text-white ${
        headerVisible ? "opacity-100" : "opacity-0"
      } transition-all`}
    >
      <div className="container">
        <div className="flex justify-between items-center py-2">
          <div>
            <a href="#" className="text-sm font-bold text-gray-100">
              ushpuras.me
            </a>
          </div>
          <div>
            <a
              href="#"
              className="inline-block py-2 px-4 text-gray-400 hover:text-gray-100"
            >
              Home
            </a>
            <a
              href="#"
              className="inline-block py-2 px-4 text-gray-400 hover:text-gray-100"
            >
              About
            </a>
            <a
              href="#"
              className="inline-block py-2 px-4 text-gray-400 hover:text-gray-100"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
