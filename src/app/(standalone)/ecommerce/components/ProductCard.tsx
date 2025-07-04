"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Plus, Star, Heart } from "lucide-react";
import { Product } from "./types";

interface ProductCardProps {
  readonly product: Product;
  readonly index: number;
  readonly isWishlisted: boolean;
  readonly onAddToCart: (product: Product) => void;
  readonly onToggleWishlist: (productId: number) => void;
}

export default function ProductCard({
  product,
  index,
  isWishlisted,
  onAddToCart,
  onToggleWishlist,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg dark:hover:shadow-xl transition-all duration-200"
    >
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={256}
          className="w-full h-64 object-contain transition-transform duration-200 hover:scale-105"
        />
        <button
          onClick={() => onToggleWishlist(product.id)}
          className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110"
        >
          <Heart
            className={`w-5 h-5 transition-colors duration-200 ${
              isWishlisted
                ? "fill-red-500 text-red-500"
                : "text-gray-400 dark:text-gray-300 hover:text-red-400"
            }`}
          />
        </button>
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {product.category}
        </div>
      </div>{" "}
      <div className="p-6">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {product.name}
        </h4>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
          {product.description}
        </p>

        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={`star-${product.id}-${i}`}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 hover:scale-105 active:scale-95 flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
