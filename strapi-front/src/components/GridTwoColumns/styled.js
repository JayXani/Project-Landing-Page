import styled, { css } from 'styled-components';
import { Title } from '../Heading/styled';
export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.large};

    @media ${theme.medium.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
      ${Title} {
        margin-bottom: ${theme.spacings.large};
      }
    }
  `}
`;
export const TextContainer = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};
  `}
`;
export const ImageContainer = styled.div``;
export const Image = styled.img``;
