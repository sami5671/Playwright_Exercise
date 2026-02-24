import { Page } from "@playwright/test";

export class ProductsPage {
  private readonly productWrapper: string = ".product-image-wrapper";
  private readonly addToCartBtn: string = ".add-to-cart";
  private readonly continueShoppingBtn: string = "button.close-modal";
  private readonly viewCartLink: string = 'a[href="/view_cart"]';

  constructor(private page: Page) {}

  async addProductToCartByIndex(index: number) {
    const product = this.page.locator(this.productWrapper).nth(index);
    await product.hover();
    await product.locator(this.addToCartBtn).first().click();
  }

  async clickContinueShopping() {
    await this.page.locator(this.continueShoppingBtn).click();
  }

  async clickViewCart() {
    await this.page.locator(this.viewCartLink).first().click();
  }
}
