import React from 'react';
import { render } from '@testing-library/react';
import CustomLegend from './CustomLegend';

describe('CustomLegend Component', () => {
    it('renders without crashing', () => {
        const mockPayload = [{ color: '#000', value: 'Test Legend' }];
        render(<CustomLegend payload={mockPayload} />);
        // Test passed if no errors are thrown during rendering
    });

    it('displays legend items correctly', () => {
    const mockPayload = [{ color: '#003366', value: 'Company' }];
    const { getByText } = render(<CustomLegend payload={mockPayload} />);
    expect(getByText('Company')).toBeInTheDocument();
  });

  it('renders legend items', () => {
    const mockPayload = [{ value: 'Company', color: '#003366' }, { value: 'Competitor', color: '#CC5500' }];
    const { getByText } = render(<CustomLegend payload={mockPayload} />);
    expect(getByText('Company')).toBeInTheDocument();
    expect(getByText('Competitor')).toBeInTheDocument();
  });
});
