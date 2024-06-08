import { Container } from './styled';
import { MenuLink } from '../MenuLink';
import Prop from 'prop-types';

export const NavBar = ({ links = [] }) => {
  return (
    <Container aria-label="Main Menu">
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Container>
  );
};

NavBar.propTypes = {
  links: Prop.arrayOf(
    Prop.shape({
      children: Prop.node.isRequired,
      link: Prop.string.isRequired,
      newTab: Prop.bool,
    }),
  ),
};
