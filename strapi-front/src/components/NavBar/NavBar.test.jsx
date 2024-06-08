import { render, screen } from '@testing-library/react';
import { NavBar } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import mock from './mock';

describe('<NavBar />', () => {
  it('Should receive some links', () => {
    const { debug } = render(
      <ThemeProvider theme={theme}>
        <NavBar links={mock} />
      </ThemeProvider>,
    );
    debug();
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });
  it('Should render an array empty', () => {
    const { debug } = render(
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>,
    );
    debug();
    expect(screen.queryAllByText(/link/i)).toHaveLength(0);
  });
  // The test below is error
  it('Should render the media query', () => {
    const { debug } = render(
      <ThemeProvider theme={theme}>
        <NavBar links={mock} />
      </ThemeProvider>,
    );
    debug();
    expect(screen.getByText(/C2/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      { media: '(max-width: 768px)' },
    );
  });
});
