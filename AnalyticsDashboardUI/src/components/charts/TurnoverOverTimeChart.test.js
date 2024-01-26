import React from 'react';
import { render } from '@testing-library/react';
import TurnoverOverTimeChart from './TurnoverOverTimeChart';
import ResizeObserver from 'resize-observer-polyfill';

// Mocking ResizeObserver
global.ResizeObserver = ResizeObserver;

describe('TurnoverOverTimeChart Component', () => {
    it('renders line chart without crashing', () => {
      const mockData = [{ date: '2024', Company: 20, Competitor: 30 }];
      render(<TurnoverOverTimeChart data={mockData} metadata={{}} />);
      // Test passed if no errors are thrown during rendering
    });
    it('displays correct title from metadata', () => {
        const mockData = [{ date: '2024', Company: 20, Competitor: 30 }];
        const mockMetadata = { plot_title: 'Turnover Over Time' };
        const { getByText } = render(<TurnoverOverTimeChart data={mockData} metadata={mockMetadata} />);
        expect(getByText('Turnover Over Time')).toBeInTheDocument();
      });
  });