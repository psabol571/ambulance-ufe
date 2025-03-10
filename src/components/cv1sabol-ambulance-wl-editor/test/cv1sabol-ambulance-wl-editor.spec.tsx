import { newSpecPage } from '@stencil/core/testing';
import { Cv1sabolAmbulanceWlEditor } from '../cv1sabol-ambulance-wl-editor';

describe('cv1sabol-ambulance-wl-editor', () => {
  it('buttons shall be of different type', async () => {
    const page = await newSpecPage({
      components: [Cv1sabolAmbulanceWlEditor],
      html: `<cv1sabol-ambulance-wl-editor entry-id="@new"></cv1sabol-ambulance-wl-editor>`,
    });
    let items: any = await page.root.shadowRoot.querySelectorAll("md-filled-button");
    expect(items.length).toEqual(1);
    items = await page.root.shadowRoot.querySelectorAll("md-outlined-button");
    expect(items.length).toEqual(1);

    items = await page.root.shadowRoot.querySelectorAll("md-filled-tonal-button");
    expect(items.length).toEqual(1);
  });
});