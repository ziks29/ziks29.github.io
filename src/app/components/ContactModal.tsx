"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, MessageCircle, Mail, User } from "lucide-react";
import { contactConfig } from "../utils/contact-config";
import emailjs from "@emailjs/browser";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Reset form when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setSubmitStatus("idle");
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Check if EmailJS is configured
      const { serviceId, templateId, publicKey } = contactConfig.emailJs;

      if (serviceId && templateId && publicKey) {
        // Debug log (remove in production)
        console.log("EmailJS Config:", {
          serviceId,
          templateId,
          publicKey: publicKey.substring(0, 5) + "...",
        });

        // Use EmailJS if configured
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          to_email: contactConfig.email,
          message: formData.message,
          subject: `Project Inquiry from ${formData.name}`,
        };

        await emailjs.send(serviceId, templateId, templateParams, publicKey);

        setSubmitStatus("success");

        // Close modal after success
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        // Fallback to mailto if EmailJS not configured
        const subject = encodeURIComponent(
          `Project Inquiry from ${formData.name}`
        );
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );

        window.location.href = `mailto:${contactConfig.email}?subject=${subject}&body=${body}`;

        setSubmitStatus("success");

        // Close modal after success
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleTelegramContact = () => {
    // Use configuration for Telegram username
    window.open(`https://t.me/${contactConfig.telegramUsername}`, "_blank");
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md bg-nile-950 border border-nile-800 rounded-xl shadow-2xl shadow-nile-900/50 max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3, ease: "backOut" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-nile-800">
              <div>
                <h2 className="text-xl font-semibold text-nile-200">
                  Let&apos;s Work Together
                </h2>
                <p className="text-sm text-nile-400 mt-1">
                  Tell me about your project
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-nile-400 hover:text-nile-200 hover:bg-nile-800/50 rounded-lg transition-all duration-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Quick Contact Options */}
            <div className="p-6 border-b border-nile-800">
              <p className="text-sm text-nile-400 mb-4">
                Quick contact options:
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleTelegramContact}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 text-sm font-medium"
                >
                  <MessageCircle size={16} />
                  Telegram
                </button>
                <button
                  onClick={() =>
                    (window.location.href = `mailto:${contactConfig.email}`)
                  }
                  className="flex items-center gap-2 px-4 py-2 bg-nile-800 hover:bg-nile-700 text-nile-200 rounded-lg transition-all duration-200 text-sm font-medium"
                >
                  <Mail size={16} />
                  Email
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="p-6">
              <p className="text-sm text-nile-400 mb-6">
                Or fill out the form below:
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-nile-300 mb-2"
                  >
                    <User size={16} className="inline mr-2" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-nile-900/50 border rounded-lg text-nile-200 placeholder-nile-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-nile-600 ${
                      errors.name
                        ? "border-red-500"
                        : "border-nile-700 focus:border-nile-600"
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-nile-300 mb-2"
                  >
                    <Mail size={16} className="inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-nile-900/50 border rounded-lg text-nile-200 placeholder-nile-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-nile-600 ${
                      errors.email
                        ? "border-red-500"
                        : "border-nile-700 focus:border-nile-600"
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-nile-300 mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 bg-nile-900/50 border rounded-lg text-nile-200 placeholder-nile-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-nile-600 resize-none ${
                      errors.message
                        ? "border-red-500"
                        : "border-nile-700 focus:border-nile-600"
                    }`}
                    placeholder="Tell me about your project, requirements, timeline, etc."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === "success"}
                  className="w-full flex items-center justify-center gap-2 bg-nile-700 hover:bg-nile-600 disabled:bg-nile-800 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg transition-all duration-200 font-medium"
                >
                  {(() => {
                    if (isSubmitting) {
                      return (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      );
                    }

                    if (submitStatus === "success") {
                      return (
                        <>
                          <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-1 bg-white rounded" />
                          </div>
                          Message Sent!
                        </>
                      );
                    }

                    return (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    );
                  })()}
                </button>

                {submitStatus === "error" && (
                  <p className="text-red-400 text-sm text-center">
                    Something went wrong. Please try again or contact me
                    directly.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
