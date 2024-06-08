import { render, screen } from '@testing-library/react';
import { MenuLink } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('<MenuLink />', () => {
  it('Should test if the link was sended', () => {
    const { debug } = render(
      <ThemeProvider theme={theme}>
        <MenuLink link={'http://www.google.com'}>Testing children</MenuLink>,
      </ThemeProvider>,
    );
    debug();
    expect(screen.getByRole('link')).toHaveAttribute('target', '_self');
  });
  it('Should test if the link open in new tab', () => {
    const { debug } = render(
      <ThemeProvider theme={theme}>
        <MenuLink link={'http://www.google.com'} newTab={true}>
          Testing children
        </MenuLink>
      </ThemeProvider>,
    );
    debug();
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
  });
});
