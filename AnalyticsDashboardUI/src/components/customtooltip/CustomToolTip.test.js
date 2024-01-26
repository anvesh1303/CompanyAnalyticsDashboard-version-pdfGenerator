import React from 'react';
import { render } from '@testing-library/react';
import CustomTooltip from './CustomTooltip';

describe('CustomTooltip Component', () => {

    it('renders without crashing', () => {
        const mockProps = { active: true, payload: [{ name: 'Test', value: '20' }], label: 'Test Label' };
        render(<CustomTooltip {...mockProps} />);
        // Test passed if no errors are thrown during rendering
      });

    it('renders tooltip content correctly', () => {
        const mockPayload = [{ name: 'Company', value: 100 }];
        const { getByText } = render(<CustomTooltip active={true} payload={mockPayload} label="2024" />);
        expect(getByText('Company: 100')).toBeInTheDocument();
    });

    it('displays tooltip information when active', () => {
        const mockPayload = [{ name: 'Company', value: 30 }];
        const { getByText } = render(<CustomTooltip active={true} payload={mockPayload} label="2024" />);
        expect(getByText('Company: 30')).toBeInTheDocument();
      });

    it('returns null when inactive', () => {
        const { container } = render(<CustomTooltip active={false} payload={[]} label="" />);
        expect(container.firstChild).toBeNull();
    });
});
