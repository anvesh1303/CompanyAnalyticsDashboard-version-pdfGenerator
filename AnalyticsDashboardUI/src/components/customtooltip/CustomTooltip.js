import React from 'react';
import './CustomTooltip.css';

/**
 * Custom tooltip component for charts.
 * @param {Object} props - Component props.
 * @param {boolean} props.active - Flag to indicate if the tooltip is active.
 * @param {Array} props.payload - Data payload for the tooltip.
 * @param {string} props.label - Label for the tooltip.
 * @returns {React.ReactElement|null} The custom tooltip component.
 * 
 * This component is used to render a custom tooltip for charts. It is displayed when
 * the tooltip is active and contains data.
 */
const CustomTooltip = ({ active, payload, label }) => {
  // Render the tooltip only when it is active and has data
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}`}</p>
        {payload.map((entry, index) => (
          // Map each entry in the payload to a line in the tooltip
          <p key={`item-${index}`} className="item">
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }

  // Return null when the tooltip should not be rendered
  return null;
};

export default CustomTooltip;
