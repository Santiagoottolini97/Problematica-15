const EndToEnd = require('../pageobjects/end.to.end');
const LoginPage = require('../pageobjects/login.page');

describe('Test shopping car', () => {
    function browserPause() {
        browser.pause(2000);
    }

    //Variables
    const swagLabsUrl = 'https://www.saucedemo.com/';

    describe('END TO END TEST', () => {
        it('Choose the product', () => {
            browser.url(swagLabsUrl);
            LoginPage.testLogin('standard_user', 'secret_sauce');
            EndToEnd.btnProductLink;
            browserPause();
        });
        it('Add to car', () => {
            EndToEnd.btnAddToCar;
            browserPause();
        });
        it('Remove to car', () => {
            EndToEnd.btnRemoveToCar;
            browserPause();
        });
        it('Check car', () => {
            EndToEnd.btnAddToCar;
            EndToEnd.btnShoppingCar;
            browserPause();
        });
        it('Remove product inside the shopping car', () => {
            EndToEnd.btnRemoveToCar;
            browserPause();
        });
        it('Continue shopping', () => {
            EndToEnd.btnContinueShopping;
            browserPause();
        });
        it('Check out', () => {
            EndToEnd.btnbtnProductLink;
            EndToEnd.btnbtnAddToCar;
            EndToEnd.btnShoppingCar;
            EndToEnd.btnCheckOut;
            EndToEnd.testCheckOut('santiago', 'ottolini', '2000');
            EndToEnd.btnConinueCheckOut;
            EndToEnd.btnFinish;
            EndToEnd.btnBackToHome;
            browserPause();
        });
    });
});
