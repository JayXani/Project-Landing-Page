import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => {
    return css`
      font-size: ${theme.font.size.medium};
    `;
  }}
`;
