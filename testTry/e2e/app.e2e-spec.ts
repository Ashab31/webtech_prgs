import { TestTryPage } from './app.po';

describe('test-try App', function() {
  let page: TestTryPage;

  beforeEach(() => {
    page = new TestTryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
