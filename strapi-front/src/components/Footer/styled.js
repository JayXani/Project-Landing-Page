import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../../components/TextComponents/styled';
import { Container as SectionContainer } from '../../components/SectionContainer/styled';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    border-top: 0.1rem solid ${theme.colors.mediumGray};
    & ${TextComponent} {
      font-size: ${theme.font.size.small};
    }
    & ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }
  `}
`;
