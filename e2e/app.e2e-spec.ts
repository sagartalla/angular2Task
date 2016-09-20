import { AjackusPage } from './app.po';

describe('ajackus App', function() {
  let page: AjackusPage;

  beforeEach(() => {
    page = new AjackusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
