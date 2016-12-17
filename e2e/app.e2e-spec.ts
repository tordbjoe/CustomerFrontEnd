import { CustomerFrontEndPage } from './app.po';

describe('customer-front-end App', function() {
  let page: CustomerFrontEndPage;

  beforeEach(() => {
    page = new CustomerFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
