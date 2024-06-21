import Link from "next/link";

const urls = {
  Home: "/",
  About: "/about",
  Projects: "/projects",
  Blog: "/blog",
  Contact: "/contact",
};

export default function Header() {
  return (
    //Header must be on right side and li centered in header
    <header className="container flex justify-end items-center h-16 ">
      <div className="flex gap-10">
        {Object.entries(urls).map(([name, url]) => (
          <Link
            key={name}
            className="underline hover:text-purple-100 hover:translate-y-1 hover:scale-105  hover:underline-offset-[7px] underline-offset-[1px] transition-all ease-in-out duration-300 focus:scale-95"
            href={url}
          >
            {name}
          </Link>
        ))}
      </div>
    </header>
  );
}
