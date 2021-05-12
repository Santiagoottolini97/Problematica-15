class EndToEnd {
    get btnProductLink() {
        return $('a[id="item_4_title_link"]').click();
    }
    get btnAddToCar() {
        return $('button[id="add-to-cart-sauce-labs-backpack"]').click();
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
    get inputName() {
        return $('input[id="first-name"]');
    }
    get inputLastName() {
        return $('input[id="last-name"]');
    }
    get inputZipCode() {
        return $('input[id="postal-code"]');
    }
    testCheckOut(name, lastname, zipcode) {
        this.inputName.setValue(name);
        this.inputLastName.setValue(lastname);
        this.inputZipCode.setValue(zipcode);
    }
}

module.exports = new EndToEnd();

/*div>
           div[id="inventory_container"]>
           div[id="inventory_container"]>
           div[class="inventory_list"]>
           div[class="inventory_item"]>
           div[class="inventory_item_description"]>
           div[class="inventory_item_label"]>*/
