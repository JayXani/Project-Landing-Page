import { Container } from './styled';
import { TextComponent } from '../TextComponents';
import { SectionContainer } from '../SectionContainer';
import Prop from 'prop-types';

export const Footer = ({ html }) => {
  return (
    <Container>
      <SectionContainer>
        <TextComponent>{html}</TextComponent>
      </SectionContainer>
    </Container>
  );
};

Footer.propTypes = {
  html: Prop.string.isRequired,
};
