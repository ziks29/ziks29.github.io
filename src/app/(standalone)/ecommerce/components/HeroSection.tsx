"use client";

import { motion } from "motion/react";
import { ShoppingCart, Sparkles, TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-800 dark:via-purple-800 dark:to-indigo-900 text-white py-24 overflow-hidden"
    >
      {" "}
      {/* Static background elements for performance */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-300 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Floating badge */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20"
          >
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-sm font-medium">
              New Collection Available
            </span>
            <TrendingUp className="w-4 h-4 text-green-300" />
          </motion.div>
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
          >
            Discover Amazing
            <br />
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-yellow-300"
            >
              Products
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed"
          >
            Shop the latest tech, home essentials, and premium accessories.
            <br className="hidden md:block" />
            Experience quality that exceeds expectations.
          </motion.p>{" "}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
              <span className="flex items-center space-x-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Shop Now</span>
              </span>
            </button>

            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:scale-105 active:scale-95">
              View Collection
            </button>
          </motion.div>
          {/* Stats */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          >
            <div className="text-center hover:scale-105 transition-transform duration-200">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
                className="text-3xl md:text-4xl font-bold text-yellow-300"
              >
                1000+
              </motion.div>
              <div className="text-sm opacity-80">Happy Customers</div>
            </div>
            <div className="text-center hover:scale-105 transition-transform duration-200">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
                className="text-3xl md:text-4xl font-bold text-green-300"
              >
                50+
              </motion.div>
              <div className="text-sm opacity-80">Premium Products</div>
            </div>
            <div className="text-center hover:scale-105 transition-transform duration-200">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2, type: "spring", stiffness: 200 }}
                className="text-3xl md:text-4xl font-bold text-pink-300"
              >
                24/7
              </motion.div>
              <div className="text-sm opacity-80">Support</div>
            </div>
          </motion.div>
        </div>
      </div>{" "}
      {/* Scroll indicator - CSS-only animation for better performance */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </motion.section>
  );
}
