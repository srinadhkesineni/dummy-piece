import React, { useState } from "react";

function CareerPathPredictor() {
  const [selectedInterest, setSelectedInterest] = useState("");
  const [selectedStrength, setSelectedStrength] = useState("");
  const [careerPath, setCareerPath] = useState("");
  const [loading, setLoading] = useState(false);

  const interestsOptions = [
    "Artificial Intelligence, Robotics",
    "Web Development, Data Science",
    "Physics, Engineering",
    "Finance, Accounting",
    "Creative Writing, Journalism",
    "Sports Management, Coaching",
    "Film, Theatre",
    "Psychology, Sociology",
    "Foreign Languages, International Relations",
    "Software Development",
    "UI/UX Design",
    "Product Management",
    "Marketing",
    "Architecture",
    "Healthcare",
    "Environmental Science",
    "Entrepreneurship",
    "Law",
    "Education",
    "Construction, Infrastructure",
    "Data Science, Business Analysis",
    "Human Resources",
    "Art, Design",
    "Health, Nutrition",
  ];

  const strengthsOptions = [
    "Technical Skills",
    "Analytical Skills",
    "Creative Expression",
    "Strategic Thinking",
    "Attention to Detail",
    "Leadership",
    "Artistic Talent",
    "Empathy",
    "Cross-Cultural Communication",
    "Coding",
    "Design",
    "Project Management",
    "Marketing",
    "Creativity",
    "Problem Solving",
    "Environmental Awareness",
    "Innovation",
    "Legal Knowledge",
    "Communication",
    "Engineering Skills",
    "People Management",
    "Health Knowledge",
    "Writing",
  ];

  const handleInterestClick = (interest) => {
    setSelectedInterest((prev) => (prev === interest ? "" : interest));
  };

  const handleStrengthClick = (strength) => {
    setSelectedStrength((prev) => (prev === strength ? "" : strength));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedInterest && !selectedStrength) {
      alert("Select at least one interest or strength!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          interests: selectedInterest,
          strengths: selectedStrength,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data); // For debugging purposes
      setCareerPath(data.careerPath); // Assumes the server sends careerPath directly
    } catch (error) {
      console.error("There was an error making the prediction!", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center w-full mb-40">
      <div className="w-[80%]">
        <h1 className="text-center text-2xl font-bold">
          Career Path Predictor
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-6">
            <h2 className="text-center text-xl font-semibold mb-4">
              What interests you the most? Choose 1
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
              {interestsOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleInterestClick(option)}
                  className={`p-4 hover:bg-four hover:text-white border rounded-lg  ${
                    selectedInterest === option
                      ? "bg-four text-white"
                      : "bg-white"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col mb-6">
            <h2 className="text-center text-xl font-semibold mb-4">
              What are your strengths? Choose 1
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {strengthsOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleStrengthClick(option)}
                  className={`p-4 hover:bg-four hover:text-white border rounded-lg ${
                    selectedStrength === option
                      ? "bg-four text-white"
                      : "bg-white"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button
              className="p-2 bg-red-600 text-white rounded-md"
              type="submit"
            >
              Predict
            </button>
          </div>
        </form>

        {loading && (
          <div className="flex justify-center mt-4">
            <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-four"></div>
          </div>
        )}

        {careerPath && (
          <div className="mt-6 bg-four text-white p-4 rounded-md">
            <h2 className="font-semibold text-xl">Suggested Career Path:</h2>
            <p className="mt-2 font-bold">{careerPath}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CareerPathPredictor;