import { expect } from '@playwright/test';

export class Base {
    constructor(page) {
        this.page = page;
    }

    /**
     * The method below checks for the exact text to be visible on the webpage
     * It also checks for visibility of element
     * The method accepts 1 or 2 parameters
     * @param locator 
     */

    async checkText(locator, value) {
        if (arguments.length === 1) {
            await expect(locator).toBeVisible();
        }
        else if (arguments.length === 2) {
            await expect(locator).toBeVisible();
            await expect(locator).toHaveText(value);
        }
    }

    /**
     * The method below goes to a specific url that is passed as a parameter
     * @param url 
     */

    async goToUrl(url) {
        await this.page.goto(url);
    }

}