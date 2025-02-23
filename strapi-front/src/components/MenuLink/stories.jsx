import { MenuLink } from '.';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'MenuLink',
    link: 'https://customer.elephantsql.com',
  },
  argTypes: {
    children: { type: 'string' },
    link: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <MenuLink {...args} />
    </div>
  );
};
