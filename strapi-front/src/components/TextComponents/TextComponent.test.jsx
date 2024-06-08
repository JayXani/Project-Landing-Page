import { getByText, render, screen } from '@testing-library/react';
import { TextComponent } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('<TextComponent />', () => {
  it('Should render a paragraph with "LOREM"', () => {
    const { debug } = render(
      <ThemeProvider theme={theme}>
        <TextComponent>Testing children</TextComponent>
      </ThemeProvider>,
    );
    debug();
    expect(screen.getByText('Testing children')).toBeInTheDocument();
  });
});
