import { ThemeProvider } from 'styled-components';
import { Heading } from '.';
import { render, screen } from '@testing-library/react';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('Should debug the component', () => {
    render(
      <ThemeProvider theme={theme}>
        <Heading />
      </ThemeProvider>,
    );
  });
  // it('Should render with default values', () => {
  //   render(
  //     <ThemeProvider theme={theme}>
  //       <Heading uppercase>Text</Heading>
  //     </ThemeProvider>,
  //   );
  //   const heading = screen.getByRole('heading', { name: 'Text' });
  //   expect(heading).toHaveStyle({
  //     color: theme.colors.primaryColor,
  //     'font-size': theme.font.size.huge,
  //     'text-transform': 'upperCase',
  //   });
  // });
  // it('Should render with white color', () => {
  //   render(
  //     <ThemeProvider theme={theme}>
  //       <Heading color_dark={true}>Text</Heading>
  //     </ThemeProvider>,
  //   );
  //   const heading = screen.getByRole('heading', { name: 'Text' });
  //   expect(heading).toHaveStyle({
  //     color: theme.colors.primaryColor,
  //   });
  // });
  // it('Should render with the size sended to parameter', () => {
  //   const { rerender } = render(
  //     <ThemeProvider theme={theme}>
  //       <Heading color_dark={true} size={'medium'}>
  //         Text
  //       </Heading>
  //     </ThemeProvider>,
  //   );
  //   const heading = screen.getByRole('heading', { name: 'Text' });
  //   expect(heading).toHaveStyle({
  //     'font-size': theme.font.size.medium,
  //   });
  //   rerender(
  //     <ThemeProvider theme={theme}>
  //       <Heading size={'big'}>Text</Heading>
  //     </ThemeProvider>,
  //   );
  //   expect(heading).toHaveStyle({
  //     'font-size': theme.font.size.big,
  //   });
  // });
});
