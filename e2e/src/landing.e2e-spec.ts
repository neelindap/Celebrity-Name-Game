import { LandingPage } from './landing.po';
import { browser } from 'protractor';

describe('Landing Page', () => {
  let page: LandingPage;

  beforeEach(() => {
    page = new LandingPage();
  });

  // Redirect to login page when hit the base URL
  it('should redirect to login page', () => {
    page.navigateToLanding();
    browser.getCurrentUrl().then((url) => {
      expect(url).toContain('/login');
      return;
    });
  });

  // Redirect to login page when hit the home or leaderboard URL without login
  it('should redirect to login page when home or leaderboard called without login', () => {
    //Home
    page.navigateToHome();
    browser.getCurrentUrl().then((url) => {
      expect(url).toContain('/login');
      return;
    });

    // Leaderboard
    browser.getCurrentUrl().then((url) => {
      expect(url).toContain('/login');
      return;
    });
  });

  // Redirect to 404 in case of invalid url
  it('should redirect to error page for incorrect URL', () => {
    page.navigateToInvalidURL();
    browser.getCurrentUrl().then((url) => {
      expect(url).toContain('/notFound');
      return;
    });
  })

  // Landing page should contain navbar with brand name
  it('should display brand name', () => {
    page.navigateToLanding();
    expect(page.getBrandTitle()).toEqual('Celebrity Name');
  });

  // Landing page shouldn't contain links in navbar
  it('should not display contain Navbar links', () => {
    page.navigateToLanding();

    // Home link
    expect(page.getNavBarHome().count()).toEqual(0);

    // Leaderboard link
    expect(page.getNavBarLeaderboard().count()).toEqual(0);

    // Logout link
    expect(page.getNavBarLogout().count()).toEqual(0);

    // Guest logout link
    expect(page.getNavbarGuestLogout().count()).toEqual(0);
  });

  // Login button should be disabled on load of landing page
  it('should have login button disabled on load', () => {
    page.navigateToLanding();
    page.getLoginButton().isEnabled().then((status) => {
      expect(status).toBe(false);
    });
  });

  // Incorrect formatted email should display error message and disable login button => Test timed out after 10 seconds
  it('should not allow user to login with incorrect email id', () => {
    page.navigateToLanding();
    let email = page.getEmailField();
    email.clear().then(() => {
      email.sendKeys('test@test');
    });
    expect(page.getErrorEmailText().isPresent()).toBeTruthy();

    page.getLoginButton().isEnabled().then((status) => {
      expect(status).toBe(false)
    });
  });

  // Not allow user to register with already existing email id
  it('should not allow user to register with already existing email id', () => {
    page.navigateToLanding();
    page.getRegisterTab().click();

    browser.getCurrentUrl().then((url) => {
      expect(url).toContain('/register');
      return;
    });

    expect(page.getRegisterButton().isEnabled()).toBeFalsy();

    let email = page.getEmailField();
    // invalid email
    email.clear().then(() => {
      email.sendKeys('test@test');
    });
    expect(page.getErrorEmailText().isPresent()).toBeTruthy();

    // Valid email
    email.clear().then(() => {
      email.sendKeys('test@test.com');
    });
    expect(page.getErrorEmailText().isPresent()).toBeFalsy();

    // Invalid password
    let password = page.getPasswordField();
    password.clear().then(() => {
      password.sendKeys('123');
    });
    expect(page.getErrorPasswordText().isPresent()).toBeTruthy();

    // Valid password
    password.clear().then(() => {
      password.sendKeys('123456');
    });
    expect(page.getErrorPasswordText().isPresent()).toBeFalsy();


    // Invalid password
    let confirmPassword = page.getConfirmPasswordField();
    confirmPassword.clear().then(() => {
      confirmPassword.sendKeys('123');
    });
    expect(page.getErrorConfirmPasswordText().isPresent()).toBeTruthy();

    // Valid password
    confirmPassword.clear().then(() => {
      confirmPassword.sendKeys('123456');
    });
    expect(page.getErrorConfirmPasswordText().isPresent()).toBeFalsy();

    // Invalid name
    let name = page.getFullNameField();
    name.clear().then(() => {
      name.sendKeys('Text-Name_Incorrect');
    });
    expect(page.getErrorNameText().isPresent()).toBeTruthy();

    // Valid name
    name.clear().then(() => {
      name.sendKeys('Test Name');
    });
    expect(page.getErrorNameText().isPresent()).toBeFalsy();

    expect(page.getRegisterButton().isEnabled()).toBeTruthy();

    browser.waitForAngularEnabled(false);

    page.getRegisterButton().click();

    // Wait for register process
    browser.sleep(5000);

    browser.getCurrentUrl().then((url) => {
      expect(url).toContain('/register');
      return;
    });
  }, 10000);

  // Allow user to log in as guest
  it('should allow user to login as a guest user', () => {
    page.navigateToLanding();

    page.getLoginGuestButton().click();

    // Wait for login process
    browser.sleep(5000);

    browser.getCurrentUrl().then((url) => {
      expect(url).toContain('/home');
      return;
    });

    // Home link should be present
    expect(page.getNavBarHome().count()).toEqual(1);

    // Leaderboard link shouldn't be present
    expect(page.getNavBarLeaderboard().count()).toEqual(0);

    // Normal logout button should not be present
    expect(page.getNavBarLogout().isPresent()).toBeFalsy();

    // Logout button for Guest user should be present
    expect(page.getNavbarGuestLogout().isPresent()).toBeTruthy();

    page.getNavbarGuestLogout().click();


  }, 10000);

  // Login and redirect to home for correct Email id, validate and logout
  it('should allow user to login with correct email id', () => {
    page.navigateToLanding();
    let email = page.getEmailField();
    email.clear().then(() => {
      email.sendKeys('test@test.com');
    });


    let password = page.getPasswordField();
    password.clear().then(() => {
      password.sendKeys('123456');
    });

    expect(page.getLoginButton().isEnabled()).toBeTruthy();

    browser.waitForAngularEnabled(false);

    page.getLoginButton().click();

    // Wait for login process
    browser.sleep(5000);

    browser.getCurrentUrl().then((url) => {
      expect(url).toContain('/home');
      return;
    });

    page.logOutApplication();
  }, 10000);
});
