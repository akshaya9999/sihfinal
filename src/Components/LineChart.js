import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";

const LineChart = () => {
  
  
  const [options, setOptions] = useState({
    chart: {
      height: "100%",
      maxWidth: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#1C64F2",
        gradientToColors: ["#1C64F2"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: 0,
      },
    },
    series: [
      {
        name: "Count",
        data: [10, 3, 5, 7, 16, 5],
        color: "#1A56DB",
      },
    ],
    xaxis: {
      categories: [
        "HAPPY",
        "SAD",
        "NEUTRAL",
        "ANGRY",
        "HAPPY",
        "SAD",
        "HAPPY",
      ],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  });

  useEffect(() => {
    if (document.getElementById("area-chart") && typeof ApexCharts !== "undefined") {
      const chart = new ApexCharts(document.getElementById("area-chart"), options);
      chart.render();
    }
  }, [options]);

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      {/* ... rest of the component ... */}
      <div id="area-chart">
        {/* React-ApexCharts component */}
        <ApexCharts options={options} series={options.series} type="area" height="250" />
      </div>
      {/* ... rest of the component ... */}
    </div>
  );
};

export default LineChart;
