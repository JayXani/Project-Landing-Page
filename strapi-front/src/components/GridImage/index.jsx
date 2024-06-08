import { Container, Grid, GridElement } from './styled';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponents';
import Prop from 'prop-types';
import { Image } from '../GridText/styled';

export const GridImage = ({
  background = false,
  title,
  description,
  grid,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Container>
        <Heading size="huge" uppercase color_dark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Grid>
          {grid.map((element, index) => (
            <GridElement key={index}>
              <Image src={element.srcImg} alt={element.altText} />
            </GridElement>
          ))}
        </Grid>
      </Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  background: Prop.bool,
  title: Prop.string.isRequired,
  description: Prop.string.isRequired,
  grid: Prop.arrayOf(
    Prop.shape({
      altText: Prop.string.isRequired,
      srcImg: Prop.string.isRequired,
    }).isRequired,
  ),
  sectionId: Prop.string,
};
