import React from "react";

const EmployerTable = () => {
    const happyCount=5;
    const unhappyCount=5;
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-white dark:text-white">
        <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-indigo-900 dark:text-white">
          <tr>
          <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Call Duration
            </th>
            <th scope="col" className="px-6 py-3">
              Overall Customer Emotion
            </th>
            <th scope="col" className="px-6 py-3">
              Customer happy count
            </th>
            <th scope="col" className="px-6 py-3">
              Customer unhappy count
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-indigo-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
            >
              Akshaya
            </th>
            <td className="px-6 py-4">10:06:23</td>
            <td className="px-6 py-4">10:00</td>
            <td className="px-6 py-4">Happy</td>
            <td className="px-6 py-4">{happyCount}</td>
            <td className="px-6 py-4">{unhappyCount}</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default EmployerTable;
