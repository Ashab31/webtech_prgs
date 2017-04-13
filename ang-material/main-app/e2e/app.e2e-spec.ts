import { MainAppPage } from './app.po';

describe('main-app App', function() {
  let page: MainAppPage;

  beforeEach(() => {
    page = new MainAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
