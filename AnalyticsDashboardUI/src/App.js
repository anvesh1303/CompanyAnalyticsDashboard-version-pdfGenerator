// App.js
import React, { useState, useEffect } from 'react';
//import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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


function App({currentPath}) {
  console.log(currentPath)
  // State hooks for managing data
  const [headerData, setHeaderData] = useState([]);
  const [overviewData, setOverviewData] = useState([]);
  const [tenureComparison, setTenureComparison] = useState({ data: [], metadata: {} });
  const [turnoverOverTime, setTurnoverOverTime] = useState({ data: [], metadata: {} });
  const [pageHeader, setPageHeader] = useState('');
  //const location = useLocation();

  // Effect hook to update component state based on current URL
  useEffect(() => {
    const departmentMap = {
      '/': data00,
      '/Sales': data01,
      '/Marketing': data02,
      '/CustomerService': data03
    };
    // Fetching data based on the current page route
    const sectionData = departmentMap[currentPath] || data00;

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
  }, [currentPath]);

  // Determine if it's the home page
  const isHomePage = currentPath === '/';

  return (
    <div className="App" id='app-container'>
      <PageHeader title={pageHeader} isHomePage={isHomePage} />
      <div className="table-container">
        <HeaderTable data={headerData} />
      </div>
      <div className="table-container">
        {/* Render OverviewTable based on currentPath */}
        <OverviewTable data={overviewData} isHomePage={isHomePage} />
      </div>
      <div className="charts-container">
        <TurnoverOverTimeChart data={turnoverOverTime.data} metadata={turnoverOverTime.metadata} />
        <TenureComparisonChart data={tenureComparison.data} metadata={tenureComparison.metadata} />
      </div>
    </div>
  );
}

export default App;