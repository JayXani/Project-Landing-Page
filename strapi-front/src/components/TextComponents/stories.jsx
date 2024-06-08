import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Doloribus, eius nobis esse aliquam nesciunt qui expedita,
     eligendi mollitia illum delectus pariatur earum dicta,
     vel blanditiis neque. Id dolores quaerat totam!,`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
