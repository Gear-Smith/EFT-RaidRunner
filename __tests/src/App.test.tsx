import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '@/src/App';

describe('App', () => {
    it('renders without crashing', () => {
        render(<App />);
        const title = screen.getByText('EFT RAID RUNNER');
        expect(title).toBeInTheDocument();
    });
});