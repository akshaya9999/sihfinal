import React, { useEffect, useState } from "react";

const EmployerTable = () => {
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

  // Safe JSON parse function
  const safeJsonParse = (jsonString) => {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.error("Error parsing JSON:", jsonString, error);
      return null; // Return null or a default value if parsing fails
    }
  };

  // Extract unique emotion keys from the data
  const emotionKeys = [...new Set(employeeData.flatMap((employee) => Object.keys(employee.jsonData || {})))];

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
            {emotionKeys.map((emotion) => (
              <th key={emotion} scope="col" className="px-6 py-3">
                {emotion}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee) => (
            <tr
              key={employee.id}
              className="bg-white border-b dark:bg-indigo-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
              >
                {employee.name}
              </th>
              <td className="px-6 py-4">{employee.date}</td>
              {emotionKeys.map((emotion) => (
                <td key={emotion} className="px-6 py-4">
                  {employee.jsonData?.[emotion] || 0}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployerTable;
