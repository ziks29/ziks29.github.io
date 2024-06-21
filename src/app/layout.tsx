import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { poppins } from "@/app/utils/fonts";

const classCombiner = (...classes: (string | undefined)[]) =>
  classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classCombiner(
          poppins.className,
          "flex flex-col text-nile-500 bg-nile-950 "
        )}
      >
        {/* <CanvasAnimation /> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
