import React from "react";
import { Link } from "react-router-dom";
// import logo from "./download.png";

const Header = () => {
  return (
    <header className="bg-four p-4 mb-6">
      {/* <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10" />
      </div> */}
      <nav>
        <ul className="flex justify-between space-x-6">
          <ul className="flex justify-between space-x-6">
            <li>
              <Link to="/search-careers" className="text-one text-lg">
                <button className="bg-red-600 text-[14px] font-semibold px-3 py-[2px]">
                  Search Your Career
                </button>
              </Link>
            </li>
          </ul>
          <ul className="flex justify-end space-x-6">
            <li>
              <Link to="/all-career-paths" className="text-one text-lg">
                All Career Paths
              </Link>
            </li>
            <li>
              <Link to="/" className="text-one text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-one text-lg">
                About
              </Link>
            </li>
            <li>
              <Link to="/workshops" className="text-one text-lg">
                Workshops
              </Link>
            </li>
            <li>
              <Link to="/predict" className="text-one text-lg">
                AI
              </Link>
            </li>
          </ul>
        </ul>
      </nav>
    </header>
  );
};

export default Header;