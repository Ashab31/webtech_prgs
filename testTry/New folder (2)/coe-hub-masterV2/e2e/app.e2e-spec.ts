import { CoeHubNewPage } from './app.po';

describe('coe-hub-new App', () => {
  let page: CoeHubNewPage;

  beforeEach(() => {
    page = new CoeHubNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
