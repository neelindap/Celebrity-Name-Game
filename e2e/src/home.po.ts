import { browser, by, element } from 'protractor';

export class HomePage {
    navigateToLanding() {
        return browser.get('/');
    }

    getEmailField() {
        return element(by.css('input[formcontrolname="email"]'));
    }

    getPasswordField() {
        return element(by.css('input[formcontrolname="password"]'));
    }

    getLoginButton() {
        return element(by.css('input[value="LOG IN"]'));
    }

    getSearchBox() {
        return element(by.css('input[type="search"]'));
    }

    getNoMovieError() {
        return element(by.css('.no-movie'));
    }

    getMovieListing() {
        return element.all(by.css('.movie-list'));
    }

    getCastListing() {
        return element(by.css('app-cast'));
    }

    getSubmitButton() {
        return element(by.css('.btn-success'));
    }

    getZeroScoreDiv() {
        return element(by.css('.zero-score'));
    }

    getLeaderboardData() {
        return element(by.css('app-leaderboard'));
    }

    logOutApplication() {
        element(by.css('button[data-toggle="dropdown"]')).click();
        element(by.css('.logout-button')).click();
    }

    getNavBarLeaderboard() {
        return element(by.css('app-navigation a[href="/leaderboard"]'));
    }

    getLoginGuestButton() {
        return element(by.css('input[value="CONTINUE AS GUEST"]'));
    }

    getNavbarGuestLogout() {
        return element(by.css('.logout-button-guest'));
    }
}