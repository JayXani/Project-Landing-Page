import P from 'prop-types';
import { Container } from './styled';

export const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';

  return (
    <Container href={link} target={target}>
      {children}
    </Container>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newTab: P.bool,
};
