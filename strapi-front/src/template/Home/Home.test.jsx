import { render, screen } from '@testing-library/react';
import { Home } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('<Home />', () => {
  it('Should test the component', () => {
    const { debug } = render(
      <ThemeProvider theme={theme}>
        <Home />;
      </ThemeProvider>,
    );
    debug();
  });
});
