import { theme } from '../src/styles/theme';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle} from '../src/styles/GlobalStyles';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light', // Tema padrão da aplicação
      values: [ // Array que contém as informações do tema
        {
          name: 'light',
          value: 'white',
        },
        {
          name: 'dark',
          value: 'black',
        },
      ]
    }
  },
};
export const decorators = [ //Decorate the component
  (Story) => ( //Story is the component
  <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyle />
  </ThemeProvider>
  ),
]
export default preview;
