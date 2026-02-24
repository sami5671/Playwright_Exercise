import { Page, expect, Locator } from "@playwright/test";

export class CartPage {
  private readonly cartRows: Locator = this.page.locator(".cart_info tbody tr");
  private readonly cartPrice: string = ".cart_price p";
  private readonly cartQuantity: string = ".cart_quantity button";
  private readonly cartTotal: string = ".cart_total p";
  private readonly cartProductName: string = ".cart_description h4 a";

  constructor(private page: Page) {}
  async verifyProductsCount(count: number) {
    await expect(this.cartRows).toHaveCount(count);
  }

  async verifyProductDetails(index: number, expectedName: string) {
    const row = this.cartRows.nth(index);
    await expect(row).toBeVisible();

    // product name assertion
    await expect(row.locator(this.cartProductName)).toHaveText(expectedName);

    const priceText = await row.locator(this.cartPrice).innerText();
    const quantityText = await row.locator(this.cartQuantity).innerText();
    const totalText = await row.locator(this.cartTotal).innerText();

    const priceValue = this.parseCurrency(priceText);
    const totalValue = this.parseCurrency(totalText);
    const quantityValue = parseInt(quantityText, 10);

    // quantity assertion
    expect(quantityValue).toBe(1);

    // total price assertion
    expect(totalValue).toBe(priceValue * quantityValue);
  }

  private parseCurrency(value: string): number {
    return parseInt(value.replace(/[^0-9]/g, ""), 10);
  }
}
