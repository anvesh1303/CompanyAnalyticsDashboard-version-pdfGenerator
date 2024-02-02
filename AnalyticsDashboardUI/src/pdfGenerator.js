import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// Assuming a typical web page size, adjust as needed
const pageWidth = 210; // in mm (A4 width)
const pageHeight = pageWidth * (11 / 8.5); // keeping the web aspect ratio

const pdf = new jsPDF({
  orientation: 'landscape',
  unit: 'mm',
  format: [pageWidth, pageHeight]
});

export const addViewToPDF = async (elementId, isFirstPage) => {
  const element = document.getElementById(elementId);
  const canvas = await html2canvas(element, {
    windowWidth: element.scrollWidth,
    windowHeight: element.scrollHeight
  });
  const imgData = canvas.toDataURL('image/png');

  // Set the dimensions of the PDF to match the element
  const imgWidth = pdf.internal.pageSize.getWidth();
  const imgHeight = pdf.internal.pageSize.getHeight();

  // Add new page only if it's not the first view
  if (!isFirstPage) {
    pdf.addPage([pageWidth, pageHeight], 'landscape');
  }

  pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
};

export const savePDF = () => {
  pdf.save('app_views.pdf');
};
