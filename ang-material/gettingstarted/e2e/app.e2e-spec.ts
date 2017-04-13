import { GettingstartedPage } from './app.po';

describe('gettingstarted App', function() {
  let page: GettingstartedPage;

  beforeEach(() => {
    page = new GettingstartedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
