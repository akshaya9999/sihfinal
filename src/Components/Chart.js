import React, { useEffect } from "react";
import Chart from "chart.js/auto";

function PieChart() {
  useEffect(() => {
    const dataPie = {
      labels: ["Happy", "Sad", "Angry"],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100],
          backgroundColor: [
            "rgb(133, 105, 241)",
            "rgb(164, 101, 241)",
            "rgb(101, 143, 241)",
          ],
          hoverOffset: 4,
        },
      ],
    };

    const configPie = {
      type: "pie",
      data: dataPie,
      options: {},
    };

    var chartPie = new Chart(document.getElementById("chartPie"), configPie);

    // Cleanup on component unmount
    return () => {
      chartPie.destroy();
    };
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <div className="py-3 px-5 bg-gray-50">Performance</div>
      <canvas className="p-1 ml-40 mr-40" id="chartPie"></canvas>
    </div>
  );
}

export default PieChart;
