import React from 'react';
import './HeaderTable.css'; // Make sure this CSS file is set up to style your table

/**
 * Component for displaying a header table.
 * @param {Object} props - Component props.
 * @param {Array} props.data - Data array for the table.
 * @returns {React.ReactElement} The header table component.
 * 
 * This component renders a table with data. It includes a header row and multiple data rows.
 */
const HeaderTable = ({ data }) => {
  // Display a message if no data is available
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  // Function to render the table header
  const renderTableHeader = () => {
    return (
      <tr>
        {Object.keys(data[0]).map((key, index) => (
          // Map each key of the data object to a table header cell
          <th key={index}>{key}</th>
        ))}
      </tr>
    );
  };

  // Function to render the table rows
  const renderTableRows = () => {
    return data.map((row, index) => (
      // Map each data object to a table row
      <tr key={index}>
        {Object.values(row).map((cell, cellIndex) => (
          // Map each value of the data object to a table cell
          <td key={cellIndex}>{cell}</td>
        ))}
      </tr>
    ));
  };

  return (
    <table className="header-table">
      <thead>
        {renderTableHeader()} {/* Render the table header */}
      </thead>
      <tbody>
        {renderTableRows()} {/* Render the table rows */}
      </tbody>
    </table>
  );
};

export default HeaderTable;
