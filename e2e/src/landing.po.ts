import { browser, by, element } from 'protractor';

export class LandingPage {
  navigateToLanding() {
    return browser.get('/');
  }

  navigateToHome(){
    return browser.get('/home');
  }

  navigateToLeaderboard(){
    return browser.get('/leaderboard');
  }

  navigateToInvalidURL(){
    return browser.get('/thisurldoesntexist');
  }

  getBrandTitle(){
    return element(by.css('.navbar-brand')).getText();
  }

  getNavBarHome(){
    return element.all(by.css('app-navigation a[href="/home"]'));
  }

  getNavBarLeaderboard(){
    return element.all(by.css('app-navigation a[href="/leaderboard"]'));
  }

  logOutApplication(){
    element(by.css('button[data-toggle="dropdown"]')).click();
    element(by.css('.logout-button')).click();
  }

  getNavBarLogout(){
    return element.all(by.css('.logout-button'));
  }

  getNavbarGuestLogout(){
    return element.all(by.css('.logout-button-guest'));
  }

  getEmailField(){
    return element(by.css('input[formcontrolname="email"]'));
  }

  getPasswordField(){
    return element(by.css('input[formcontrolname="password"]'));
  }

  getLoginButton(){
    return element(by.css('input[value="LOG IN"]'));
  }

  getLoginGuestButton(){
    return element(by.css('input[value="CONTINUE AS GUEST"]'));
  }

  getErrorEmailText(){
    return element(by.css('.error-email'));
  }

  getRegisterTab(){
    return element(by.css('a[href="/register"]'));
  }

  getRegisterButton(){
    return element(by.css('input[value="REGISTER"]'));
  }

}