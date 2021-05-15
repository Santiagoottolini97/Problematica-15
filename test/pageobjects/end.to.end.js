class EndToEnd {
    get btnProductLinkOne() {
        return $('a[id="item_4_title_link"]').click();
    }
    get btnProductLinkTwo() {
        return $('a[id="item_0_title_link"]').click();
    }
    get btnProductLinkThree() {
        return $('a[id="item_1_title_link"]').click();
    }
    get btnAddToCarOne() {
        return $('button[id="add-to-cart-sauce-labs-backpack"]').click();
    }
    get btnAddToCarTwo() {
        return $('button[id="add-to-cart-sauce-labs-bike-light"]').click();
    }
    get btnCancel() {
        return $('button[id="cancel"]').click();
    }
    get btnAddToCarThree() {
        return $('button[id="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    }
    get btnRemoveToCar() {
        return $('button[id="remove-sauce-labs-backpack"]').click();
    }
    get btnShoppingCar() {
        return $('a[class="shopping_cart_link"]').click();
    }
    get btnContinueShopping() {
        return $('button[id="continue-shopping"]').click();
    }
    get btnFinish() {
        return $('button[id="finish"]').click();
    }
    get btnBackToHome() {
        return $('button[id="back-to-products"]').click();
    }
    get btnCheckOut() {
        return $('button[id="checkout"]').click();
    }
    get btnConinueCheckOut() {
        return $('input[id="continue"]').click();
    }
    get btnBackToProduct() {
        return $('button[id="back-to-products"]').click();
    }
    get inputName() {
        return $('input[id="first-name"]');
    }
    get inputLastName() {
        return $('input[id="last-name"]');
    }
    get inputZipCode() {
        return $('input[id="postal-code"]');
    }
    get errorFirstName() {
        return $(
        'div[class="error-message-container error"]>h3').getText();
    }
    get errorLastName() {
        return $(
        'div[class="error-message-container error"]>h3').getText();
    }
    get errorPostalCode() {
        return $(
        'div[class="error-message-container error"]>h3').getText();
    }
    
    testCheckOut(name, lastname, zipcode) {
        this.inputName.setValue(name);
        this.inputLastName.setValue(lastname);
        this.inputZipCode.setValue(zipcode);
    }
}

module.exports = new EndToEnd();


