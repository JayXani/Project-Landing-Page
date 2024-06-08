import { render, screen } from '@testing-library/react';
import { Footer } from '.';
import { ThemeProvider } from 'styled-components';

describe('<Footer />', () => {
  it('Should test the component', () => {
    const { debug } = render(<Footer>Testing children</Footer>);
    debug();
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
