import React, { useState } from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-four text-white  shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
      <div className="p-6">
        <h3 className="text-lg font-semibold ">{course.title}</h3>
        <p className="mt-2 text-sm text-white">Rating: {course.rating}⭐ / 5</p>
        <a
          href={course.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-400 hover:text-blue-300 font-semibold"
        >
          View Course
        </a>
      </div>
    </div>
  );
};

const Resources = ({ resources }) => {
  const [AllResources, setAllResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState(resources);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Free Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Resources;