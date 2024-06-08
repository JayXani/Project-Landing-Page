import { render, screen } from '@testing-library/react';
import { GoTop } from '.';
import { ThemeProvider } from 'styled-components';

describe('<GoTop />', () => {
  it('Should test the component', () => {
    const { debug } = render(<GoTop>Testing children</GoTop>);
    debug();
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
