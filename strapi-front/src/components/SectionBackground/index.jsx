import { Container } from './styled';
import { SectionContainer } from '../SectionContainer';
import Prop from 'prop-types';

export const SectionBackground = ({
  children,
  background = false,
  sectionId = '',
}) => {
  return (
    <Container background={background}>
      <SectionContainer>{children}</SectionContainer>
    </Container>
  );
};

SectionBackground.propTypes = {
  children: Prop.node.isRequired,
  background: Prop.bool,
  sectionId: Prop.string,
};
