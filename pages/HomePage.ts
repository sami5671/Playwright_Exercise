import { Page, expect } from "@playwright/test";

export class HomePage {
  private readonly productsLink: string = 'a[href="/products"]';
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto("/");
  }

  async verifyHomePageVisible() {
    await expect(this.page.locator("body")).toBeVisible();
  }

  async clickProducts() {
    await this.page.locator(this.productsLink).click();
  }
}
