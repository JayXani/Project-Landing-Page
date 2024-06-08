import styled, { css, keyframes } from 'styled-components';

const rotate = () => keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    // Centraliza o loading no meio da tela
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    // Fim da centralização
    background-color: ${theme.colors.primaryColor};
    // Estilo das bolinhas de loading
    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-width: 0.5rem;
      border-color: transparent;
      border-style: solid;
      border-radius: 50%;
    }
    &:after {
      // Bolinha do lado de fora
      width: 6rem;
      height: 6rem;
      border-left: 0.5rem solid ${theme.colors.secondColor};
      border-top: 0.5rem solid ${theme.colors.secondColor};
      animation: ${rotate()} 600ms linear infinite;
    }
    &:before {
      // Bolinha de dentro
      width: 2rem;
      height: 2rem;
      border-left: 0.5rem solid ${theme.colors.secondColor};
      border-top: 0.5rem solid ${theme.colors.secondColor};
      animation: ${rotate()} 1s linear reverse infinite;
    }
  `}
`;
