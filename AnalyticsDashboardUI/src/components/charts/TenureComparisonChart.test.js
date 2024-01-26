import React from 'react';
import { render } from '@testing-library/react';
import TenureComparisonChart from './TenureComparisonChart';
import ResizeObserver from 'resize-observer-polyfill';

// Mocking ResizeObserver
global.ResizeObserver = ResizeObserver;

describe('TenureComparisonChart Component', () => {
    it('renders bar chart without crashing', () => {
      const mockData = [{ name: '0-1 years', Company: 30, Competitor: 40 }];
      render(<TenureComparisonChart data={mockData} metadata={{}} />);
      // Test passed if no errors are thrown during rendering
    });
    
  });
