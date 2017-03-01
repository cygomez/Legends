import { LegendsPage } from './app.po';

describe('legends App', () => {
  let page: LegendsPage;

  beforeEach(() => {
    page = new LegendsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
