class Order {
    get btnOrder() {
        return $('select[class="product_sort_container"]').click();
    }
    get btnNameAZ() {
        return $('option[value="az"]').click();
    }
    get btnNameZA() {
        return $('option[value="za"]').click();
    }
    get btnPriceLowHigh() {
        return $('option[value="lohi"]').click();
    }
    get btnPriceHighLow() {
        return $('option[value="hilo"]').click();
    }
}

module.exports = new Order();
