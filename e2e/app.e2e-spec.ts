import { FundRunPage } from './app.po';

describe('fund-run App', () => {
  let page: FundRunPage;

  beforeEach(() => {
    page = new FundRunPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
