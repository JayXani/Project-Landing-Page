import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: '<p>Desenvolvido por: <strong>Danilo de Araújo</strong><br><p>©️CopyRight 2024</p></p>',
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
