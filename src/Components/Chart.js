import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";

function PieChart() {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/getEmps/")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
      })
      .then((data) => {
        console.log(data.status); // Log status code
        console.log(data.data); // Log response data
        const formattedData = data.data.map((employee) => ({
          ...employee,
          jsonData: safeJsonParse(employee.jsonData), // Use a safe JSON parse function
        }));
        setEmployeeData(formattedData || []); // Assuming data is in response.data.data
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    // Calculate overall counts
    const overallCounts = employeeData.reduce(
      (accumulator, employee) => {
        const { anger = 0, normal = 0, joy = 0 } = employee.jsonData || {};
        accumulator.anger += anger || 0;
        accumulator.normal += normal || 0;
        accumulator.joy += joy || 0;
        return accumulator;
      },
      { anger: 0, normal: 0, joy: 0 }
    );

    const dataPie = {
      labels: ["joy", "normal", "Angry"],
      datasets: [
        {
          label: "My First Dataset",
          data: [overallCounts.joy, overallCounts.normal, overallCounts.anger],
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
  }, [employeeData]); // Include employeeData in the dependency array

  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <div className="py-3 px-5 bg-gray-50 text-2xl text-indigo-900 font-bold">Performance</div>
      <canvas className="p-1 ml-40 mr-40" id="chartPie"></canvas>
    </div>
  );
}

// Safe JSON parse function
const safeJsonParse = (jsonString) => {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Error parsing JSON:", jsonString, error);
    return null; // Return null or a default value if parsing fails
  }
};

export default PieChart;
