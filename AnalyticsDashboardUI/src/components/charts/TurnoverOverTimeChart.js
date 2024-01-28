import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import CustomTooltip from '../customtooltip/CustomTooltip';
import './TChart.css'
import CustomLegend from '../customlegend/CustomLegend';

// Array of colors used for the lines in the chart
const colors = ['#003366', '#CC5500', '#008000', '#FF0000'];

/**
 * Component for rendering a turnover over time line chart.
 * @param {Object} props - Component props.
 * @param {Array} props.data - Data array for the chart.
 * @param {Object} props.metadata - Metadata for the chart including titles and labels.
 * @returns {React.ReactElement} - The turnover over time chart component.
 * 
 * This component uses Recharts to render a line chart. It is used to display data such as 
 * turnover over time. The component will display a line for each key in the data array.
 */
const TurnoverOverTimeChart = ({ data, metadata }) => {
  // Display a message if no data is available for the chart
  if (!data || data.length === 0) {
    return <div>No data available for chart.</div>;
  }

  // Filtering keys for line data, excluding the 'date' key
  const dataKeys = Object.keys(data[0]).filter(key => key !== 'date');

  return (
    <div className="chart-container">
      {/* Chart title from metadata */}
      {metadata?.plot_title && (
        <div className="chart-title">{metadata.plot_title}</div>
      )}
      <ResponsiveContainer width="80%" height={300}>
        <LineChart data={data} >
          {/* X and Y axis with labels from metadata */}
          <XAxis dataKey="date" height={20}>
            {metadata?.x_label && <Label value={metadata.x_label} position="insideBottom" fill='black' offset={-15} fontSize={12} fontWeight="bold"/>}
          </XAxis>
          <YAxis >
            {metadata?.y_label && <Label value={metadata.y_label} angle={-90} position="insideLeft" fill='black' fontSize={12} fontWeight="bold"/>}
          </YAxis>
          <Tooltip content={<CustomTooltip />} />
    
          <Legend content={CustomLegend} wrapperStyle={{ position: 'relative', marginTop: '-50px', marginLeft: '-25px' }}/>
          
          {/* Mapping each data key to a Line component */}
          {dataKeys.map((key, index) => (
            <Line
              key={index}
              type="linear"
              dataKey={key}
              stroke={colors[index % colors.length]}
              strokeWidth={3}
              dot={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TurnoverOverTimeChart;
