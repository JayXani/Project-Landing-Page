import { render, screen } from '@testing-library/react';
import { GridContext } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('<GridContext />', () => {
  it('Should test the component', () => {
    const { debug } = render(
      <ThemeProvider theme={theme}>
        <GridContext>Testing children</GridContext>
      </ThemeProvider>,
    );
    debug();
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
