import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CanvasAnimation from "./animation/CanvasAnimation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const classCombiner = (...classes: (string | undefined)[]) =>
  classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classCombiner(inter.className, "bg-slate-900")}>
        <CanvasAnimation />
        {children}
      </body>
    </html>
  );
}
