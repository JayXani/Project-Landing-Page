import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { LogoLink } from '.';
import { theme } from '../../styles/theme';

describe('<NavLink />', () => {
  it('Should render a component without image', () => {
    const { debug } = render(
      <ThemeProvider theme={theme}>
        <LogoLink />
      </ThemeProvider>,
    );
    debug();
  });
});
