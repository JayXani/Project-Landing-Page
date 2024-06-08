import {
  mapSectionContent,
  mapSectionTwoColumns,
  mapSections,
  mapTextGrid,
  mapGridImage,
} from './map.sections';
import pagesFakeData from './data.json';

describe('Map SectionTwoColumns', () => {
  it('Should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });
  it('Should render section with data', () => {
    const data = mapSections(pagesFakeData[0].sections);
    expect(data[0].component).toBe('section.section-two-columns'); // data[0] is reference the sections
  });
  it('Should map section two columns', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'January brings us Firefox 85',
      description: 'abc',
      metadata: {
        background: true,
        section_id: 'home',
      },
      image: {
        url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749289/javascript_b57bf48cda.svg',
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.text).toBe('abc');
    expect(data.srcImage).toBe(
      'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749289/javascript_b57bf48cda.svg',
    );
    expect(data.sectionId).toBe('home');
    expect(data.title).toBe('January brings us Firefox 85');
  });
  it('Should map section content if no data', () => {
    const section = mapSectionContent();
    expect(section.background).toBe(false);
    expect(section.component).toBe('');
    expect(section.html).toBe('');
    expect(section.title).toBe('');
  });
  it('Should map section content', () => {
    const section = mapSectionContent({
      __component: 'section.section-content',
      title: 'news',
      content: '<p>pipeline.</p>',
      metadata: {
        background: false,
        section_id: 'intro',
      },
    });
    expect(section.background).toBe(false);
    expect(section.component).toBe('section.section-content');
    expect(section.html).toBe('<p>pipeline.</p>');
    expect(section.title).toBe('news');
    expect(section.sectionId).toBe('intro');
  });
  it('Should map section text grid with data', () => {
    const section = mapTextGrid({
      __component: 'section.section-grid-text',
      description: 'abc',
      title: 'My Grid',
      text_grid: [
        {
          title: 'Teste 1',
          description: 'Coisa',
        },
        {
          title: 'Teste 2',
          description: 'abc',
        },
        {
          title: 'Teste 3',
          description: 'def',
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        section_id: 'grid-one',
      },
    });
    expect(section.background).toBe(true);
    expect(section.component).toBe('section.section-grid-text');
    expect(section.title).toBe('My Grid');
    expect(section.sectionId).toBe('grid-one');
    expect(section.description).toBe('abc');
    expect(section.grid).toEqual([
      {
        title: 'Teste 1',
        description: 'Coisa',
      },
      {
        title: 'Teste 2',
        description: 'abc',
      },
      {
        title: 'Teste 3',
        description: 'def',
      },
    ]);
  });
  it('Should render section grid text without data', () => {
    const data = mapTextGrid();
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.title).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.description).toBe('');
  });
  it('Should render section grid image without data', () => {
    const data = mapGridImage();
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.description).toBe('');
  });
  it('Should render section grid image with data', () => {
    const data = mapGridImage({
      __component: 'section.section-grid-image',
      description: 'abc',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {
          image: {
            url: 'a.svg',
            alternativeText: 'Image 1',
          },
        },
        {
          image: {
            url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_c073b11d09.jpg',
            alternativeText: 'Image 2',
          },
        },
      ],
      metadata: {
        background: false,
        section_id: 'gallery',
      },
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('Gallery');
    expect(data.sectionId).toBe('gallery');
    expect(data.description).toBe('abc');
    expect(data.grid[0].altText).toBe('Image 1');
    expect(data.grid[0].url).toBe('a.svg');
  });
});
