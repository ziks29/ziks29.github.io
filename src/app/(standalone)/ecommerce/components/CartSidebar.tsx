"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  X,
  ShoppingCart,
  Minus,
  Plus,
  ArrowLeft,
  CreditCard,
  Truck,
} from "lucide-react";
import { CartItem, CheckoutInfo, OrderSummary } from "./types";

interface CheckoutFormProps {
  readonly checkoutInfo: CheckoutInfo;
  readonly onInputChange: (field: keyof CheckoutInfo, value: string) => void;
  readonly cart: CartItem[];
  readonly orderSummary: OrderSummary;
}

function CheckoutForm({
  checkoutInfo,
  onInputChange,
  cart,
  orderSummary,
}: CheckoutFormProps) {
  return (
    <div className="space-y-6">
      {/* Order Summary */}
      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
          Order Summary
        </h4>
        <div className="space-y-2 text-sm">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">
                {item.name} × {item.quantity}
              </span>
              <span className="font-medium dark:text-white">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
          <div className="border-t border-gray-200 dark:border-gray-600 pt-2 mt-2">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
              <span className="dark:text-white">
                ${orderSummary.subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">Tax</span>
              <span className="dark:text-white">
                ${orderSummary.tax.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300 flex items-center">
                <Truck className="w-4 h-4 mr-1" />
                Shipping
              </span>
              <span className="dark:text-white">
                {orderSummary.shipping === 0
                  ? "Free"
                  : `$${orderSummary.shipping.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between font-semibold text-lg border-t border-gray-200 dark:border-gray-600 pt-2 mt-2">
              <span className="dark:text-white">Total</span>
              <span className="dark:text-white">
                ${orderSummary.total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Shipping Information */}
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-900 dark:text-white">
          Shipping Information
        </h4>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="First Name"
            value={checkoutInfo.firstName}
            onChange={(e) => onInputChange("firstName", e.target.value)}
            className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={checkoutInfo.lastName}
            onChange={(e) => onInputChange("lastName", e.target.value)}
            className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          value={checkoutInfo.email}
          onChange={(e) => onInputChange("email", e.target.value)}
          className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="tel"
          placeholder="Phone"
          value={checkoutInfo.phone}
          onChange={(e) => onInputChange("phone", e.target.value)}
          className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Address"
          value={checkoutInfo.address}
          onChange={(e) => onInputChange("address", e.target.value)}
          className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="grid grid-cols-3 gap-3">
          <input
            type="text"
            placeholder="City"
            value={checkoutInfo.city}
            onChange={(e) => onInputChange("city", e.target.value)}
            className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="State"
            value={checkoutInfo.state}
            onChange={(e) => onInputChange("state", e.target.value)}
            className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="ZIP Code"
            value={checkoutInfo.zipCode}
            onChange={(e) => onInputChange("zipCode", e.target.value)}
            className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Payment Information */}
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-900 dark:text-white">
          Payment Information
        </h4>
        <div className="flex space-x-2">
          {(["credit", "debit", "paypal"] as const).map((method) => (
            <button
              key={method}
              onClick={() => onInputChange("paymentMethod", method)}
              className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
                checkoutInfo.paymentMethod === method
                  ? "bg-blue-100 dark:bg-blue-900 border-blue-500 text-blue-700 dark:text-blue-300"
                  : "bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {method.charAt(0).toUpperCase() + method.slice(1)}
            </button>
          ))}
        </div>
        {checkoutInfo.paymentMethod !== "paypal" && (
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Card Number"
              value={checkoutInfo.cardNumber}
              onChange={(e) => onInputChange("cardNumber", e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="MM/YY"
                value={checkoutInfo.expiryDate}
                onChange={(e) => onInputChange("expiryDate", e.target.value)}
                className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="CVV"
                value={checkoutInfo.cvv}
                onChange={(e) => onInputChange("cvv", e.target.value)}
                className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface CartSidebarProps {
  readonly isOpen: boolean;
  readonly cart: CartItem[];
  readonly onClose: () => void;
  readonly onUpdateQuantity: (id: number, change: number) => void;
  readonly onRemoveFromCart: (id: number) => void;
  readonly totalPrice: number;
  readonly isCheckoutMode?: boolean;
  readonly onCheckout?: () => void;
  readonly onBackToCart?: () => void;
  readonly onCompleteOrder?: (checkoutInfo: CheckoutInfo) => void;
}

export default function CartSidebar({
  isOpen,
  cart,
  onClose,
  onUpdateQuantity,
  onRemoveFromCart,
  totalPrice,
  isCheckoutMode = false,
  onCheckout,
  onBackToCart,
  onCompleteOrder,
}: CartSidebarProps) {
  const [checkoutInfo, setCheckoutInfo] = useState<CheckoutInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    paymentMethod: "credit",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (field: keyof CheckoutInfo, value: string) => {
    setCheckoutInfo((prev: CheckoutInfo) => ({ ...prev, [field]: value }));
  };

  const handleSubmitOrder = () => {
    if (onCompleteOrder) {
      onCompleteOrder(checkoutInfo);
    }
  };

  const calculateOrderSummary = () => {
    const subtotal = totalPrice;
    const tax = subtotal * 0.08; // 8% tax
    const shipping = subtotal > 50 ? 0 : 9.99; // Free shipping over $50
    const total = subtotal + tax + shipping;

    return { subtotal, tax, shipping, total };
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-xl"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              {isCheckoutMode && onBackToCart && (
                <button
                  onClick={onBackToCart}
                  className="p-1 text-gray-400 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-100 transition-colors hover:scale-105 active:scale-95"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              )}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {isCheckoutMode ? "Checkout" : "Shopping Cart"}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-100 transition-colors hover:scale-105 active:scale-95"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {isCheckoutMode ? (
              <CheckoutForm
                checkoutInfo={checkoutInfo}
                onInputChange={handleInputChange}
                cart={cart}
                orderSummary={calculateOrderSummary()}
              />
            ) : (
              <>
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-300">
                      Your cart is empty
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center space-x-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 dark:text-white">
                            {item.name}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            ${item.price}
                          </p>
                          <div className="flex items-center space-x-2 mt-2">
                            <button
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-200 hover:scale-110 active:scale-90"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-3 py-1 bg-white dark:bg-gray-600 dark:text-white rounded border dark:border-gray-500 text-sm font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-200 hover:scale-110 active:scale-90"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => onRemoveFromCart(item.id)}
                          className="p-2 text-gray-400 dark:text-gray-300 hover:text-red-500 transition-all duration-200 hover:scale-110 active:scale-90"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {cart.length > 0 && !isCheckoutMode && (
            <div className="border-t border-gray-200 dark:border-gray-600 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  Total:
                </span>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <button
                onClick={onCheckout}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 hover:scale-[1.02] active:scale-98"
              >
                Checkout
              </button>
            </div>
          )}

          {cart.length > 0 && isCheckoutMode && (
            <div className="border-t border-gray-200 dark:border-gray-600 p-6">
              <button
                onClick={handleSubmitOrder}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-[1.02] active:scale-98"
              >
                <CreditCard className="w-5 h-5" />
                <span>Complete Order</span>
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
