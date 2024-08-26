// CareerPaths.js
import React from "react";
import BarChart from "./BarCharts";
// import { chartData, chartOptions } from "./chartData";
import { getChartData, chartOptions } from "./ChartData";

import NewPath from "./NewPath";
import { useParams } from "react-router-dom";

const CareerPaths = ({ rootId }) => {
  //   const { id } = useParams(); // Extract id from URL parameters
  //   const parentId = parseInt(id, 10);
  const chartData = getChartData(rootId);
  return (
    <div>
      {/* {id === null ? (
        <NewPath />
      ) : (
        <div> */}
      <div className="career-paths-container p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-5 text-center">
          Career Paths Overview
        </h1>
        <div className="bar-chart w-full max-w-3xl mx-auto">
          <BarChart data={chartData} options={chartOptions} />
        </div>
      </div>
      {/* <NewPath /> */}
    </div>
    //   )}
    // </div>
  );
};

export default CareerPaths;
