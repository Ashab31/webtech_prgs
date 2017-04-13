import { HaiPage } from './app.po';

describe('hai App', function() {
  let page: HaiPage;

  beforeEach(() => {
    page = new HaiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
