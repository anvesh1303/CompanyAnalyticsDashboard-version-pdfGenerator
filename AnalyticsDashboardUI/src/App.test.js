// App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import ResizeObserver from 'resize-observer-polyfill';

// Mocking ResizeObserver
global.ResizeObserver = ResizeObserver;

test('renders App component without crashing', () => {
  render(<App />);
});
