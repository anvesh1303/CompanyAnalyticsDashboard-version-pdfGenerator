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


  
