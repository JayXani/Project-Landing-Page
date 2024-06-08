import { render, screen } from '@testing-library/react';
import { GridText } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import mock from './mock';

describe('<GridText />', () => {
  it('Should render the component with background', () => {
    const { debug } = render(
      <ThemeProvider theme={theme}>
        <GridText {...mock} background />
      </ThemeProvider>,
    );
    debug();
  });
});
