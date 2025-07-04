import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InteractiveBackground from "../components/InteractiveBackground";
import { poppins } from "@/app/utils/fonts";

const classCombiner = (...classes: (string | undefined)[]) =>
  classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classCombiner(
          poppins.className,
          "flex flex-col text-nile-500 bg-nile-950 relative overflow-x-hidden"
        )}
      >
        <InteractiveBackground />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
