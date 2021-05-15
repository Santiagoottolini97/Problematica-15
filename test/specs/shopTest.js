const EndToEnd = require('../pageobjects/end.to.end');
const LoginPage = require('../pageobjects/login.page');

describe('Test shopping car', () => {
    function browserPause() {
        browser.pause(2000);
    }

    //Variables
    const swagLabsUrl = 'https://www.saucedemo.com/';

    describe('END TO END TEST WITH ONE PRODUCT', () => {
        it('Choose the product', () => {
            browser.url(swagLabsUrl);
            LoginPage.testLogin('standard_user', 'secret_sauce');
            browserPause();
        });
        it('Add to car', () => {
            EndToEnd.btnProductLinkOne;
            EndToEnd.btnAddToCarOne;
            browserPause();
        });
        it('Remove to car', () => {
            EndToEnd.btnRemoveToCar;
            browserPause();
        });
        it('Check car', () => {
            EndToEnd.btnAddToCarOne;
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
            EndToEnd.btnProductLinkOne;
            EndToEnd.btnbtnAddToCarOne;
            EndToEnd.btnShoppingCar;
            EndToEnd.btnCheckOut;
            EndToEnd.testCheckOut('santiago', 'ottolini', '2000');
            browserPause();
            EndToEnd.btnConinueCheckOut;
            EndToEnd.btnFinish;
            browserPause();
            EndToEnd.btnBackToHome;
            browserPause();
        });
    });
    describe('END TO END TEST WITH THREE PRODUCT', () => {
        it('Check out with more products', () => {
            EndToEnd.btnAddToCarOne;
            browserPause();
            EndToEnd.btnAddToCarTwo;
            browserPause();
            EndToEnd.btnAddToCarThree;
            browserPause();
            EndToEnd.btnShoppingCar;
            browserPause();
            EndToEnd.btnCheckOut;
            browserPause();
            EndToEnd.testCheckOut('santiago', 'ottolini', '2000');
            EndToEnd.btnConinueCheckOut;
            EndToEnd.btnFinish;
            browserPause();
            EndToEnd.btnBackToHome;
        });
        it('Complete process', () => {
            EndToEnd.btnProductLinkOne;
            EndToEnd.btnAddToCarOne;
            browserPause();
            EndToEnd.btnBackToProduct;
            EndToEnd.btnProductLinkTwo;
            EndToEnd.btnAddToCarTwo;
            browserPause();
            EndToEnd.btnBackToProduct;
            EndToEnd.btnProductLinkThree;
            EndToEnd.btnAddToCarThree;
            browserPause();
            EndToEnd.btnShoppingCar;
            browserPause();
            EndToEnd.btnCheckOut;
            browserPause();
            EndToEnd.testCheckOut('santiago', 'ottolini', '2000');
            EndToEnd.btnConinueCheckOut;
            EndToEnd.btnFinish;
            browserPause();
            EndToEnd.btnBackToHome;
        });
        it('Error checkout information', () => {
            EndToEnd.btnProductLinkOne;
            EndToEnd.btnAddToCarOne;
            browserPause();
            EndToEnd.btnBackToProduct;
            EndToEnd.btnProductLinkTwo;
            EndToEnd.btnAddToCarTwo;
            browserPause();
            EndToEnd.btnBackToProduct;
            EndToEnd.btnProductLinkThree;
            EndToEnd.btnAddToCarThree;
            browserPause();
            EndToEnd.btnShoppingCar;
            browserPause();
            EndToEnd.btnCheckOut;
            browserPause();
            EndToEnd.testCheckOut('', 'ottolini', '2000');
            EndToEnd.btnConinueCheckOut;
            expect(EndToEnd.errorFirstName).toBe('Error: First Name is required');
            browserPause();
            EndToEnd.btnCancel;
            EndToEnd.btnCheckOut;
            EndToEnd.testCheckOut('santiago', 'ottolini', '');
            EndToEnd.btnConinueCheckOut;
            expect(EndToEnd.errorPostalCode).toBe('Error: Postal Code is required');
            browserPause();
            EndToEnd.btnCancel;
            EndToEnd.btnCheckOut;
            EndToEnd.testCheckOut('santiago', '', '2000');
            EndToEnd.btnConinueCheckOut;
            expect(EndToEnd.errorLastName).toBe('Error: Last Name is required');
            browserPause();
        });
    });
});
