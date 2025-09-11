"use client";
import { scheduleMeeting } from "@/app/_lib/mailAction";
import { ArrowRight, Calendar, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import toast from "react-hot-toast";

function generateAvailableDates() {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // normalize to start of today
  const endOfYear = new Date(today.getFullYear(), 11, 31);
  endOfYear.setHours(0, 0, 0, 0);

  const result = [];
  let current = new Date(today);

  while (current <= endOfYear) {
    const day = current.getDay();
    if (day >= 1 && day <= 5) {
      const isToday = current.toDateString() === today.toDateString();
      if (!(isToday && new Date().getHours() >= 17)) {
        result.push(current.toISOString().split("T")[0]);
      }
    }
    current.setDate(current.getDate() + 1);
  }

  return result;
}

const availableDates = generateAvailableDates();

export function DateScheduler() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showUserForm, setShowUserForm] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

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
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBooking = async () => {
    if (userDetails.name && userDetails.email && selectedDate && selectedTime) {
      try {
        setLoading(true);

        const formData = new FormData();
        formData.append("name", userDetails.name);
        formData.append("email", userDetails.email);
        formData.append("date", selectedDate.toDateString());
        formData.append("time", selectedTime);

        const result = await scheduleMeeting(formData);

        if (result.success) {
          toast.success(
            `Booking confirmed for ${
              userDetails.name
            } on ${selectedDate.toDateString()} at ${selectedTime}`
          );
        } else {
          toast.error("Booking saved but email failed: " + result.error);
        }

        setSelectedDate(null);
        setSelectedTime(null);
        setShowUserForm(false);
        setUserDetails({ name: "", email: "" });
      } catch (err) {
        console.error(err);
        toast.error("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full max-w-full flex justify-center">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
        <div className="bg-white/80 backdrop-blur-xl relative rounded-2xl p-4 sm:p-6">
          <div className="relative z-10">
            <div className="text-center mb-4 sm:mb-6">
              {!showUserForm ? (
                <div className="inline-flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 bg-red-600 rounded-xl mb-2 shadow">
                  <Calendar className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
              ) : (
                <div className="inline-flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 bg-green-600 rounded-xl mb-2 shadow">
                  <CheckCircle className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                </div>
              )}

              {!showUserForm ? (
                <>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
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
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white/60 rounded-xl p-3 sm:p-4 border border-gray-200/50">
                  <div className="w-full">
                    <DayPicker
                      mode="single"
                      selected={selectedDate || undefined}
                      onSelect={handleDateSelect}
                      disabled={disabledMatcher}
                      showOutsideDays={false}
                      className="flex justify-center mx-auto"
                      styles={{
                        root: {
                          fontSize: "13px",
                          maxWidth: "100%",
                          margin: "0 auto",
                        },
                        month: {
                          width: "100%",
                          maxWidth: "280px",
                          margin: "0 auto",
                        },
                        table: {
                          width: "100%",
                          maxWidth: "100%",
                          margin: "0 auto",
                        },
                        head_cell: {
                          width: "14.28%",
                          fontSize: "11px",
                          padding: "4px 1px",
                          textAlign: "center",
                        },
                        cell: {
                          width: "14.28%",
                          height: "28px",
                          padding: "1px",
                        },
                        day: {
                          width: "100%",
                          height: "100%",
                          fontSize: "11px",
                          padding: "4px 1px",
                          margin: "0",
                        },
                        caption: {
                          fontSize: "14px",
                          fontWeight: "600",
                          marginBottom: "8px",
                        },
                        nav: {
                          fontSize: "12px",
                        },
                      }}
                      modifiersStyles={{
                        selected: {
                          backgroundColor: "#dc2626",
                          color: "white",
                        },
                        today: {
                          backgroundColor: "#fef2f2",
                          color: "#dc2626",
                          fontWeight: "bold",
                        },
                        disabled: {
                          color: "#d1d5db",
                        },
                      }}
                    />
                  </div>
                </div>

                {/* Time Slots */}
                {selectedDate && (
                  <div className="bg-white/60 rounded-xl p-3 sm:p-4 border border-gray-200/50">
                    <div className="flex items-center justify-center gap-1 mb-3 sm:mb-4">
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
                            className="p-2 sm:p-3 text-xs sm:text-sm font-medium border rounded-lg hover:border-red-400 hover:bg-red-50 hover:text-red-700 transition-all duration-200 min-h-[36px] sm:min-h-[44px]"
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
              <div className="space-y-4 sm:space-y-6">
                {/* Form */}
                <div className="bg-white/60 rounded-xl p-3 sm:p-4 border space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={userDetails.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
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
                      className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => setShowUserForm(false)}
                    className="flex-1 py-2 sm:py-3 border text-sm rounded-lg bg-white hover:bg-gray-50 transition-colors duration-200 min-h-[44px] flex items-center justify-center"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleBooking}
                    disabled={
                      !userDetails.name || !userDetails.email || loading
                    }
                    className={`flex-1 py-2 sm:py-3 text-sm font-semibold rounded-lg flex items-center justify-center space-x-2 min-h-[44px] transition-all duration-200 ${
                      userDetails.name && userDetails.email && !loading
                        ? "bg-red-600 text-white hover:bg-red-700"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="w-4 h-4 animate-spin text-current"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          ></path>
                        </svg>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <span>Confirm</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
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
