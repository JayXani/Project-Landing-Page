import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Testing children',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    // Parametros enviado para "preview", setando a configuração
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};
Dark.parameters = {
  colorDark: false,
  children: 'Text is black',
};
