import { Link } from "react-router-dom";
import main from "../dataset";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import dev from "../Photos/developer.png";
import Content from "./Content";
import CareerPaths from "./careerPaths";
import ShowPaths from "./ShowPaths";

const NewPath = () => {
  let { id } = useParams();
  id = Number(id);
  const [path, setPath] = useState([]);
  useEffect(() => {
    // const selectedPath = main.find((newpath) => newpath.id === Number(id));
    // if (selectedPath) {
    //   setPath(selectedPath);
    // } else setPath(null);
    console.log(id);
    const selectedPath = main.filter((subpath) => subpath.parentId === id);
    if (selectedPath) {
      setPath(selectedPath);
    } else {
      setPath([]);
    }
    console.log(selectedPath);
  }, [id]);

  return (
    <div className="min-h-screen">
      {path.length === 0 ? (
        // <div>No more paths</div>
        <Content id={id} />
      ) : (
        <div>
          <CareerPaths rootId={id} />
          <ShowPaths path={path} />
        </div>
      )}
    </div>
  );
};
export default NewPath;