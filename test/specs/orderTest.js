const LoginPage = require("../pageobjects/login.page");
const Order = require("../pageobjects/order");

describe("Test order items", () => {
  function browserPause() {
    browser.pause(2000);
  }

  //Variables
  const swagLabsUrl = "https://www.saucedemo.com/";

  describe("LOGIN", () => {
    it("Fields complete", () => {
      browser.url(swagLabsUrl);
      LoginPage.testLogin("standard_user", "secret_sauce");
      browserPause();
    });
  });
  describe("NAME (A to Z)", () => {
    it("Order by name (a-z)", () => {
      Order.btnOrder;
      expect(Order.textNameAZ).toBe("Name (A to Z)");
      Order.btnNameAZ;
      browserPause();
    });
  });
  describe("NAME (Z to A)", () => {
    it("Order by name (z-a)", () => {
        Order.btnOrder;
        expect(Order.textNameZA).toBe("Name (Z to A)");
        Order.btnNameZA;
        browserPause();
    });
  });
  describe("LOW TO HIGH", () => {
    it("Order by price (low-high)", () => {
        Order.btnOrder;
        expect(Order.textPriceLowHigh).toBe("Price (low to high)");
        Order.btnPriceLowHigh;
        browserPause();
    });
  });
  describe("HIGH TO LOW", () => {
    it("Order by price (high-low)", () => {
        Order.btnOrder;
        expect(Order.textPriceHighLow).toBe("Price (high to low)");
        Order.btnPriceHighLow;
        browserPause();
    });
  });
});
