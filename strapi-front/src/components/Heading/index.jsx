import * as Styled from './styled';
import Prop from 'prop-types';

export const Heading = ({
  children,
  color_dark = true,
  as = 'h1',
  size = 'huge',
  uppercase = false,
}) => {
  return (
    <Styled.Title
      color_dark={color_dark}
      as={as}
      size={size}
      uppercase={uppercase}
    >
      {children}
    </Styled.Title>
  );
};
Heading.propTypes = {
  children: Prop.node.isRequired,
  color_dark: Prop.bool,
  as: Prop.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: Prop.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: Prop.bool.isRequired,
};
