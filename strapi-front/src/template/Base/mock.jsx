import mockLinks from '../../components/NavBar/mock';
import gridMock from '../../components/GridText/mock';
import { GridText } from '../../components/GridText';

export default {
  children: (
    <>
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
    </>
  ),
  links: mockLinks,
  logoData: {
    text: 'Logo',
    link: '#',
  },
  footerHtml: '<p>Footer</p>',
};
