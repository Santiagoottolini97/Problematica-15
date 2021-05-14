const LoginPage = require('../pageobjects/login.page');
const Social = require('../pageobjects/social');

describe('Test social networks', () => {
    function browserPause() {
        browser.pause(2000);
    }

    //Variables
    const swagLabsUrl = 'https://www.saucedemo.com/';

    describe('LOGIN', () => {
        it('Fields complete', () => {
            browser.url(swagLabsUrl);
            LoginPage.testLogin('standard_user', 'secret_sauce');
            browserPause();
        });
    });
    describe('TWITTER', () => {
        it('Open twitter', () => {
            Social.btnTwitter;
            browserPause();
        });
    });
    describe('FACEBOOK', () => {
        it('Open facebook', () => {
            Social.btnFacebook;
            browserPause();
        });
    });
    describe('LINKEDIN', () => {
        it('Open Linkedin', () => {
            Social.btnLinkedin;
            browserPause();
        });
    });
});
