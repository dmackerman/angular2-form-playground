import { FormPlaygroundPage } from './app.po';

describe('form-playground App', function() {
  let page: FormPlaygroundPage;

  beforeEach(() => {
    page = new FormPlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
