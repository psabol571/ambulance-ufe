import { newSpecPage } from '@stencil/core/testing';
import { Cv1sabolAmbulanceWlList } from '../cv1sabol-ambulance-wl-list';

describe('cv1sabol-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Cv1sabolAmbulanceWlList],
      html: `<cv1sabol-ambulance-wl-list></cv1sabol-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <cv1sabol-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cv1sabol-ambulance-wl-list>
    `);
  });
});
