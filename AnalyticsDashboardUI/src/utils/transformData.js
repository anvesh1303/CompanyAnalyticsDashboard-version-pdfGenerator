// transformData.js
// This file contains functions to transform raw data into a suitable format for the components to use

/**
 * Transform tenure data for the bar chart.
 * @param {Array} rawData - The raw data array from the JSON file.
 * @returns {Array} Transformed data array suitable for the bar chart.
 * 
 * This function processes raw data to a format where each object has 'name', 'Company', and 'Competitor' keys.
 * 'name' key is used for category labels, and 'Company' and 'Competitor' are the data points for each category.
 */
export const transformTenureData = (rawData) => {
  // Object to hold the transformed data
  const transformedData = {};

  // Iterate over each item in the raw data
  rawData.forEach(item => {
    const category = item.y; // Category for the data point
    const series = item.series; // Series name (e.g., 'Company', 'Competitor')
    const value = parseFloat(item.x); // Value of the data point

    // Initialize the category in transformed data if not present
    if (!transformedData[category]) {
      transformedData[category] = {};
    }

    // Assign the value to the respective series within the category
    transformedData[category][series] = value;
  });

  // Convert the transformed data object to an array of objects for the chart
  return Object.keys(transformedData).map(category => ({
    name: category,
    Company: transformedData[category]['Company'] || 0, 
    Competitor: transformedData[category]['Competitor'] || 0
  }));
};

/**
 * Transform turnover data for the line chart.
 * @param {Array} rawData - The raw data array from the JSON file.
 * @returns {Array} Transformed data array suitable for the line chart.
 * 
 * This function converts raw data into a format where each object represents a data point in the line chart,
 * with 'date', 'Company', and 'Competitor' as keys.
 */
export const transformTurnoverData = (rawData) => {
  // Use the reduce method to build the final data structure
  return rawData.reduce((acc, { x, y, series }) => {
    // Find if there's an existing entry with the same date
    const existingEntry = acc.find(entry => entry.date === x);

    // If found, update the existing entry with the new series data
    if (existingEntry) {
      existingEntry[y] = parseFloat(series); 
    } else {
      // Otherwise, push a new entry to the accumulator
      acc.push({ date: x, [y]: parseFloat(series) });
    }
    return acc;
  }, []); // Initialize the accumulator as an empty array
};
