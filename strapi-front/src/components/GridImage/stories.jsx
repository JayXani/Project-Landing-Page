import { GridImage } from '.';
import mock from '../GridImage/mock';

export default {
  title: 'GridImage',
  component: GridImage,
  args: mock,
};

export const Template = (args) => {
  return (
    <div>
      <GridImage {...args} />
    </div>
  );
};
