// Login Test

describe('Login Test', function() {

    it('should have a title', function() {
        browser.get('https://localhost:9002/sonycp/#/login');

        expect(browser.getTitle()).toEqual('Concept Proposal');
    });

    it('should allow logging in', function() {
        // Navigate to the login page
        browser.get('https://localhost:9002/sonycp/#/login');

        var username = element(
          by.model('authenticationControllerLogin.login.username'));

        var password = element(
          by.model('authenticationControllerLogin.login.password'));

        // Type in the username and password
        username.sendKeys('ross.grimes');
        password.sendKeys('partner');

        // Click on the login button
        //element(by.css('.btn')).click();
        element(by.buttonText('Login')).click();

        // Ensure that the user was redirected
        expect(browser.getCurrentUrl())
            .toEqual('https://localhost:9002/sonycp/#/concept/proposal/information');
      });
});



