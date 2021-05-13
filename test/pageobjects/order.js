class Order {
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
