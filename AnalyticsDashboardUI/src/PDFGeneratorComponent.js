import React, { useState, useEffect } from 'react';
import App from './App';
import { addViewToPDF, savePDF } from './pdfGenerator';

const PDFGeneratorComponent = () => {
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const [initialized, setInitialized] = useState(false);
  const paths = ['/', '/Sales', '/Marketing', '/CustomerService'];

  // Set initialized to true after a delay on initial render
  useEffect(() => {
    setTimeout(() => {
      setInitialized(true);
    }, 5000); // Delay to ensure initial render
  }, []);

  useEffect(() => {
    if (initialized) {
      if (currentPathIndex < paths.length) {
        setTimeout(async () => {
          // Pass true if it's the first page
          await addViewToPDF('app-container', currentPathIndex === 0);
          setCurrentPathIndex(currentPathIndex + 1);
        }, 5000); // Delay for each view
      } else {
        savePDF();
      }
    }
  }, [currentPathIndex, initialized]);
  

  return <App currentPath={paths[currentPathIndex]} />;
};

export default PDFGeneratorComponent;
