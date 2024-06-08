import { Container } from './styled';
import Prop from 'prop-types';

export const TextComponent = ({ children }) => {
  return <Container dangerouslySetInnerHTML={{ __html: children }} />;
};

TextComponent.propTypes = {
  children: Prop.node.isRequired,
};
