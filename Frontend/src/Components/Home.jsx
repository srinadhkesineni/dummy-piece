import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Home2 from "./Home2";
// import PathView from "../PathView";
import main from "../dataset";
import dev from "../Photos/developer.png";
import CareerPaths from "./careerPaths";
import ShowPaths from "./ShowPaths";

const Home = () => {
  const [path, setPath] = useState([]);

  useEffect(() => {
    const mainPath = main.filter((path) => path.parentId === main[0].id);
    setPath(mainPath);
  }, []);
  console.log(path);

  return (
    <div>
      <CareerPaths rootId={1} />
      <div className="text-2xl text-center font-bold">{main[0]?.title}</div>
      <div className="text-lg text-center font-semibold">
        {main[0]?.description}
      </div>
      {/* make changes below based on search */}
      <ShowPaths path={path} />
    </div>
  );
};

export default Home;