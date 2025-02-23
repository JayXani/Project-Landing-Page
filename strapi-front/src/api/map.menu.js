export const mapMenu = (menu = {}) => {
  const {
    open_in_new_tab: newTab = false,
    logo_text: text = '',
    logo_link: link = '',
    menu_links: links = [],
  } = menu;

  const { data: attributes } = menu.logo;
  const { url } = attributes;
  const srcImg = menu.logo && url ? url : '';
  return {
    newTab,
    text,
    link,
    srcImg,
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links = []) => {
  return links.map((item) => {
    const {
      open_in_new_tab: newTab = false,
      link_text: children = '',
      url: link = '',
    } = item;
    return {
      newTab,
      children,
      link,
    };
  });
};
