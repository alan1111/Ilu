import { HoneyPage } from './app.po';

describe('honey App', () => {
  let page: HoneyPage;

  beforeEach(() => {
    page = new HoneyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
