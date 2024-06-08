import { Container } from './styled';
import Prop from 'prop-types';
import { Heading } from '../Heading';

export const LogoLink = ({ text = '', srcImg = '', link = '' }) => {
  return (
    <Heading size="small" uppercase>
      <Container href={link}>
        {srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: Prop.string.isRequired,
  srcImg: Prop.string,
  link: Prop.string.isRequired,
};
