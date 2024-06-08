import { mapSections } from './map.sections';
import { mapMenu } from './map.menu';
export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const { footer_text } = data;
    const { children } = footer_text[0];
    const { text: footerHtml } = children[0];
    const { slug = '', title = '', sections = [], menu = {} } = data;
    return {
      footerHtml,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};
