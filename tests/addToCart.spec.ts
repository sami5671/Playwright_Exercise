import { test } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { ProductsPage } from "../pages/ProductsPage";
import { CartPage } from "../pages/CartPage";

test("Add multiple products to cart and verify details", async ({ page }) => {
  // created objects for page classes
  const homePage = new HomePage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  // Launch & Navigate
  await homePage.navigate();

  // Verify home page
  await homePage.verifyHomePageVisible();

  // Click Products
  await homePage.clickProducts();

  // Add first product
  await productsPage.addProductToCartByIndex(0);
  await productsPage.clickContinueShopping();

  // Add second product
  await productsPage.addProductToCartByIndex(1);
  await productsPage.clickContinueShopping();

  // View Cart
  await productsPage.clickViewCart();

  // Verify both products added
  await cartPage.verifyProductsCount(2);

  // Verify price, quantity, total for both
  await cartPage.verifyProductDetails(0, "Blue Top");
  await cartPage.verifyProductDetails(1, "Men Tshirt");
});
