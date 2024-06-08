import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { Menu } from '.';
import linksMock from '../NavBar/mock';

const logoData = {
  text: 'Logo',
  link: '#target',
};

describe('<Menu />', () => {
  it('Should test the component', () => {
    const { debug } = render(
      <ThemeProvider theme={theme}>
        <Menu links={linksMock} logoData={logoData} />
      </ThemeProvider>,
    );
    debug();
    expect(screen.getByRole('heading', { name: 'Logo' }));
    expect(
      screen.getByRole('navigation', { name: 'Main Menu' }),
    ).toBeInTheDocument();
  });
});
describe('<Menu />', () => {
  it('Should render menu mobile and button for open and close the menu ', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Menu links={linksMock} logoData={logoData} />
      </ThemeProvider>,
    );
    const button = screen.getByLabelText('Open/Close menu');
    const menuContainer = button.nextSibling; // Get the "brother";
    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.medium.lteMedium,
    });
    // fireEvent.click(button);
    // expect(menuContainer).toHaveStyleRule('opacity', '1', {
    //   media: '(max-width: 768px)',
    // });
  });
});
