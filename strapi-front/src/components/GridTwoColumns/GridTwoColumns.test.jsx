import { render, screen } from '@testing-library/react';
import { GridTwoColumns } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import mock from './mock';

describe('<GridTwoColumns />', () => {
  it('Should test the component', () => {
    const { debug } = render(
      <ThemeProvider theme={theme}>
        <GridTwoColumns {...mock}>Testing children</GridTwoColumns>
      </ThemeProvider>,
    );
    debug();
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
