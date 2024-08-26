import { Link } from "react-router-dom";
import main from "../dataset";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Introduction from "./Introduction";
import Resources from "./Resources";

const Content = ({ id }) => {
  const [content, setContent] = useState(null);
  const [showContent, setShowContent] = useState(-1);
  const [showRoadMap, setshowRoadMap] = useState(-1);
  const [showFaq, setshowFaq] = useState(-1);
  useEffect(() => {
    const getContent = main.find((path) => path.id === id);
    console.log(getContent, id);
    setContent(getContent);
  }, []);
  const handleIndex = (ind) => {
    if (ind === showContent) {
      setShowContent(-1);
    } else {
      setShowContent(ind);
    }
    setshowRoadMap(-1);
    setshowFaq(-1);
  };
  const handleRoadmap = (ind) => {
    if (ind === showRoadMap) {
      setshowRoadMap(-1);
    } else {
      setshowRoadMap(ind);
    }
  };
  const handleFaq = (ind) => {
    if (ind === showFaq) {
      setshowFaq(-1);
    } else {
      setshowFaq(ind);
    }
    setshowRoadMap(-1);
  };

  return (
    <div>
      <div className="text-center text-xl  font-semibold mt-2">
        {content?.title}
      </div>

      {/* Introduction */}

      <div className="bg-four mt-2 ml-36 mr-36 rounded-lg ">
        <div
          className="bg-one hover:bg-three p-2 pl-6 font-semibold rounded-md cursor-pointer "
          onClick={() => handleIndex(0)}
        >
          1.Introduction
        </div>
        {showContent !== 0 ? null : (
          <Introduction title={content.title} career={content.content} />
        )}
      </div>
      
      
      {/* roadmap */}

      <div className="bg-four mt-2 ml-36 mr-36 rounded-md ">
        <div
          className="bg-one hover:bg-three p-2 pl-6 font-semibold rounded-md cursor-pointer "
          onClick={() => handleIndex(1)}
        >
          2.RoadMap
        </div>
        {showContent !== 1 ? null : (
          <div className="mt-1 bg-two p-2 pl-6 text-sm rounded-md">
            {content?.content?.roadmap.map((subcontent, i) => (
              <div key={i}>
                {/* <div> */}
                <div
                  className="font-bold bg-white hover:bg-three p-[10px] rounded-md text-md mr-48 cursor-pointer  mb-1"
                  onClick={() => handleRoadmap(i)}
                >
                  &#9658; {subcontent?.title}
                </div>
                {showRoadMap !== i ? null : (
                  <div className="pl-6 ">
                    <ul className="mb-2 bg-four rounded-lg py-2 pl-2 mr-48">
                      {subcontent?.steps.map((step) => (
                        <li>
                          <div
                            key={step.id}
                            className=" text-white pl-1 pt-1 mr-48"
                          >
                            <span>&#9679;</span> {step}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* </div> */}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* faq's */}

      <div className="bg-four mt-2 ml-36 mr-36 rounded-md ">
        <div
          className="bg-one hover:bg-three p-2 pl-6 font-semibold rounded-md cursor-pointer "
          onClick={() => handleIndex(2)}
        >
          3.FAQ's
        </div>
        {showContent !== 2 ? null : (
          <div className="mt-1 bg-two p-2 pl-6 text-sm rounded-md">
            {content?.content?.faqs.map((subFaq, i) => (
              <div key={i}>
                {/* <div> */}
                <div
                  // className="font-bold bg-three mr-48 cursor-pointer p-1 mb-1"
                  className="font-bold mb-2 bg-white hover:bg-three p-[10px] rounded-md text-md mr-48 cursor-pointer  "
                  onClick={() => handleFaq(i)}
                >
                  &#9658; {subFaq?.question}
                </div>
                {showFaq !== i ? null : (
                  <div className="pl-6 ">
                    <ul className="mb-2 bg-four rounded-lg py-2 pl-2 mr-48">
                      <li>
                        <div className=" text-white pl-1 pt-1 ">
                          <span>&#9679;</span> {subFaq?.answer}
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
                {/* </div> */}
              </div>
            ))}
          </div>
        )}

        {/* roadmap */}
      </div>

      {/* Community */}
      <div className="bg-four mt-2 ml-36 mr-36 rounded-md ">
        <div
          className="bg-one hover:bg-three p-2 pl-6 font-semibold rounded-md cursor-pointer "
          onClick={() => handleIndex(3)}
        >
          4.Community
        </div>
      </div>

      {/* Resources */}
      <div className="bg-two mt-2 ml-36 mr-36 rounded-md ">
        <div
          className="bg-one hover:bg-three p-2 pl-6 font-semibold rounded-md cursor-pointer "
          onClick={() => handleIndex(4)}
        >
          5. Resources
        </div>
        {showContent !== 4 ? null : (
          <Resources
            title={content.title}
            resources={content.content.resources}
          />
        )}
      </div>
    </div>
  );
};
export default Content;