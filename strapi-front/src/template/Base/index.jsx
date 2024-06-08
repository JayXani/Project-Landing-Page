import { Container } from './styled';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import Prop from 'prop-types';

export const Base = ({ links, logoData, footerHtml, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Container>
        {children}
        <Footer html={footerHtml} />
      </Container>
      <GoTop />
    </>
  );
};

Base.propTypes = {
  ...Menu.propTypes,
  children: Prop.node.isRequired,
  footerHtml: Prop.string.isRequired,
};
