"use client";
import React, { useState } from "react";
import {
  Header,
  HeroSection,
  ProductsGrid,
  CartSidebar,
  Notifications,
  Product,
  CartItem,
  Notification,
  CheckoutInfo,
  mockProducts,
} from "./components";
import { ThemeProvider } from "./components/ThemeContext";

export default function EcommercePage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutMode, setIsCheckoutMode] = useState(false);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [notificationId, setNotificationId] = useState(0); // Helper functions to reduce nesting
  const updateCartItemQuantity = (items: CartItem[], productId: number) => {
    return items.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
  };

  const updateItemQuantity = (item: CartItem, change: number) => {
    const newQuantity = item.quantity + change;
    return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
  };

  const filterPositiveQuantity = (items: CartItem[]) => {
    return items.filter((item) => item.quantity > 0);
  };

  const markNotificationAsHidden = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, visible: false } : n))
    );
  };

  const removeNotificationById = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const hideNotification = (id: number) => {
    markNotificationAsHidden(id);
    setTimeout(() => removeNotificationById(id), 300);
  };

  const addNotification = (
    message: string,
    type: "success" | "error" | "info" = "success"
  ) => {
    const id = notificationId + 1;
    setNotificationId(id);

    const notification: Notification = {
      id,
      message,
      type,
      visible: true,
    };

    setNotifications((prev) => [...prev, notification]);

    // Auto-remove notification after 3 seconds
    setTimeout(() => hideNotification(id), 3000);
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return updateCartItemQuantity(prevCart, product.id);
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    // Handle notifications outside of state updater to prevent duplicates
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      addNotification(`Updated ${product.name} quantity in cart!`);
    } else {
      addNotification(`${product.name} added to cart!`);
    }
  };

  const updateQuantity = (id: number, change: number) => {
    setCart((prevCart) => {
      const updatedItems = prevCart.map((item) => {
        return item.id === id ? updateItemQuantity(item, change) : item;
      });
      return filterPositiveQuantity(updatedItems);
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  const toggleWishlist = (productId: number) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleCheckout = () => {
    setIsCheckoutMode(true);
  };

  const handleBackToCart = () => {
    setIsCheckoutMode(false);
  };

  const handleCompleteOrder = (checkoutInfo: CheckoutInfo) => {
    // Simulate order processing
    addNotification("Order placed successfully! 🎉", "success");
    setCart([]);
    setIsCartOpen(false);
    setIsCheckoutMode(false);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Header
          totalItems={getTotalItems()}
          onCartClick={() => setIsCartOpen(true)}
        />
        <HeroSection />
        <ProductsGrid
          products={mockProducts}
          wishlist={wishlist}
          onAddToCart={addToCart}
          onToggleWishlist={toggleWishlist}
        />{" "}
        <CartSidebar
          isOpen={isCartOpen}
          cart={cart}
          onClose={() => setIsCartOpen(false)}
          onUpdateQuantity={updateQuantity}
          onRemoveFromCart={removeFromCart}
          totalPrice={getTotalPrice()}
          isCheckoutMode={isCheckoutMode}
          onCheckout={handleCheckout}
          onBackToCart={handleBackToCart}
          onCompleteOrder={handleCompleteOrder}
        />
        <Notifications
          notifications={notifications}
          onCloseNotification={hideNotification}
        />
      </div>
    </ThemeProvider>
  );
}
