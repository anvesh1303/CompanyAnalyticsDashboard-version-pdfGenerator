const fs = require('fs');
const path = require('path');
const { readCSV, readJSON, readTXT } = require('./data-processing/parseCSV');

const sections = ['00', '01', '02', '03']; // Add more if needed

sections.forEach(async (section) => {
  try {
    const headerTableData = await readCSV(`../analysis_outputs/${section}/header_table/data.csv`);
    const overviewTableData = await readCSV(`../analysis_outputs/${section}/overview_table/data.csv`);
    const tenureComparisonData = await readCSV(`../analysis_outputs/${section}/tenure_comparison/data.csv`);
    const turnoverOverTimeData = await readCSV(`../analysis_outputs/${section}/turnover_over_time/data.csv`);
    const pageHeaderData = await readTXT(`../analysis_outputs/${section}/page_header/data.txt`);
    const tenureComparisonMetadata = await readJSON(`../analysis_outputs/${section}/tenure_comparison/metadata.json`);
    const turnoverOverTimeMetadata = await readJSON(`../analysis_outputs/${section}/turnover_over_time/metadata.json`);

    const data = {
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
    };

    fs.writeFileSync(path.join(__dirname, `../client/public/${section}.json`), JSON.stringify(data));
  } catch (error) {
    console.error('Error generating static data:', error);
  }
});
