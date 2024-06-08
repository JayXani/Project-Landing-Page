import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-flow: row wrap;

      @media ${theme.medium.lteMedium} {
        flex-flow: column wrap;
        align-content: center; //Alinha todo o CONTEÚDO
      }
    `;
  }}
`;
