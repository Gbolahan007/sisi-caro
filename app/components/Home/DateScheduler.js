"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  User,
  Clock,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";
import { DayPicker } from "react-day-picker";

// ✅ Generate 3 random dates per week until end of year
function generateAvailableDates() {
  const today = new Date();
  const endOfYear = new Date(today.getFullYear(), 11, 31); // Dec 31
  const result = [];

  let current = new Date(today);

  while (current <= endOfYear) {
    // Start of the week (Sunday)
    const weekStart = new Date(current);
    weekStart.setDate(current.getDate() - current.getDay());

    // Collect all 7 days of this week
    const days = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(weekStart);
      d.setDate(weekStart.getDate() + i);
      return d;
    });

    // Pick 3 random days from this week
    const chosenDays = [];
    while (chosenDays.length < 3) {
      const randomIndex = Math.floor(Math.random() * days.length);
      const chosen = days[randomIndex];
      const iso = chosen.toISOString().split("T")[0];
      if (!chosenDays.includes(iso) && chosen >= today && chosen <= endOfYear) {
        chosenDays.push(iso);
      }
    }

    result.push(...chosenDays);
    current.setDate(current.getDate() + 7); // Move to next week
  }

  return result.sort();
}

const availableDates = generateAvailableDates();

export function DateScheduler() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showUserForm, setShowUserForm] = useState(false);
  const [userDetails, setUserDetails] = useState({ name: "", email: "" });

  const disabledMatcher = (date) => {
    const dateString = date.toISOString().split("T")[0];
    return !availableDates.includes(dateString);
  };

  const handleDateSelect = (date) => {
    if (date) {
      const dateString = date.toISOString().split("T")[0];
      if (availableDates.includes(dateString)) {
        setSelectedDate(date);
      }
    } else {
      setSelectedDate(null);
    }
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setShowUserForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleBooking = () => {
    if (userDetails.name && userDetails.email) {
      alert(
        `Booking confirmed for ${userDetails.name} (${
          userDetails.email
        }) on ${selectedDate.toDateString()} at ${selectedTime}`
      );
      setSelectedDate(null);
      setSelectedTime(null);
      setShowUserForm(false);
      setUserDetails({ name: "", email: "" });
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-xl">
        <div className="bg-white/80 backdrop-blur-xl relative overflow-hidden rounded-2xl p-4">
          <div className="relative z-10">
            <div className="text-center mb-4">
              {!showUserForm ? (
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-600 rounded-xl mb-2 shadow">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
              ) : (
                <div className="inline-flex items-center justify-center w-14 h-14 bg-green-600 rounded-xl mb-2 shadow">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
              )}
              {!showUserForm ? (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Schedule Session
                  </h3>
                  <p className="text-gray-600 text-sm">Pick your date & time</p>
                </>
              ) : (
                <>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Confirm Booking
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Provide your details below
                  </p>
                </>
              )}
            </div>

            {!showUserForm ? (
              <div className="space-y-6">
                {/* Calendar */}
                <div className="bg-white/60 rounded-xl p-4 border border-gray-200/50">
                  <DayPicker
                    mode="single"
                    selected={selectedDate || undefined}
                    onSelect={handleDateSelect}
                    disabled={disabledMatcher}
                    showOutsideDays={false}
                    className="mx-auto flex items-center justify-center"
                  />
                </div>

                {/* Time Slots */}
                {selectedDate && (
                  <div className="bg-white/60 rounded-xl p-4 border border-gray-200/50">
                    <div className="flex items-center justify-center gap-1 mb-4">
                      <Clock className="w-4 h-4 text-red-600" />
                      <p className="text-sm font-semibold text-gray-900">
                        Times for{" "}
                        {selectedDate.toLocaleDateString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"].map(
                        (time) => (
                          <button
                            key={time}
                            onClick={() => handleTimeSelect(time)}
                            className="p-3 text-sm font-medium border rounded-lg hover:border-red-400 hover:bg-red-50 hover:text-red-700 transition-all"
                          >
                            {time}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                {/* Form */}
                <div className="bg-white/60 rounded-xl p-4 border space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={userDetails.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-lg text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={userDetails.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-lg text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => setShowUserForm(false)}
                    className="flex-1 py-2 border text-sm rounded-lg bg-white"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleBooking}
                    disabled={!userDetails.name || !userDetails.email}
                    className={`flex-1 py-2 text-sm font-semibold rounded-lg flex items-center justify-center space-x-1 ${
                      userDetails.name && userDetails.email
                        ? "bg-red-600 text-white hover:bg-red-700"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    <span>Confirm</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
