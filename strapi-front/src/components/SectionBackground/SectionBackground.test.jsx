import { render, screen } from '@testing-library/react';
import { SectionBackground } from '.';

describe('<SectionBackground />', () => {
  it('Should test the component', () => {
    const { debug } = render(
      <SectionBackground>Testing children</SectionBackground>,
    );
    debug();
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
