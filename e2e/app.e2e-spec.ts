import { ChromeV2Page } from './app.po';

describe('chrome-v2 App', () => {
  let page: ChromeV2Page;

  beforeEach(() => {
    page = new ChromeV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
