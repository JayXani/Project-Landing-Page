import { mapData } from './map.data';

describe('Map the data', () => {
  it('Should map data even if there is no data', () => {
    const pageData = mapData()[0];
    expect(pageData.html).toBe('');
    expect(pageData.slug).toBe('');
    expect(pageData.title).toBe('');
  });
  it('Should map data if there are data', () => {
    //There are data = Houver dados
    const pageData = mapData([
      {
        html: '<p>Testing...</p>',
        slug: 'Testing slug',
        title: 'This is test',
      },
    ])[0];
    expect(pageData.html).toBe('<p>Testing...</p>');
    expect(pageData.slug).toBe('Testing slug');
    expect(pageData.title).toBe('This is test');
  });
});
