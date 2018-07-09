import { HomePage } from './home.po';
import { browser } from 'protractor';

describe('Home Page', () => {
    let page: HomePage;

    beforeEach(() => {
        page = new HomePage();
        page.navigateToLanding();
    });

    // Login user as guest and play game
    it('should allow guest user to play the game after login', () => {
        page.getLoginGuestButton().click();
        browser.waitForAngularEnabled(false);

        // Wait for login process
        browser.sleep(5000);

        let searchBox = page.getSearchBox();

        // Invalid Movie Title
        searchBox.clear().then(() => {
            searchBox.sendKeys('This movie title is invalid');
            browser.sleep(2000);
            expect(page.getNoMovieError().isPresent()).toBeTruthy();
        });

        // Valid title
        searchBox.clear().then(() => {
            searchBox.sendKeys('Fight Club');
            browser.sleep(2000);
        });

        // First Movie
        let movie = page.getMovieListing();
        movie.first().click();

        browser.sleep(2000);

        // Validate cast members shown
        expect(page.getCastListing().isPresent()).toBeTruthy();

        // Click on submit
        page.getSubmitButton().click();

        browser.sleep(2000);
        // Check for Zero score message
        expect(page.getZeroScoreDiv().isPresent()).toBeTruthy();

        // Leaderboard link shouldn't be present
        expect(page.getNavBarLeaderboard().isPresent()).toBeFalsy();


        // Logout button for Guest user should be present
        expect(page.getNavbarGuestLogout().isPresent()).toBeTruthy();

        page.getNavbarGuestLogout().click();
    });

    // Login user with correct Email id and play game
    it('should allow user to play the game after login', () => {

        // Login
        let email = page.getEmailField();
        email.clear().then(() => {
            email.sendKeys('test@test.com');
        });


        let password = page.getPasswordField();
        password.clear().then(() => {
            password.sendKeys('123456');
        });

        browser.waitForAngularEnabled(false);

        page.getLoginButton().click();

        // Wait for login process
        browser.sleep(5000);

        let searchBox = page.getSearchBox();

        // Invalid Movie Title
        searchBox.clear().then(() => {
            searchBox.sendKeys('This movie title is invalid');
            browser.sleep(2000);
            expect(page.getNoMovieError().isPresent()).toBeTruthy();
        });

        // Valid title
        searchBox.clear().then(() => {
            searchBox.sendKeys('Fight Club');
            browser.sleep(2000);
        });

        // First Movie
        let movie = page.getMovieListing();
        movie.first().click();

        browser.sleep(2000);

        // Validate cast members shown
        expect(page.getCastListing().isPresent()).toBeTruthy();

        // Click on submit
        page.getSubmitButton().click();

        browser.sleep(2000);
        // Check for Zero score message
        expect(page.getZeroScoreDiv().isPresent()).toBeTruthy();

        //Click on leaderboard
        page.getNavBarLeaderboard().click();

        // Validate leaderboard present
        expect(page.getLeaderboardData().isPresent()).toBeTruthy();

        //logout
        page.logOutApplication();
    });

})