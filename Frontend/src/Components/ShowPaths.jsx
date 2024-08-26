import { Link } from "react-router-dom";
import dev from "../Photos/developer.png";

const ShowPaths = ({ path }) => {
  return (
    <div className="grid ml-4 mr-4 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {path?.map((subpath) => (
        <Link to={`/path/${subpath.id}`}>
          {/* <div className="bg-red-400 p-1 m-2">
                {main.find((path) => path.id === subpath.id)?.title ||
                  subpath.id}
              </div> */}
          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg p-6 bg-two flex justify-between items-center">
            {/* Left Side Content */}
            <div>
              {/* <div className="text-gray-600 text-xs font-semibold mb-2">
                    ARTIFICIAL INTELLIGENCE
                  </div> */}
              <h2 className="text-md font-bold text-black mb-4">
                {subpath?.title}
              </h2>
              {subpath?.avgSalary === null ? null : (
                <div className="text-gray-800 text-lg font-semibold">
                  ₹ {subpath?.avgSalary}{" "}
                  <span className="text-gray-500 text-sm font-normal">
                    Average Salary
                  </span>
                </div>
              )}
              {subpath?.totalLearners === null ? null : (
                <div className="text-gray-800 text-lg font-semibold">
                  {subpath?.totalLearners}L+{" "}
                  <span className="text-gray-500 text-sm font-normal">
                    totalLearners
                  </span>
                </div>
              )}
            </div>

            {/* Right Side Image */}
            <div>
              <img
                src={dev}
                alt="AI Engineer"
                className="w-24 h-32 object-contain"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default ShowPaths;