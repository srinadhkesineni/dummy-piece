import React, { useState } from "react";
import { Link } from "react-router-dom";
// Sample data for mentors with image URLs
const mentors = [
  {
    name: "John Doe",
    role: "Senior Developer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nQ8jxjlfqSRJfx-WVoYmyef9EfgnwnlMtw&s", // Add appropriate image paths or URLs
    description:
      "John has over 10 years of experience in software development and has led numerous successful projects.",
  },
  {
    name: "Jane Smith",
    role: "UX/UI Designer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nQ8jxjlfqSRJfx-WVoYmyef9EfgnwnlMtw&s",
    description:
      "Jane specializes in creating user-friendly designs and has worked with top tech companies.",
  },
  {
    name: "Michael Brown",
    role: "Product Manager",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nQ8jxjlfqSRJfx-WVoYmyef9EfgnwnlMtw&s",
    description:
      "Michael excels in product management and has a track record of delivering high-quality products on time.",
  },
  {
    name: "Emily Davis",
    role: "Data Scientist",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nQ8jxjlfqSRJfx-WVoYmyef9EfgnwnlMtw&s",
    description:
      "Emily is an expert in data analysis and machine learning, with a strong background in statistical modeling.",
  },
  {
    name: "David Wilson",
    role: "Marketing Strategist",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nQ8jxjlfqSRJfx-WVoYmyef9EfgnwnlMtw&s",
    description:
      "David has a wealth of experience in digital marketing and has helped brands achieve significant growth.",
  },
  {
    name: "Sarah Lee",
    role: "Business Analyst",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nQ8jxjlfqSRJfx-WVoYmyef9EfgnwnlMtw&s",
    description:
      "Sarah uses her analytical skills to drive business improvements and provide actionable insights.",
  },
];

const CareerMentorshipPrograms = () => {
  // State to track the index of the first visible mentor
  const [currentIndex, setCurrentIndex] = useState(0);

  // Number of mentors to display at once
  const visibleMentors = 4;

  // Handler for the previous button
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // Handler for the next button
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, mentors.length - visibleMentors)
    );
  };

  return (
    <div>
      <div className="flex justify-center w-full">
        <h1 className="font-semibold text-2xl mt-4">Workshops</h1>
      </div>
      <div className="p-10 mx-20 rounded-md bg-two mt-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
        veritatis harum quod corrupti similique, inventore dolores! Omnis quae
        nostrum deserunt delectus porro vitae culpa, architecto minima
        voluptatibus voluptas laudantium adipisci. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Neque doloribus hic sit laboriosam ullam
        aut suscipit perferendis reprehenderit fugiat adipisci maiores at,
        explicabo beatae! Quis eos hic laboriosam atque totam.
      </div>

      <div className="flex justify-center w-full">
        <h1 className="font-semibold text-2xl mt-4">Our Top Mentors</h1>
      </div>

      {/* Container for the mentor cards and navigation buttons */}
      <div className="relative flex items-center justify-center mt-8">
        {/* Left Arrow Button */}
        <button
          onClick={handlePrevious}
          className={`absolute left-20 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 ${
            currentIndex === 0 ? "invisible" : "visible"
          }`}
        >
          &#8249;
        </button>

        {/* Mentor Cards */}
        <div className="flex justify-center items-center  space-x-4 overflow-hidden">
          {mentors
            .slice(currentIndex, currentIndex + visibleMentors)
            .map((mentor, index) => (
              <div
                key={index}
                className="w-56 bg-two p-2 shadow-md h-96dv rounded-lg overflow-hidden"
              >
                {/* Mentor Image */}
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="rounded-md w-full h-36 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {mentor.name}
                  </h2>
                  <p className="text-gray-600">{mentor.role}</p>
                  <p className="text-gray-700 mt-2">{mentor.description}</p>
                </div>
              </div>
            ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          className={`absolute right-20 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 ${
            currentIndex === mentors.length - visibleMentors
              ? "invisible"
              : "visible"
          }`}
        >
          &#8250;
        </button>
      </div>
      <div className="flex mt-6 mb-40 justify-center w-full">
        <Link to={"/workshops/bookASession"}>
          <button className="bg-red-600 text-white px-2 py-1 rounded-md">
            Book A Session
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CareerMentorshipPrograms;
