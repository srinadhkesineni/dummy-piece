// src/pages/AboutUs.jsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"; // Updated import

import React from "react";

// Sample data for the people
const people = [
  {
    name: "Srinadh",
    role: "LEADER",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nQ8jxjlfqSRJfx-WVoYmyef9EfgnwnlMtw&s",
    instagram: "#",
    whatsapp: "#",
    github: "#",
  },
  {
    name: "Sasidhar",
    role: "fewfdsfaf",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nQ8jxjlfqSRJfx-WVoYmyef9EfgnwnlMtw&s",
    instagram: "#",
    whatsapp: "#",
    github: "#",
  },
  {
    name: "Mukhesh",
    role: "BOSS",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nQ8jxjlfqSRJfx-WVoYmyef9EfgnwnlMtw&s",
    instagram: "#",
    whatsapp: "#",
    github: "#",
  },
  {
    name: "Sai krishna",
    role: "Marketing Director",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nQ8jxjlfqSRJfx-WVoYmyef9EfgnwnlMtw&s",
    instagram: "#",
    whatsapp: "#",
    github: "#",
  },
  {
    name: "Jhonny Depp",
    role: "Developer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsa8uJsBfWRURIwUmreDmxDRErZH0kh-UKAQ&s",
    instagram: "#",
    whatsapp: "#",
    github: "#",
  },
  {
    name: "Fiona Gallagher",
    role: "Product Manager",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsa8uJsBfWRURIwUmreDmxDRErZH0kh-UKAQ&s",
    instagram: "#",
    whatsapp: "#",
    github: "#",
  },
];

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Meet Our Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {people.map((person, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {person.name}
                    </h2>
                    <p className="text-gray-600">{person.role}</p>
                  </div>
                  <div className="flex gap-4">
                    {person.instagram && (
                      <a
                        href={person.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                      >
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                      </a>
                    )}
                    {person.whatsapp && (
                      <a
                        href={person.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                      >
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                      </a>
                    )}
                    {person.github && (
                      <a
                        href={person.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                      >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
