"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const urls = {
  Home: "/",
  About: "#about",
  Projects: "#projects",
  Blog: "/blog",
  Contact: "#contact",
};

export default function Header() {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    // Only handle hash links
    if (url.startsWith("#")) {
      e.preventDefault();

      const element = document.getElementById(url.substring(1));
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <header className="container flex justify-center sm:justify-end items-center h-20">
      <div className="flex flex-wrap gap-x-10 gap-y-2 text-base sm:text-xl">
        {Object.entries(urls).map(([name, url]) => (
          <Link
            key={name}
            className="underline hover:text-nile-100 hover:translate-y-1 hover:scale-105 hover:underline-offset-[7px] underline-offset-[1px] transition-all ease-in-out duration-300 focus:scale-95"
            href={url}
            onClick={(e) => handleClick(e, url)}
          >
            {name}
          </Link>
        ))}
      </div>
    </header>
  );
}
