# Company Analytics Dashboard

## Introduction
This document serves as a comprehensive guide to the Company Analytics Dashboard. This web application is designed to present and interact with various organizational metrics, aiming to provide a simplified yet detailed view of company data for hypothetical clients.

## Project Overview
The Company Analytics Dashboard is a web-based tool that transforms raw company data into an interactive and visually appealing report. This report aims to simplify the complexity of organizational data while maintaining depth and accuracy in insights.

## Features and Functionalities
•   Interactive Data Visualization: Dynamic and responsive data presentation using React.js and Recharts.
•   Data Segmentation: Detailed insights into specific departments such as Sales, Marketing, and Customer Service.
•   User-Friendly Interface: Easy navigation and understanding.

## Interactive Functionality
•   Homepage View: Showcases organizational data. Overview table includes clickable department names.
•   Department View: Clicking on department names navigates to a page with specific data for that department.
•   Home Navigation: "Entire Organization" in the header acts as a navigational link back to the homepage.

## Client Access Guide
### Accessing the Dashboard
### Client Access Instructions:
1.  Download and Extract: Download and extract the provided zip file.
2.  Open index.html: Located in the extracted build folder, open it in a web browser to start exploring the dashboard.
3.  Offline Accessibility: Once extracted, the report is fully functional offline.

## Navigating the Dashboard
•   Homepage: Displays overall organization data.
•   Department Data: Clickable department names in the overview table to see specific department data.
•   Returning Home: Click "Entire Organization" in the page header to go back to the initial view from a department view.

## Understanding the Views
•   Homepage View:
•   Displays overall organization data.
•   Overview table with interactive department links.
•   Company-wide charts for turnover and tenure comparison.
•   Department View (e.g., Sales):
•   Page header: "Entire Organization > Sales".
•   Detailed view of department-specific data.
•   Non-interactive overview table.
•   Charts showing specific department data.
•   "Entire Organization" in the header is a clickable link for easy navigation back to the homepage.

## Tooltip Feature
•   Functionality: Hover over data points in charts to view detailed information through a custom tooltip.

## Technical Implementation
## Technologies Used
•   React.js: Chosen for its efficiency in building dynamic user interfaces and its vast ecosystem, which provides tools and libraries that enhance development speed and application performance.
•   Node.js: Used for backend data processing, leveraging its non-blocking I/O and event-driven architecture to handle multiple data transformation tasks efficiently.
•   Recharts: A versatile charting library that seamlessly integrates with React, providing a wide range of customizable chart options that enhance data visualization.

## Automated Data Pipeline
The project includes an automated pipeline, implemented in Node.js, which processes CSV and TXT source data, converting them into a structured JSON format suitable for the React frontend. This pipeline automates data transformation, ensuring consistency and efficiency in handling the source data.

## Data Processing
•   Automated Conversion: The Node.js/Express backend scripts read, process, transform the source data into JSON format and places the transformed data in the React application's src/data directory for direct utilization.
•   Assumptions: The pipeline assumes consistent data structure and formats as provided, with departmental names and other key fields maintained for accurate data parsing and display.

## Interactive Functionality
•   Interactive elements like clickable links allow seamless navigation between different views or departmental information, enhancing user engagement and data exploration.

## Output Format
•   The output is a static HTML website, generated from the React application.

## Development and Version Control
### Git Workflow
•   Implemented a structured Git branching strategy for efficient version control and feature integration:
•   main branch for stable releases.
•   develop branch for ongoing development.
•   Feature-specific branches for new functionalities.

## Testing Approach
•   Focused on frontend testing, particularly for component rendering and interaction.
•   Tests ensure the accuracy of data visualization and the integrity of user interface elements.

## Documentation and Confidentiality
•   Comprehensive documentation of code has been maintained throughout the project.
•   Strict adherence to confidentiality guidelines, preventing any public distribution of assessment materials.

## Conclusion
The Company Analytics Dashboard is a testament to the effective application of modern web technologies in creating an accessible, informative, and client-friendly platform for data visualization. It caters to both technical and non-technical users, simplifying complex organizational data analysis.

For Support or Queries: k03n13@gmail.com

![image](https://github.com/anvesh1303/CompanyAnalyticsDashBoard-1/assets/98427744/b4d53cf1-3cf3-45bd-8dd4-2e3e3663a56f)

