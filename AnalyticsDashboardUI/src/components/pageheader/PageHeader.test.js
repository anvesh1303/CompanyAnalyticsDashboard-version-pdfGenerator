// PageHeader.test.js
import React from 'react';
import { render } from '@testing-library/react';
import PageHeader from './PageHeader';
import { MemoryRouter } from 'react-router-dom';


describe('PageHeader Component', () => {
it('renders the correct title', () => {
  const title = 'Test Title';
  const { getByText } = render(<PageHeader title={title} isHomePage={true} />);
  expect(getByText(title)).toBeInTheDocument();
});

it('renders navigation link when not on homepage', () => {
    const { getByText } = render(<MemoryRouter><PageHeader title="Sales > Overview" isHomePage={false} /></MemoryRouter>);
    expect(getByText('Sales')).toBeInTheDocument();
  });
});