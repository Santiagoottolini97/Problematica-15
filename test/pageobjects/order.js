class Order {
    get textNameAZ() {
        return $('select[class="product_sort_container"]>option[value="az"]').getText();
    }
    get textNameZA() {
        return $('select[class="product_sort_container"]>option[value="za"]').getText();
    }
    get textPriceLowHigh() {
        return $('select[class="product_sort_container"]>option[value="lohi"]').getText();
    }
    get textPriceHighLow() {
        return $('select[class="product_sort_container"]>option[value="hilo"]').getText();
    }
    
    get btnOrder() {
        return $('select[class="product_sort_container"]').click();
    }
    get btnNameAZ() {
        return $('select[class="product_sort_container"]>option[value="az"]').click();
    }
    get btnNameZA() {
        return $('select[class="product_sort_container"]>option[value="za"]').click();
    }
    get btnPriceLowHigh() {
        return $('select[class="product_sort_container"]>option[value="lohi"]').click();
    }
    get btnPriceHighLow() {
        return $('select[class="product_sort_container"]>option[value="hilo"]').click();
    }
}

module.exports = new Order();
