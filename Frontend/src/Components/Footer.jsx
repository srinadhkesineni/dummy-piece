import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center md:flex-row justify-between">
        {/* Left Section: Logo or Company Name */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Your Company</h1>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:underline">
            Terms of Service
          </a>
          <a href="/about" className="hover:underline">
            About Us
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="hover:text-gray-400"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M..."></path>
            </svg>
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            className="hover:text-gray-400"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M..."></path>
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="hover:text-gray-400"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M..."></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
