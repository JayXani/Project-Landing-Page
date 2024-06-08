import { Container, Grid, GridElement } from './styled';
import Prop from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponents';

export const GridText = ({
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
              <Heading size="big" color_dark={!background} as="h3">
                {element.title}
              </Heading>
              <TextComponent>{element.description}</TextComponent>
            </GridElement>
          ))}
        </Grid>
      </Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  background: Prop.bool,
  title: Prop.string.isRequired,
  description: Prop.string.isRequired,
  grid: Prop.arrayOf(
    //Typing the keys of array
    Prop.shape({
      title: Prop.string.isRequired,
      description: Prop.string.isRequired,
    }),
  ).isRequired,
  sectionId: Prop.string,
};
