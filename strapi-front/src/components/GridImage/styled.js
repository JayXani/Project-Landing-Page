import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styled';

export const Container = styled.div``;
export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large};
    @media ${theme.medium.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;
export const GridElement = styled.div`
  ${({ theme }) => css`
    ${HeadingContainer} {
      position: relative;
      left: 5rem;
    }
    ${HeadingContainer}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: 7rem;
      top: -3rem;
      left: -5rem;
      transform: rotate(5deg);
    }
  `}
`;
