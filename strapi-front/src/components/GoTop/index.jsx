import { Container } from './styled';
import { ArrowCircleUp } from '@styled-icons/material-outlined/ArrowCircleUp';

export const GoTop = () => {
  return (
    <Container href="#" aria-label="Got to Top">
      <ArrowCircleUp title="Go To Top" />
    </Container>
  );
};
