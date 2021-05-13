const LoginPage = require('../pageobjects/login.page');
const Order = require('../pageobjects/order');

describe('Test menu options', () => {
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
     describe('NAME (A to Z)', () => {
        it('Order by name (a-z)', () => {
            Order.btnOrder;
            Order.btnNameAZ;
            browserPause();
        });
    });
    describe('NAME (Z to A)', () => {
        it('Order by name (z-a)', () => {
            Order.btnOrder;
            Order.btnNameZA;
            browserPause();
        });
    });
    describe('LOW TO HIGH', () => {
        it('Order by price (low-high)', () => {
            Order.btnOrder;
            Order.btnPriceLowHigh;
            browserPause();
        });
    }); 
    describe('HIGH TO LOW', () => {
        it('Order by price (high-low)', () => {
            Order.btnOrder;
            Order.btnPriceHighLow;
            browserPause();
        });
    });
});
