import React, { useState } from "react";

const BookASession = () => {
  const [formData, setFormData] = useState({
    collegeName: "",
    email: "",
    mobile: "",
    timeSlot: "",
    calender: "",
    venue: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (formData.mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (new Date(formData.calender) <= new Date()) {
      setError("Please select a future date.");
      return;
    }

    // Clear previous errors
    setError("");

    try {
      const response = await fetch("http://localhost:5000/BookASession", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      setSubmitted(true);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setError("Failed to submit booking. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center mt-10">
      <div className="w-full max-w-lg bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Book a Session
        </h2>

        {submitted ? (
          <div className="text-center text-green-600">
            <p>Thank you! Your booking has been submitted successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && <div className="text-red-500 text-center">{error}</div>}

            <div>
              <label
                htmlFor="collegeName"
                className="block text-sm font-medium text-gray-700"
              >
                College Name
              </label>
              <select
                id="collegeName"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select your College</option>
                <option value="Aditya Engineering College">
                  Aditya Engineering College
                </option>
                <option value="Bangalore Institute of Technology">
                  Bangalore Institute of Technology
                </option>
                <option value="Delhi College of Engineering">
                  Delhi College of Engineering
                </option>
                <option value="IIT Bombay">IIT Bombay</option>
                <option value="IIT Delhi">IIT Delhi</option>
                <option value="NIT Warangal">NIT Warangal</option>
                <option value="VIT University">VIT University</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your mobile number"
              />
            </div>

            <div>
              <label
                htmlFor="calender"
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>
              <input
                type="date"
                id="calender"
                name="calender"
                value={formData.calender}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="timeSlot"
                className="block text-sm font-medium text-gray-700"
              >
                Time Slot
              </label>
              <select
                id="timeSlot"
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select a time slot</option>
                <option value="9am-11am">9 AM - 11 AM</option>
                <option value="11am-1pm">11 AM - 1 PM</option>
                <option value="2pm-4pm">2 PM - 4 PM</option>
                <option value="4pm-6pm">4 PM - 6 PM</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="venue"
                className="block text-sm font-medium text-gray-700"
              >
                Venue
              </label>
              <input
                type="text"
                id="venue"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter the venue of the program"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-500 text-white font-semibold rounded-md shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit Booking
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookASession;
