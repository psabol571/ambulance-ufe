import { newSpecPage } from '@stencil/core/testing';
import { Cv1sabolAmbulanceWlList } from '../cv1sabol-ambulance-wl-list';

describe('cv1sabol-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Cv1sabolAmbulanceWlList],
      html: `<cv1sabol-ambulance-wl-list></cv1sabol-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as Cv1sabolAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);

  });
});
