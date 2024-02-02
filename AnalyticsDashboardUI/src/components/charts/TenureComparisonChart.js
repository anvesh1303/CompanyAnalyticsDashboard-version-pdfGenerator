import React from 'react';
import './TChart.css';
import CustomLegend from '../customlegend/CustomLegend';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Label
} from 'recharts';

/**
 * Component for rendering a tenure comparison bar chart.
 * @param {Object} props - Component props.
 * @param {Array} props.data - Data array for the chart.
 * @param {Object} props.metadata - Metadata for the chart including titles and labels.
 * @returns {React.ReactElement} - The tenure comparison bar chart component.
 * 
 * This component uses Recharts to render a bar chart for comparing tenure data. It visualizes
 * data points as bars, allowing comparison between two categories, typically "Company" and "Competitor".
 * The chart is oriented vertically, with custom colors and size for bars.
 */
const TenureComparisonChart = ({ data, metadata }) => {
  console.log(data)
  // Define colors for the bars
  const midnightBlue = '#003366';
  const burntOrange = '#CC5500';

  return (
    <div className="chart-container">
      {/* Chart title from metadata */}
      {metadata?.plot_title && (
        <div className="chart-title">{metadata.plot_title}</div>
      )}
      <ResponsiveContainer width="95%" height={300}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          {/* X and Y axis with labels from metadata */}
          <XAxis type="number" height={35}>
            {metadata?.x_label && <Label value={metadata.x_label} position="insideBottom" offset={-15} fill={'black'} fontSize={12} fontWeight="bold"/>}
          </XAxis>
          <YAxis width={80} type="category" dataKey="name">
            {metadata?.y_label && <Label value={metadata.y_label} angle={-90} position="insideLeft" offset={-15} fill='black' fontSize={12} fontWeight="bold"/>}
          </YAxis>
          <Tooltip />
          <Legend wrapperStyle={{ position: 'relative', marginTop: '-25px' }} content={<CustomLegend />} />
          {/* Bars for each category with specific colors */}
          <Bar dataKey="Company" fill={midnightBlue} barSize={30} />
          <Bar dataKey="Competitor" fill={burntOrange} barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TenureComparisonChart;
