const express = require('express');
const cors = require('cors');
const { readCSV, readJSON, readTXT } = require('./data-processing/parseCSV');

const app = express();
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.static('../client/build')); // Serve static files from the React app

// Endpoint to serve data for a given section
app.get('/api/data/:section', async (req, res) => {
  const section = req.params.section; // '00', '01', '02', '03'.
  
  try {
    const headerTableData = await readCSV(`../analysis_outputs/${section}/header_table/data.csv`);
    const overviewTableData = await readCSV(`../analysis_outputs/${section}/overview_table/data.csv`);
    const tenureComparisonData = await readCSV(`../analysis_outputs/${section}/tenure_comparison/data.csv`);
    const turnoverOverTimeData = await readCSV(`../analysis_outputs/${section}/turnover_over_time/data.csv`);
    const pageHeaderData = await readTXT(`../analysis_outputs/${section}/page_header/data.txt`);

    // Read metadata for tenure comparison and turnover over time
    const tenureComparisonMetadata = await readJSON(`../analysis_outputs/${section}/tenure_comparison/metadata.json`);
    const turnoverOverTimeMetadata = await readJSON(`../analysis_outputs/${section}/turnover_over_time/metadata.json`);

    res.json({
      headerTable: headerTableData,
      overviewTable: overviewTableData,
      tenureComparison: {
        data: tenureComparisonData,
        metadata: tenureComparisonMetadata
      },
      turnoverOverTime: {
        data: turnoverOverTimeData,
        metadata: turnoverOverTimeMetadata
      },
      pageHeader: pageHeaderData
    });
  } catch (error) {
    console.error('Error serving data:', error);
    res.status(500).send('Error processing data');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
