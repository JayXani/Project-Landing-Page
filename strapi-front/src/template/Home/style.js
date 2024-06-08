import styled, { css } from 'styled-components';

export const H1 = styled.h1`
  ${({ background }) => {
    return background
      ? css`
          background-color: ${background};
        `
      : css`
          background-color: purple;
        `;
  }}
  color: blue;
`;
