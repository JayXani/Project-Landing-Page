import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { SectionContainer } from '.';

describe('<SectionContainer />', () => {
  it('Should test the component', () => {
    const { debug } = render(
      <ThemeProvider theme={theme}>
        <SectionContainer>Testing</SectionContainer>
      </ThemeProvider>,
    );
    debug();
    expect(screen.getByText('Testing')).toBeInTheDocument();
  });
});
