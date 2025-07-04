"use client";

interface HeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

const Header = ({ darkMode, onToggleDarkMode }: HeaderProps) => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Luxuria
            </h1>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button className="text-gray-900 dark:text-white hover:text-nile-600 dark:hover:text-nile-400 px-3 py-2 text-sm font-medium">
                Rooms
              </button>
              <button className="text-gray-600 dark:text-gray-300 hover:text-nile-600 dark:hover:text-nile-400 px-3 py-2 text-sm font-medium">
                Amenities
              </button>
              <button className="text-gray-600 dark:text-gray-300 hover:text-nile-600 dark:hover:text-nile-400 px-3 py-2 text-sm font-medium">
                Dining
              </button>
              <button className="text-gray-600 dark:text-gray-300 hover:text-nile-600 dark:hover:text-nile-400 px-3 py-2 text-sm font-medium">
                Contact
              </button>
            </div>
          </nav>
          <div className="flex items-center space-x-4">
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
            <button className="bg-nile-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-nile-700 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
