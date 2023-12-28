import React from "react";
import "./Table.css";

interface TableProps<T> {
  data: T[];
}

const Table = <T extends Record<string, any>>({ data }: TableProps<T>) => {
  if (data.length === 0) {
    return <div></div>;
  }

  const headers = Object.keys(data[0]);

  return (
    <table className="table-auto">
      <thead>
        <tr>
          {headers?.map((header, index) => (
            <th key={index} className="px-4 py-2">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers?.map((header, columnIndex) => (
              <td key={columnIndex} className="border px-4 py-2">
                {row[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
