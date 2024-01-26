import React from 'react';
import './OverviewTable.css'; // Ensure this file exists and styles your table
import { Link } from 'react-router-dom';

/**
 * Component for displaying an overview table.
 * @param {Object} props - Component props.
 * @param {Array} props.data - Data array for the table.
 * @param {boolean} props.isHomePage - Flag to indicate if the current page is the home page.
 * @returns {React.ReactElement} The overview table component.
 * 
 * This component renders a table with clickable links on the homepage and static text on other pages.
 */
const OverviewTable = ({ data, isHomePage }) => {
  // Display a message if no data is available
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  /**
   * Renders a table cell with clickable link for department names on the homepage.
   * @param {string} value - The cell value.
   * @returns {React.ReactElement} A table cell element.
   */
  const renderDepartmentCell = (value) => {
    const departmentToPathMap = {
      'Sales': '/Sales',
      'Marketing': '/Marketing',
      'Customer Service': '/CustomerService'
    };
  
    // If it's the home page, render department names as clickable links
    if (isHomePage) {
      return <Link to={departmentToPathMap[value]}>{value}</Link>;
    }
    return value;
  };

  /**
   * Renders the table header.
   * @returns {React.ReactElement} A table row element for the header.
   */
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

  /**
   * Renders the table rows.
   * @returns {Array<React.ReactElement>} An array of table row elements.
   */
  const renderTableRows = () => {
    return data.map((row, index) => (
      // Map each data object to a table row
      <tr key={index}>
        {Object.values(row).map((value, idx) => (
          // Map each value of the data object to a table cell
          <td key={idx}>{idx === 0 && isHomePage ? renderDepartmentCell(value) : value}</td>
        ))}
      </tr>
    ));
  };

  return (
    <table className="overview-table">
      <thead>{renderTableHeader()}</thead>
      <tbody>{renderTableRows()}</tbody>
    </table>
  );
};

export default OverviewTable;
