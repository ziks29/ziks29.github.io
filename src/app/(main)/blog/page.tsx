import { Metadata } from "next";
import Blog from "../components/Blog";

export const metadata: Metadata = {
  title: "ushpuras.dev | Blog",
  description:
    "Welcome to my blog! Here, I share insights, tutorials, and thoughts on web development, technology, and more.",
};

const Page = () => {
  return (
    <div className="flex h-full flex-col relative z-10">
      <Blog />
    </div>
  );
};

export default Page;
