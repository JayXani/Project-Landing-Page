import { Container, TextContainer, ImageContainer, Image } from './styled';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponents';
import Prop from 'prop-types';

export const GridTwoColumns = ({
  title,
  text,
  srcImg,
  background = false,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Container>
        <TextContainer>
          <Heading uppercase color_dark={!background} as="h2">
            {title}
          </Heading>
        </TextContainer>
        <TextComponent>{text}</TextComponent>
        <ImageContainer>
          <Image src={srcImg} alt={title} />
        </ImageContainer>
        <TextComponent>{text}</TextComponent>
      </Container>
    </SectionBackground>
  );
};

GridTwoColumns.propTypes = {
  title: Prop.string.isRequired,
  text: Prop.string.isRequired,
  srcImg: Prop.string.isRequired,
  background: Prop.bool,
  sectionId: Prop.string,
};
