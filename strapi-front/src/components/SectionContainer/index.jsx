import { Container } from './styled';
import Prop from 'prop-types';

export const SectionContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

SectionContainer.propTypes = {
  children: Prop.node.isRequired,
};
