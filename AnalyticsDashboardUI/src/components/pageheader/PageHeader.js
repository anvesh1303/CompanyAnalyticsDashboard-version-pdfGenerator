import React from 'react';
//import { Link } from 'react-router-dom';
import './PageHeader.css'; // Ensure this CSS file exists and styles your page header

/**
 * Component for displaying the page header.
 * @param {Object} props - Component props.
 * @param {string} props.title - Title to be displayed in the header.
 * @param {boolean} props.isHomePage - Flag to indicate if the current page is the home page.
 * @returns {React.ReactElement} The page header component.
 * 
 * This component displays the page header. If it's not the home page, it splits the title 
 * and provides a link back to the home page.
 */
const PageHeader = ({ title, isHomePage }) => {
  const parts = title.split(' > ');
  const organizationPart = parts.length > 1 ? parts[0] : null;
  const restTitle = parts.length > 1 ? parts.slice(1).join(' > ') : title;

  return (
      <div className="page-header">
          {isHomePage ? (
              <h1>{title}</h1>
          ) : (
              <h1>
                  {/* Check if organizationPart is not null and then render it */}
                  {organizationPart && <span>{organizationPart}</span>}
                  {restTitle && ` > ${restTitle}`}
              </h1>
          )}
      </div>
  );
};

export default PageHeader;

