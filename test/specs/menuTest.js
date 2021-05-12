const LoginPage = require('../pageobjects/login.page');
const Menu = require('../pageobjects/menu');

describe('Test menu options', () => {
    function browserPause() {
        browser.pause(1000);
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
    describe('ALL ITEMS', () => {
        it('Click on button all items', () => {
            Menu.btnMenuOptions;
            Menu.btnAllItems;
            browserPause();
        });
    });
    describe('ABOUT', () => {
        it('Click on button about', () => {
            Menu.btnAbout;
            browser.back();
            browserPause();
        });
    });
    describe('RESET APP STATE', () => {
        it('Click on button all reset app state', () => {
            Menu.btnMenuOptions;
            Menu.btnResetAppState;
            browserPause();
        });
    });
    describe('LOGOUT', () => {
        it('Click on button logout', () => {
            Menu.btnLogout;
            browserPause();
        });
    });
});
