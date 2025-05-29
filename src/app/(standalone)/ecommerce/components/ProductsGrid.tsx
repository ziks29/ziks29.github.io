"use client";

import { motion } from "motion/react";
import ProductCard from "./ProductCard";
import { Product } from "./types";

interface ProductsGridProps {
  readonly products: Product[];
  readonly wishlist: number[];
  readonly onAddToCart: (product: Product) => void;
  readonly onToggleWishlist: (productId: number) => void;
}

export default function ProductsGrid({
  products,
  wishlist,
  onAddToCart,
  onToggleWishlist,
}: ProductsGridProps) {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Featured Products
        </h3>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600 dark:text-gray-300">
            {products.length} products
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            isWishlisted={wishlist.includes(product.id)}
            onAddToCart={onAddToCart}
            onToggleWishlist={onToggleWishlist}
          />
        ))}
      </div>
    </main>
  );
}
