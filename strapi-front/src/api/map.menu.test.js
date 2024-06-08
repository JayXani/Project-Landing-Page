import { mapMenu, mapMenuLinks } from './map.menu';

describe('Map Menu', () => {
  it('Should return a predefined object if no data', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.srcImg).toBe('');
    expect(menu.link).toBe('');
    expect(menu.links).toEqual([]);
  });
  it('Should map menu to match keys and values required', () => {
    const menu = mapMenu({
      open_in_new_tab: false,
      logo_text: 'Landing Page',
      logo_link: '#home',
      menu: [
        {
          open_in_new_tab: false,
          link_text: 'intro', // This's the children of component ('link_text' = children)
          url: '#intro',
        },
        {
          open_in_new_tab: false,
          link_text: 'grid-one',
          url: '#contact',
        },
      ],
      logo: {
        url: 'a.svg',
      },
    });
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('Landing Page');
    expect(menu.srcImg).toBe('a.svg');
    expect(menu.link).toBe('#home');
    expect(menu.links[0].children).toBe('intro');
    expect(menu.links[0].link).toBe('#intro');
  });
  it('Should return an empty array if no links', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });
  it('Should return the data if there is an array with data', () => {
    const links = mapMenuLinks([
      {
        open_in_new_tab: false,
        link_text: 'grid-one',
        url: '#contact',
      },
    ]);
    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe('grid-one');
    expect(links[0].link).toBe('#contact');
  });
});
