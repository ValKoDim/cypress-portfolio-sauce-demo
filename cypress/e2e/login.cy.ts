import loginPage from '../page-objects/LoginPage';
import accountPage from '../page-objects/AccountPage';

describe('User login test suites', () => {
  beforeEach(() => {
    loginPage.navigate();
    loginPage.isVisible();
  });
  it('User Login with valid credentials', () => {
    loginPage.loginUser('customer@practicesoftwaretesting.com', 'welcome01');

    accountPage.isVisible();
    
  });

  it('User login with invalid credentials', () => {
    loginPage.loginUser('asd@asd.bg', '123456789');

    loginPage.isVisible();

    loginPage.assertError(loginPage.errorMessages.invalidCredentials);
  });
});