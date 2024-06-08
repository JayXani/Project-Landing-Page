import { render, screen } from '@testing-library/react';
import { Dummy } from '.';

describe('<Dummy />', () => {
  it('Should test the component', () => {
    const { debug } = render(<Dummy>Testing children</Dummy>);
    debug();
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
