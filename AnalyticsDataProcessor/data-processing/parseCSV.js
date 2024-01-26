const fs = require('fs');
const csv = require('csv-parser');

function readCSV(filePath) {
  const results = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        resolve(results);
      })
      .on('error', reject);
  });
}


function readTXT(filePath) {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      return data;
    } catch (err) {
      console.error('Error reading TXT file:', err);
    }
  }
  

function readJSON(filePath) {
  try {
    const rawdata = fs.readFileSync(filePath);
    return JSON.parse(rawdata);
  } catch (err) {
    console.error('Error reading JSON file:', err);
  }
}

module.exports = { readCSV, readJSON, readTXT };
