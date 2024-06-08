import { Container, Html } from './styled';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponents';
import Prop from 'prop-types';

export const GridContext = ({
  title,
  html,
  background = false,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Container>
        <Heading uppercase color_dark={!background} as="h2">
          {title}
        </Heading>
        <Html>
          <TextComponent>{html}</TextComponent>
        </Html>
      </Container>
    </SectionBackground>
  );
};

GridContext.propTypes = {
  title: Prop.string.isRequired,
  html: Prop.string.isRequired,
  background: Prop.bool,
  sectionId: Prop.string,
};
