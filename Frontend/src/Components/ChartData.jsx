// chartData.js
import main from "../dataset";

export const getChartData = (parentId) => {
  const filteredData = main
    .filter((item) => item.parentId === parentId)
    .map((item) => item.title);

  const highestSalariesData = main
    .filter((item) => item.parentId === parentId)
    .map((item) => item.avgSalary || 40); // Use avgSalary or default to 0 if null
  const numberOfLearnersData = main
    .filter((item) => item.parentId === parentId)
    .map((item) => item.totalLearners || 50);

  return {
    labels: filteredData,
    datasets: [
      {
        label: "Job Market (%)",
        data: [80, 60, 50, 85, 45, 70].slice(0, filteredData.length), // Example data
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Highest Salaries (L)",
        // data: [20, 18, 13, 25, 10, 14].slice(0, filteredData.length), // Example data
        data: highestSalariesData,
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
      {
        label: "Number of Learners (L)",
        // data: [30, 25, 20, 35, 18, 22].slice(0, filteredData.length), // Example data
        data: numberOfLearnersData,
        backgroundColor: "rgba(255, 159, 64, 0.6)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  };
};

export const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Career Path Statistics",
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          let label = context.dataset.label || "";
          let value = context.raw || 0;

          if (label.includes("Job Market")) {
            return `${label}: ${value}%`;
          } else if (`label`.includes("Highest Salaries")) {
            return `${`label`}: ${value}L`; // L stands for lakhs
          } else if (label.includes("Number of Learners")) {
            return `${`label`}: ${value}L`; // L stands for lakhs
          }
          return `${`label`}: ${value}`;
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
