import { GridContext } from '../../components/GridContext';
export const PageNotFound = () => {
  return (
    <GridContext
      title="Error 404"
      html="<p>Page not found ! :( <br>Click in reload </p> "
    />
  );
};
