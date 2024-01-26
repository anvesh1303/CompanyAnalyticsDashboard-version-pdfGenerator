// HeaderTable.test.js
import React from 'react';
import { render } from '@testing-library/react';
import HeaderTable from './HeaderTable';


describe('HeaderTable Component', () => {
it('displays no data message when there is no data in HeaderTable', () => {
  const { getByText } = render(<HeaderTable data={[]} />);
  expect(getByText('No data available')).toBeInTheDocument();
});

it('renders correct data in table cells', () => {
    const mockData = [{ Department: 'Sales', Employees: 10 }];
    const { getByText } = render(<HeaderTable data={mockData} />);
    expect(getByText('Sales')).toBeInTheDocument();
    expect(getByText('10')).toBeInTheDocument();
  });

  it('renders the correct column headers', () => {
    const mockData = [{ Department: 'Sales', Employees: 10 }];
    const { getByText } = render(<HeaderTable data={mockData} />);
    expect(getByText('Department')).toBeInTheDocument();
    expect(getByText('Employees')).toBeInTheDocument();
  });
});