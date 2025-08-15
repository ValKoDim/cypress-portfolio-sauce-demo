import LoginPage from '../page-objects/LoginPage';
import AccountPage from '../page-objects/AccountPage';

describe('User login test suites', () => {
  beforeEach(() => {
    LoginPage.navigate();
    LoginPage.isVisible();
  });
  it('User Login with valid credentials', () => {
    LoginPage.loginUser('customer@practicesoftwaretesting.com', 'welcome01');

    AccountPage.isVisible();
    
  });

  it('User login with invalid credentials', () => {
    LoginPage.loginUser('asd@asd.bg', '123456789');

    LoginPage.isVisible();

    LoginPage.assertError(LoginPage.errorMessages.invalidCredentials);
  });
});