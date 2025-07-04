"use client";

import {
  Header,
  HeroSection,
  FeaturesSection,
  ReviewsSection,
  AmenitiesSection,
  CTASection,
  Footer,
  useDarkMode,
} from "./components";

const Page = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
      <HeroSection />
      <FeaturesSection />
      <ReviewsSection />
      <AmenitiesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Page;
