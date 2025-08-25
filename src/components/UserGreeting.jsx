import React, { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

/**
 * Get time-based greeting based on current hour
 * @returns {string} Appropriate greeting message
 */
export const getGreeting = () => {
  try {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  } catch (error) {
    console.error("Error calculating greeting:", error);
    return "Hello"; // Fallback greeting
  }
};

/**
 * Format date in "Day, Month DD YYYY" format
 * @param {Date} date - Date to format
 * @returns {string} Formatted date string
 */
export const formatDate = (date) => {
  try {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Today"; // Fallback date display
  }
};

const UserGreeting = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [greeting, setGreeting] = useState(getGreeting());

  useEffect(() => {
    // Update date and greeting every minute
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentDate(now);
      setGreeting(getGreeting());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <Calendar size={20} className="text-gray-500" />
        <span>{formatDate(currentDate)}</span>
      </div>
      <div className="text-4xl font-bold text-gray-600">
        {greeting}
      </div>
    </div>
  );
};

export default UserGreeting;
