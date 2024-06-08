import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => {
    return css`
      font-size: ${theme.font.size.small};
    `;
  },
  medium: (theme) => {
    return css`
      font-size: ${theme.font.size.medium};
    `;
  },
  big: (theme) => {
    return css`
      font-size: ${theme.font.size.big};
    `;
  },
  huge: (theme) => {
    return css`
      font-size: ${theme.font.size.huge};
      ${mediaFont(theme)};
    `;
  },
};
const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'upperCase' : 'none'};
`;
const mediaFont = (theme) => css`
  @media ${theme.medium.lteMedium} {
    font-size: ${theme.font.size.big};
  }
`;

export const Title = styled.h1`
  ${({ theme, color_dark, size, uppercase }) => {
    return css`
      color: ${color_dark ? theme.colors.primaryColor : theme.colors.white};
      ${titleSize[size](theme)};
      ${titleCase(uppercase)};
    `;
  }}
`;
