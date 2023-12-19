import React from "react";

const Table = () => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-white dark:text-white">
        <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-indigo-900 dark:text-white">
          <tr>
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
              Date1
            </th>
            <td className="px-6 py-4">10:00</td>
            <td className="px-6 py-4">Happy</td>
            <td className="px-6 py-4">5</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default Table;
