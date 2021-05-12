const LoginPage = require('../pageobjects/login.page');

describe('Login swag labs', () => {
    function browserPause() {
        browser.pause(1000);
    }
    
    //Variables
    const swagLabsUrl = 'https://www.saucedemo.com/';

    describe('TEST LOGIN', () => {
        it('Empty fields', () => {
            browser.url(swagLabsUrl);
            LoginPage.testLogin('', '');
            expect(LoginPage.errorText).toBe('Epic sadface: Username is required');
            browserPause();
        });
        it('Empty username', () => {
            LoginPage.testLogin('', 'secret_sauce');
            expect(LoginPage.errorText).toBe('Epic sadface: Username is required');
            browserPause();
        });
        it('Empty password', () => {
            LoginPage.testLogin('santi_ottolini', '');
            expect(LoginPage.errorText).toBe(
                'Epic sadface: Username and password do not match any user in this service'
            );
            browserPause();
        });
        it('Wrong username and password', () => {
            LoginPage.testLogin('santi_ottolini', 'santi12345');
            expect(LoginPage.errorText).toBe(
                'Epic sadface: Username and password do not match any user in this service'
            );
            browserPause();
        });
    });
});
