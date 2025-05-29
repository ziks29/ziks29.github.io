"use client";

import { motion } from "motion/react";
import { CheckCircle, X } from "lucide-react";
import { Notification } from "./types";

interface NotificationsProps {
  readonly notifications: Notification[];
  readonly onCloseNotification: (id: number) => void;
}

export default function Notifications({
  notifications,
  onCloseNotification,
}: NotificationsProps) {
  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-3">
      {notifications.map((notification) => (
        <motion.div
          key={notification.id}
          initial={{ x: 300, opacity: 0 }}
          animate={{
            x: notification.visible ? 0 : 300,
            opacity: notification.visible ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 p-4 max-w-sm hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                {notification.type === "success" && (
                  <CheckCircle className="w-6 h-6 text-green-500" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {notification.message}
                </p>
              </div>
              <button
                onClick={() => onCloseNotification(notification.id)}
                className="flex-shrink-0 text-gray-400 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-100 transition-colors duration-200 hover:scale-110"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
