// App.js
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HeaderTable from './components/headertable/HeaderTable';
import OverviewTable from './components/overviewtable/OverviewTable';
import TenureComparisonChart from './components/charts/TenureComparisonChart';
import TurnoverOverTimeChart from './components/charts/TurnoverOverTimeChart';
import PageHeader from './components/pageheader/PageHeader';
import {transformTenureData} from './utils/transformData'
import {transformTurnoverData} from './utils/transformData'
import './App.css';
// Importing static JSON data
import data00 from './data/00.json';
import data01 from './data/01.json';
import data02 from './data/02.json';
import data03 from './data/03.json';

function App() {
  // State hooks for managing data
  const [headerData, setHeaderData] = useState([]);
  const [overviewData, setOverviewData] = useState([]);
  const [tenureComparison, setTenureComparison] = useState({ data: [], metadata: {} });
  const [turnoverOverTime, setTurnoverOverTime] = useState({ data: [], metadata: {} });
  const [pageHeader, setPageHeader] = useState('');
  const location = useLocation();

  // Effect hook to update component state based on current URL
  useEffect(() => {
    const departmentMap = {
      '/': data00,
      '/Sales': data01,
      '/Marketing': data02,
      '/CustomerService': data03
    };
    // Fetching data based on the current page route
    const sectionData = departmentMap[location.pathname] || data00;

    // Setting state with the fetched data
    setHeaderData(sectionData.headerTable);
    setOverviewData(sectionData.overviewTable);
    setTenureComparison({
      data: transformTenureData(sectionData.tenureComparison.data),
      metadata: sectionData.tenureComparison.metadata,
    });
    setTurnoverOverTime({
      data: transformTurnoverData(sectionData.turnoverOverTime.data),
      metadata: sectionData.turnoverOverTime.metadata,
    });
    setPageHeader(sectionData.pageHeader);
  }, [location.pathname]);

  return (
    <div className="App">
      {/* Page header component */}
      <PageHeader title={pageHeader} isHomePage={location.pathname === '/'} />
      {/* Container for the HeaderTable component */}
      <div className="table-container">
        <HeaderTable data={headerData} />
      </div>
      {/* Routing container for OverviewTable component */}
      <div className="table-container">
        <Routes>
          <Route path="/" element={<OverviewTable data={overviewData} isHomePage={location.pathname === '/'} />} />
          <Route path="/:departmentId" element={<OverviewTable data={overviewData} />} />
        </Routes>
      </div>
      {/* Container for the chart components */}
      <div className="charts-container">
        <TurnoverOverTimeChart data={turnoverOverTime.data} metadata={turnoverOverTime.metadata} />
        <TenureComparisonChart data={tenureComparison.data} metadata={tenureComparison.metadata} />
      </div>
    </div>
  );
}

// Wrapping App component with Router for URL management
export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
