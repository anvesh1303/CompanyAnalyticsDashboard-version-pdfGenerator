// backend/test/parseCSV.test.js

const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const csv = require('csv-parser');
const { readCSV } = require('../data-processing/parseCSV');

describe('parseCSV', function() {
  describe('readCSV', function() {
    it('should read CSV data successfully', async function() {
      // Create a mock stream
      const mockStream = {
        pipe: sinon.stub().returnsThis(),
        on: sinon.stub().callsArgWith(1, null).returnsThis()
      };

      // Stub fs.createReadStream to return the mock stream
      sinon.stub(fs, 'createReadStream').returns(mockStream);

      // Mock CSV data
      const mockData = [{ column1: 'value1', column2: 'value2' }];

      // Stub csv-parser to emit 'data' events
      mockStream.on.withArgs('data').callsArgWith(1, mockData[0]);

      const filePath = 'path/to/mock.csv';
      const result = await readCSV(filePath);

      expect(result).to.deep.equal(mockData);
      fs.createReadStream.restore();
    });
  });
});
