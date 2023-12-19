import React, { useEffect } from "react";
import ApexCharts from "react-apexcharts";

const ChartComponent = () => {
    const options = {
        colors: ["#1A56DB", "#FDBA8C"],
        series: [
          {
            name: "Organic",
            color: "#1A56DB",
            data: [
              { x: "Mon", y: 231 },
              { x: "Tue", y: 122 },
              { x: "Wed", y: 63 },
              { x: "Thu", y: 421 },
              { x: "Fri", y: 122 },
              { x: "Sat", y: 323 },
              { x: "Sun", y: 111 },
            ],
          },
          {
            name: "Social media",
            color: "#FDBA8C",
            data: [
              { x: "Mon", y: 232 },
              { x: "Tue", y: 113 },
              { x: "Wed", y: 341 },
              { x: "Thu", y: 224 },
              { x: "Fri", y: 522 },
              { x: "Sat", y: 411 },
              { x: "Sun", y: 243 },
            ],
          },
        ],
        chart: {
          type: "bar",
          height: "320px",
          fontFamily: "Inter, sans-serif",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "70%",
            borderRadiusApplication: "end",
            borderRadius: 8,
          },
        },
        tooltip: {
          shared: true,
          intersect: false,
          style: {
            fontFamily: "Inter, sans-serif",
          },
        },
        states: {
          hover: {
            filter: {
              type: "darken",
              value: 1,
            },
          },
        },
        stroke: {
          show: true,
          width: 0,
          colors: ["transparent"],
        },
        grid: {
          show: false,
          strokeDashArray: 4,
          padding: {
            left: 2,
            right: 2,
            top: -14,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          floating: false,
          labels: {
            show: true,
            style: {
              fontFamily: "Inter, sans-serif",
              cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
            },
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
        fill: {
          opacity: 1,
        },
      };
  useEffect(() => {
    

    if (document.getElementById("column-chart") && typeof ApexCharts !== "undefined") {
      const chart = new ApexCharts(document.getElementById("column-chart"), options);
      chart.render();
    }
  }, []);

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-indigo-900 p-4 md:p-6">
      <div className="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          
          <div>
            <h5 className="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1">3.4k</h5>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Leads generated per week</p>
          </div>
        </div>
        <div>
          <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
            <svg
              className="w-2.5 h-2.5 me-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 14"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
            </svg>
            42.5%
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <dl className="flex items-center">
          <dt className="text-gray-500 dark:text-gray-400 text-sm font-normal me-1">Money spent:</dt>
          <dd className="text-gray-900 text-sm dark:text-white font-semibold">$3,232</dd>
        </dl>
        <dl className="flex items-center justify-end">
          <dt className="text-gray-500 dark:text-gray-400 text-sm font-normal me-1">Conversion rate:</dt>
          <dd className="text-gray-900 text-sm dark:text-white font-semibold">1.2%</dd>
        </dl>
      </div>

      <div id="column-chart">
        {/* React-ApexCharts component */}
        <ApexCharts options={options} series={options.series} type="bar" height="320" />
      </div>

      <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
        <div className="flex justify-between items-center pt-5">
          {/* Button */}
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="lastDaysdropdown"
            data-dropdown-placement="bottom"
            className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
            type="button"
          >
            Last 7 days
            <svg
              className="w-2.5 m-2.5 ms-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          {/* Dropdown menu */}
          <div
            id="lastDaysdropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Yesterday
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Today
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Last 7 days
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Last 30 days
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Last 90 days
                </a>
              </li>
            </ul>
          </div>
          <a
            href="#"
            className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
          >
            Leads Report
            <svg
              className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
