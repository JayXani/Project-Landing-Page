import { Container } from './styled';
import Prop from 'prop-types';

export const Dummy = ({ children }) => {
  return (
    <Container>
      <h1>{children}</h1>
    </Container>
  );
};

Dummy.propTypes = {
  children: Prop.node.isRequired,
};
