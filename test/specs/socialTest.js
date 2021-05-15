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
            expect(Social.linkTwitter).toBe('https://twitter.com/saucelabs');
            Social.btnTwitter
            browserPause();
        });
    });
    describe('FACEBOOK', () => {
        it('Open facebook', () => {
            expect(Social.linkFacebook).toBe('https://www.facebook.com/saucelabs');
            Social.btnFacebook
            browserPause();
        });
    });
    describe('LINKEDIN', () => {
        it('Open linkedion', () => {
            expect(Social.linkLinkedin).toBe('https://www.linkedin.com/company/sauce-labs/');
            Social.btnLinkedin
            browserPause();
        });
    });
    
});
