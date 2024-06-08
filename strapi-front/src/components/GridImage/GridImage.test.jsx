import { render, screen } from '@testing-library/react';
import { GridImage } from '.';
import { ThemeProvider } from 'styled-components';

describe('<GridImage />', () => {
  it('Should test the component', () => {
    const { debug } = render(<GridImage>Testing children</GridImage>);
    debug();
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
