import { Menu } from '.';
import linksMock from '../NavBar/mock';
import { theme } from '../../styles/theme';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImg: '',
    },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '300vh', background: theme.colors.mediumGray }}>
      <Menu {...args} />
    </div>
  );
};
