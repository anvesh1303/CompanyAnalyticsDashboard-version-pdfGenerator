// OverviewTable.test.js
import React from 'react';
import { render } from '@testing-library/react';
import OverviewTable from './OverviewTable';
import { MemoryRouter } from 'react-router-dom';


describe('OverviewTable Component', () => {
    it('displays no data message when there is no data', () => {
        const { getByText } = render(<OverviewTable data={[]} />);
        expect(getByText('No data available')).toBeInTheDocument();
      });

    it('renders correct table headers', () => {
      const mockData = [{ Department: 'Sales', Employees: 10 }];
      const { getByText } = render(<OverviewTable data={mockData} />);
      expect(getByText('Department')).toBeInTheDocument();
      expect(getByText('Employees')).toBeInTheDocument();
    });

    it('renders navigation links in table when on homepage', () => {
        const mockData = [{ Department: 'Sales', Employees: 10 }];
        const { getByText } = render(<MemoryRouter><OverviewTable data={mockData} isHomePage={true} /></MemoryRouter>);
        expect(getByText('Sales')).toHaveAttribute('href', '/Sales');
    });
  });


  describe('OverviewTable Integration Tests', () => {
    it('navigates to the correct department page on link click', async () => {
      // Render the App component wrapped in MemoryRouter to simulate routing
      const { getByText } = render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
  
      // Assuming 'Sales' is a link in the OverviewTable
      const salesLink = getByText('Sales');
      expect(salesLink).toBeInTheDocument();
  
      // Simulate clicking the 'Sales' link
      fireEvent.click(salesLink);
  
      // Wait for the navigation to occur and the new page to render
      await waitFor(() => {
        // Check if the page navigated to the 'Sales' department view
        // This can be verified by checking for unique content on the 'Sales' page
        // For example, a unique header title or specific data related to 'Sales'
        expect(getByText('Entire Organization > Sales')).toBeInTheDocument();
      });
    });
  });