import { Ng4adv2Page } from './app.po';

describe('ng4adv2 App', () => {
  let page: Ng4adv2Page;

  beforeEach(() => {
    page = new Ng4adv2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
