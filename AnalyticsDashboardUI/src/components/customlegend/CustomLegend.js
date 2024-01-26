import React from 'react';
import './CustomLegend.css';

/**
 * CustomLegend Component for Charts
 * @param {Object} props - Component props
 * @param {Array} props.payload - Payload data for legend items
 * @returns {React.ReactElement} - Rendered component
 *
 * This component is used to render a custom legend for charts. It displays a colored rectangle
 * for each item in the legend, representing different data series or categories in the chart.
 */
const CustomLegend = ({ payload }) => {
  return (
    <div className="custom-legend">
      {payload.map((entry, index) => (
        // Mapping each legend entry to a div with a colored rectangle and text
        <div key={`item-${index}`} className="legend-item">
          <svg className="legend-icon" width="20" height="10">
            <rect fill={entry.color} width="10" height="10" />
          </svg>
          <span className='legend-txt'>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

export default CustomLegend;
